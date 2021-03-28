import s from './Reviews.module.css';
import PropTypes from 'prop-types';

const Reviews = ({ reviews }) => {
  return (
    <div className={s.Reviews}>
      {reviews.length === 0 ? (
        <h3>We don`t have any reviews</h3>
      ) : (
        <ul>
          {reviews.map(el => (
            <li key={el.author}>
              <h4>{el.author}</h4>
              <p>{el.content.split('').slice(0, 300).join('') + '...'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.array,
  author: PropTypes.string,
  content: PropTypes.string,
};
