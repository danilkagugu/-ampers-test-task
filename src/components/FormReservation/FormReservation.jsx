import DatePicker from "react-datepicker";
import css from "./FormReservation.module.css";
import { CiCalendar } from "react-icons/ci";
// import sprite from "../../assets/icon.svg";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
const FormReservation = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <>
      <h2 className={css.titleForm}>Book your campervan now</h2>
      <p className={css.textForm}>
        Stay connected! We are always ready to help you.
      </p>
      <form className={css.form}>
        <input className={css.inputForm} type="text" placeholder="Name" />
        <input className={css.inputForm} type="text" placeholder="Email" />
        <div className={css.calendarInput}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Booking date"
            className={css.inputSearch}
            dateFormat="iiii, MMMM d, yyyy"
          />
          <CiCalendar
            onClick={() => {
              document
                .querySelector(".react-datepicker__input-container input")
                .focus();
            }}
          />
        </div>
        <input
          className={` ${css.inputComment}`}
          type="text"
          placeholder="Comment"
        />
        <button className={css.btnForm} type="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default FormReservation;

//  <svg
//    width="16"
//    height="16"
//    onClick={() => {
//      document.querySelector(".react-datepicker__input-container input").focus();
//    }}
//  >
//    <use href={`${sprite}#icon-calendar`}></use>
//  </svg>;
