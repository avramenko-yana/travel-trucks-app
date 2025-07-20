import Icon from '../common/Icon/Icon';
import BookingForm from '../BookingForm/BookingForm';
import s from './Reviews.module.css';

const StarRating = ({ rating }) => {
  return (
    <div className={s.rating}>
      {[...Array(5)].map((_, i) => (
        <Icon
          key={i}
          id="star"
          className={`${s.starIcon} ${i < rating ? s.filledStar : ''}`}
        />
      ))}
    </div>
  );
};

const Reviews = ({ camper }) => {
  return (
    <div className={s.container}>
      <div className={s.reviewsColumn}>
        {camper.reviews.map((review, index) => (
          <div key={index} className={s.reviewItem}>
            <div className={s.reviewerInfo}>
              <div className={s.avatar}>
                {review.reviewer_name.charAt(0)}
              </div>
              <div>
                <p className={s.name}>{review.reviewer_name}</p>
                <StarRating rating={review.reviewer_rating} />
              </div>
            </div>
            <p className={s.comment}>{review.comment}</p>
          </div>
        ))}
      </div>
      <div className={s.formColumn}>
        <BookingForm />
      </div>
    </div>
  );
};

export default Reviews;
