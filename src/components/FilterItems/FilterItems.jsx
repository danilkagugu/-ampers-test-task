import sprite from "../../assets/icon.svg";
import css from "./FilterItems.module.css";
const FilterItems = () => {
  return (
    <div>
      <div className={css.locationBox}>
        <p className={css.locationText}>Location</p>
        <div className={css.locationInput}>
          <svg className={css.locationIcon} width="16" height="16">
            <use href={`${sprite}#icon-location`}></use>
          </svg>
          <p className={css.location}>Kyiv, Ukraine</p>
        </div>
      </div>
      <p className={css.filters}>Filters</p>
      <h2 className={css.vehicle}>Vehicle equipment</h2>
      <ul className={css.filtersList}>
        <li className={css.filtersItem}>
          <svg width="16" height="16">
            <use href={`${sprite}#icon-wind`}></use>
          </svg>
          <p className={css.filtersText}>AC</p>
        </li>
        <li className={css.filtersItem}>
          <svg width="16" height="16">
            <use href={`${sprite}#icon-korobka`}></use>
          </svg>
          <p className={css.filtersText}>Automatic</p>
        </li>
        <li className={css.filtersItem}>
          <svg width="16" height="16">
            <use href={`${sprite}#icon-kitchen`}></use>
          </svg>
          <p className={css.filtersText}>Kitchen</p>
        </li>
        <li className={css.filtersItem}>
          <svg width="16" height="16">
            <use href={`${sprite}#icon-tv`}></use>
          </svg>
          <p className={css.filtersText}>TV</p>
        </li>
        <li className={css.filtersItem}>
          <svg width="16" height="16">
            <use href={`${sprite}#icon-shower`}></use>
          </svg>
          <p className={css.filtersText}>Shower/WC</p>
        </li>
      </ul>
      <h2 className={css.vehicleType}>Vehicle type</h2>
      <ul className={css.vehicleList}>
        <li className={css.vehicleItem}>
          <svg width="16" height="16">
            <use href={`${sprite}#icon-camper3`}></use>
          </svg>
          <p className={css.vehicleText}>Van</p>
        </li>
        <li className={css.vehicleItem}>
          <svg width="16" height="16">
            <use href={`${sprite}#icon-camper2`}></use>
          </svg>
          <p className={css.vehicleText}>Fully Integrated</p>
        </li>
        <li className={css.vehicleItem}>
          <svg width="16" height="16">
            <use href={`${sprite}#icon-camper`}></use>
          </svg>
          <p className={css.vehicleText}>Alcove</p>
        </li>
      </ul>
      <button className={css.btnSearch}>Search</button>
    </div>
  );
};

export default FilterItems;
