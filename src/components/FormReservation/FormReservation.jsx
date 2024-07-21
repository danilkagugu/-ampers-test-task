import DatePicker from "react-datepicker";
import css from "./FormReservation.module.css";
import { CiCalendar } from "react-icons/ci";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { reservationSchema } from "../../services/yupSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";
const FormReservation = () => {
  const [startDate, setStartDate] = useState(null);
  const handleSubmit = () => {
    window.location.reload();
  };
  const INITIAL_FORM = {
    name: "",
    email: "",
    calendar: "",
    comment: "",
  };
  return (
    <>
      <h2 className={css.titleForm}>Book your campervan now</h2>
      <p className={css.textForm}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={reservationSchema}
        initialValues={INITIAL_FORM}
      >
        <Form className={css.form}>
          <Field
            className={css.inputForm}
            type="text"
            placeholder="Name"
            name="name"
          />
          <ErrorMessage name="name" component="div" className={css.error} />
          <Field
            className={css.inputForm}
            type="text"
            placeholder="Email"
            name="email"
          />
          <ErrorMessage name="email" component="div" className={css.error} />
          <div className={css.calendarInput}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Booking date"
              className={css.inputSearch}
              dateFormat="iiii, MMMM d, yyyy"
              name="calendar"
            />
            <CiCalendar
              onClick={() => {
                document
                  .querySelector(".react-datepicker__input-container input")
                  .focus();
              }}
            />
          </div>
          <ErrorMessage name="calendar" component="div" className={css.error} />
          <Field
            className={` ${css.inputComment}`}
            type="text"
            placeholder="Comment"
            name="comment"
          />
          <ErrorMessage name="comment" component="div" className={css.error} />
          <button className={css.btnForm} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default FormReservation;
