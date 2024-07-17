import sprite from "../../assets/icon.svg";

import css from "./FeaturesInfo.module.css";
import FormReservation from "../FormReservation/FormReservation";

const FeaturesInfo = ({
  adults,
  transmission,
  engine,
  bathroom,
  beds,
  ac,
  kitchen,
  CD,
  radio,
  hob,
  form,
  length,
  width,
  height,
  tank,
  consumption,
}) => {
  return (
    <div className={css.featuresBox}>
      <div className={css.itemDetailsBox}>
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
            {" "}
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
          <li className={css.itemList}>
            <svg width="16" height="16">
              <use href={`${sprite}#icon-shower`}></use>
            </svg>
            <p>{bathroom} bathroom</p>
          </li>
          <li className={css.itemList}>
            <svg width="16" height="16">
              <use href={`${sprite}#icon-beds`}></use>
            </svg>
            <p>{beds} beds</p>
          </li>

          {CD > 0 && (
            <li className={css.itemList}>
              <svg width="16" height="16">
                <use href={`${sprite}#icon-conditioner`}></use>
              </svg>
              <p>{CD} air conditioner</p>
            </li>
          )}
          {radio > 0 && (
            <li className={css.itemList}>
              <svg width="16" height="16">
                <use href={`${sprite}#icon-radio`}></use>
              </svg>
              <p>Radio</p>
            </li>
          )}
          {hob > 0 && (
            <li className={css.itemList}>
              <svg width="16" height="16">
                <use href={`${sprite}#icon-hob`}></use>
              </svg>
              <p>{hob} hob </p>
            </li>
          )}
          {ac > 0 && <li className={css.itemList}>AC</li>}
        </ul>
        <h2 className={css.vehicleTitle}>Vehicle details</h2>
        <ul className={css.vehicleList}>
          <li className={css.vehicleItem}>
            <p>Form</p>
            <p>{form} </p>
          </li>
          <li className={css.vehicleItem}>
            <p>Length</p>
            <p>{length} </p>
          </li>
          <li className={css.vehicleItem}>
            <p>Width</p>
            <p>{width} </p>
          </li>
          <li className={css.vehicleItem}>
            <p>Height</p>
            <p>{height} </p>
          </li>
          <li className={css.vehicleItem}>
            <p>Tank</p>
            <p>{tank} </p>
          </li>
          <li className={css.vehicleItem}>
            <p>Consumption</p>
            <p>{consumption} </p>
          </li>
        </ul>
      </div>
      <div className={css.formContainer}>
        <FormReservation />
      </div>
    </div>
  );
};

export default FeaturesInfo;
