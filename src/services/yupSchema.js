import * as Yup from "yup";

export const reservationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters!")
    .max(50, "name must be less than 50 characters!")
    .required("Name is required!"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});
