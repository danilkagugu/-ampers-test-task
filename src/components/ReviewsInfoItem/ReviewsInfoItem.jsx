import css from "./ReviewsInfoItem.module.css";
import sprite from "../../assets/icon.svg";
const ReviewsInfoItem = ({ name, comment, star }) => {
  const starsArray = [];
  for (let i = 0; i < 5; i += 1) {
    starsArray.push(
      <svg
        key={i}
        width="16"
        height="16"
        className={i < star ? css.yellowStar : css.greyStar}
      >
        <use href={`${sprite}#icon-rating`}></use>
      </svg>
    );
  }
  return (
    <div className={css.reviewsBox}>
      <div className={css.userInfo}>
        <span className={css.circleName}>{name.slice(0, 1)}</span>
        <div>
          <h3 className={css.userInfo}>{name}</h3>
          <ul className={css.starsList}>
            {starsArray.map((star, index) => (
              <li key={index}>{star}</li>
            ))}
          </ul>
        </div>
      </div>
      <p>{comment}</p>
    </div>
  );
};

export default ReviewsInfoItem;
