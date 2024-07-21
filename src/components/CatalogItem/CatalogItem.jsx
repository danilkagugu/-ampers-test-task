import css from "./CatalogItem.module.css";
import sprite from "../../assets/icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { getCamperID } from "../../redux/campers/operations";
import { selectCamperFavorite } from "../../redux/campers/selectors";

const CatalogItem = ({
  id,
  src,
  name,
  rating,
  reviews,
  location,
  description,
  adults,
  transmission,
  engine,
  kitchen,
  bathroom,
  beds,
  price,
  ac,
  openModal,
}) => {
  const dispatch = useDispatch();
  const handleFavoriteClick = () => {
    dispatch(getCamperID(id));
  };
  const favorites = useSelector(selectCamperFavorite);
  const isFavorite = favorites.includes(id);
  return (
    <div className={css.catalogContainer}>
      <div className={css.catalogBox}>
        <img className={css.itemImage} src={src} alt={name} />
        <div className={css.itemContent}>
          <div className={css.catalogHeader}>
            <h2 className={css.itemTitle}>{name}</h2>
            <p className={css.itemPrice}>€{price}.00</p>
            <svg
              className={isFavorite ? css.heartActive : css.heartIcon}
              width="16"
              height="16"
              onClick={handleFavoriteClick}
            >
              <use href={`${sprite}#icon-heart`}></use>
            </svg>
          </div>
          <div className={css.ratingBox}>
            <svg width="16" height="16" className={css.iconStar}>
              <use href={`${sprite}#icon-rating`}></use>
            </svg>
            <p className={css.itemRating}>
              {rating} ({reviews} reviews)
            </p>
            <svg width="16" height="16">
              <use href={`${sprite}#icon-location`}></use>
            </svg>
            <p className={css.itemLocation}>{location}</p>
          </div>

          <p className={css.itemDescription}>{description}</p>
          <ul className={css.itemDetails}>
            <li className={css.itemList}>
              <svg width="16" height="16">
                <use href={`${sprite}#icon-users`}></use>
              </svg>
              <p>{adults} adults</p>
            </li>
            <li className={css.itemList}>
              <svg width="16" height="16">
                <use href={`${sprite}#icon-korobka`}></use>
              </svg>
              <p>{transmission}</p>
            </li>
            <li className={css.itemList}>
              <svg width="16" height="16">
                <use href={`${sprite}#icon-petrol`}></use>
              </svg>
              <p>{engine}</p>
            </li>

            {kitchen && (
              <li className={css.itemList}>
                <svg width="16" height="16">
                  <use href={`${sprite}#icon-kitchen`}></use>
                </svg>
                <p>Kitchen</p>
              </li>
            )}

            {bathroom && (
              <li className={css.itemList}>
                <svg width="16" height="16">
                  <use href={`${sprite}#icon-shower`}></use>
                </svg>
                <p>{bathroom} bathroom</p>
              </li>
            )}
            {beds > 0 && (
              <li className={css.itemList}>
                <svg width="16" height="16">
                  <use href={`${sprite}#icon-beds`}></use>
                </svg>
                <p>{beds} beds</p>
              </li>
            )}
            {ac > 0 && (
              <li className={css.itemList}>
                <svg width="16" height="16">
                  <use href={`${sprite}#icon-conditioner`}></use>
                </svg>
                <p>AC</p>
              </li>
            )}
          </ul>
          <button
            className={css.btnShowMore}
            onClick={() => {
              openModal(true);
            }}
          >
            Show more
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
