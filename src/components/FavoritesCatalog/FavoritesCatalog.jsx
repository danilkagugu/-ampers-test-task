import { useDispatch, useSelector } from "react-redux";
import {
  selectCamperFavorite,
  selectCampers,
} from "../../redux/campers/selectors";
import { useEffect, useState } from "react";
import { getCampers } from "../../redux/campers/operations";
import CatalogItem from "../CatalogItem/CatalogItem";
import css from "./FavoritesCatalog.module.css";
import scrollController from "../../services/noScroll";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import ModalItem from "../ModalItem/ModalItem";

const FavoritesCatalog = () => {
  const [selectId, setSelectId] = useState(null);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(selectCamperFavorite);
  const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  const favoriteCampers = campers.filter((camper) =>
    favorites.includes(camper._id)
  );

  const handleOpenModal = (id) => {
    setOpen(true);
    setSelectId(id);
    scrollController.disabledScroll();
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectId(null);
    scrollController.enabledScroll();
  };
  const getSelectedCamper = () => {
    return campers.find((camper) => camper._id === selectId);
  };
  return (
    <>
      <ul className={css.favoritesList}>
        {favoriteCampers.map((camper) => (
          <li className={css.favoritesItem} key={camper._id}>
            <CatalogItem
              id={camper._id}
              src={camper.gallery[0]}
              name={camper.name}
              rating={camper.rating}
              location={camper.location}
              description={camper.description}
              adults={camper.adults}
              transmission={camper.transmission}
              engine={camper.engine}
              kitchen={camper.details.kitchen}
              bathroom={camper.details.bathroom}
              beds={camper.details.beds}
              reviews={camper.reviews.length}
              price={camper.price}
              ac={camper.details.airConditioner}
              isFavorite={favorites.includes(camper._id)}
              openModal={() => {
                handleOpenModal(camper._id);
              }}
            />
          </li>
        ))}
      </ul>
      {open && selectId !== null && (
        <ModalWrapper modalIsOpen={open} onCloseModal={handleCloseModal}>
          <ModalItem {...getSelectedCamper()} />
        </ModalWrapper>
      )}
    </>
  );
};

export default FavoritesCatalog;
