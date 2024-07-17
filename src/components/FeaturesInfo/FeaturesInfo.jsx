import { HiOutlineUsers } from "react-icons/hi2";
import { TbToolsKitchen2 } from "react-icons/tb";
import { LiaBedSolid } from "react-icons/lia";
import css from "./FeaturesInfo.module.css";

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

        {CD > 0 && <li className={css.itemList}>{CD} air conditioner </li>}
        {radio > 0 && <li className={css.itemList}>{radio} radio </li>}
        {hob > 0 && <li className={css.itemList}>{hob} hob </li>}
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
  );
};

export default FeaturesInfo;
