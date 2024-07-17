import css from "./CatalogItem.module.css";
import { CiStar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TbToolsKitchen2 } from "react-icons/tb";
import { LiaBedSolid } from "react-icons/lia";
import { HiOutlineUsers } from "react-icons/hi2";
const CatalogItem = ({
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
  return (
    <div className={css.catalogContainer}>
      <div className={css.catalogBox}>
        <img className={css.itemImage} src={src} alt={name} />
        <div className={css.itemContent}>
          <div className={css.catalogHeader}>
            <h2 className={css.itemTitle}>{name}</h2>
            <p className={css.itemPrice}>
              €{price}.00 <FaRegHeart />
            </p>
          </div>
          <div className={css.ratingBox}>
            <CiStar className={css.iconStar} />
            <p className={css.itemRating}>
              {rating} ({reviews} reviews)
            </p>

            <p className={css.itemLocation}>
              <IoLocationOutline /> {location}
            </p>
          </div>

          <p className={css.itemDescription}>{description}</p>
          <ul className={css.itemDetails}>
            <li className={css.itemList}>
              <HiOutlineUsers /> {adults} adults
            </li>
            <li className={css.itemList}>{transmission}</li>
            <li className={css.itemList}>{engine}</li>
            <li className={css.itemList}>
              <TbToolsKitchen2 /> {kitchen} kitchen
            </li>
            <li className={css.itemList}>{bathroom} bathroom</li>
            <li className={css.itemList}>
              <LiaBedSolid /> {beds} beds
            </li>
            {ac > 0 && <li className={css.itemList}>AC</li>}
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
