import { Component } from 'react';
import s from './ReviewsViews.module.css';
import PropTypes from 'prop-types';

import Axios from 'axios';
let key = '68bc44794965f90c41d1f35ad9bb144b';

class ReviewsViews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const { movieId } = this.props;

    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}&page=1`,
    );

    this.setState({ reviews: response.data.results });
  }
  render() {
    const { reviews } = this.state;
    return (
      <div className={s.Reviews}>
        {reviews.length === 0 ? (
          <h3>We don`t habe any reviews</h3>
        ) : (
          <ul>
            {reviews.map(el => (
              <li>
                <h4>{el.author}</h4>
                <p>{el.content.split('').slice(0, 300).join('') + '...'}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ReviewsViews;

ReviewsViews.propTypes = {
  movieId: PropTypes.number,
};
