import FormReservation from "../FormReservation/FormReservation";
import ReviewsInfoItem from "../ReviewsInfoItem/ReviewsInfoItem";
import css from "./ReviewsInfo.module.css";

const ReviewsInfo = ({ reviews }) => {
  return (
    <div className={css.reviewsBox}>
      <div className={css.reviewsDetailsBox}>
        <ul className={css.reviewsList}>
          {reviews &&
            reviews.map((review, i) => (
              <li key={i}>
                <ReviewsInfoItem
                  name={review.reviewer_name}
                  comment={review.comment}
                  star={review.reviewer_rating}
                />
              </li>
            ))}
        </ul>
      </div>
      <div className={css.formContainer}>
        <FormReservation />
      </div>
    </div>
  );
};

export default ReviewsInfo;
