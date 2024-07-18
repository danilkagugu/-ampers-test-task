import { useEffect, useState } from "react";
// import { getCampersApi } from "../../services/advetrs";
import CatalogItem from "../CatalogItem/CatalogItem";
import css from "./CatalogList.module.css";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import ModalItem from "../ModalItem/ModalItem";
import scrollController from "../../services/noScroll";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
} from "../../redux/campers/selectors";
import { getCampers } from "../../redux/campers/operations";

const CatalogList = () => {
  const [selectId, setSelectId] = useState(null);
  const [counterPages, setCounterPages] = useState(4);
  const [open, setOpen] = useState(false);
  const campers = useSelector(selectCampers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

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

  const loadMoreItems = () => {
    setCounterPages((prev) => prev + 4);
  };
  const getSelectedCamper = () => {
    return campers.find((camper) => camper._id === selectId);
  };

  return (
    <>
      <div>
        <ul className={css.catalog}>
          {campers &&
            campers
              .slice(0, counterPages)
              .map(
                ({
                  _id,
                  gallery,
                  name,
                  rating,
                  location,
                  description,
                  adults,
                  transmission,
                  engine,
                  details,
                  reviews,
                  price,
                }) => (
                  <li className={css.catalogItem} key={_id}>
                    <CatalogItem
                      id={_id}
                      src={gallery[0]}
                      name={name}
                      rating={rating}
                      location={location}
                      description={description}
                      adults={adults}
                      transmission={transmission}
                      engine={engine}
                      kitchen={details.kitchen}
                      bathroom={details.bathroom}
                      beds={details.beds}
                      reviews={reviews.length}
                      price={price}
                      ac={details.airConditioner}
                      openModal={() => {
                        handleOpenModal(_id);
                      }}
                    />
                  </li>
                )
              )}
        </ul>
        {counterPages < campers.length && (
          <button className={css.btnLoadMore} onClick={loadMoreItems}>
            Load More
          </button>
        )}
        {open && selectId !== null && (
          <ModalWrapper modalIsOpen={open} onCloseModal={handleCloseModal}>
            <ModalItem {...getSelectedCamper()} />
          </ModalWrapper>
        )}
      </div>
    </>
  );
};

export default CatalogList;
