import PropTypes from 'prop-types';
import { Component } from 'react';

import s from './MoviePreview.module.css';
import defaultImg from '../../images/default-img.jpeg';

class MoviePreview extends Component {
  render() {
    const { title, imgUrl } = this.props;
    const imgSrc = `https://image.tmdb.org/t/p/w500/${imgUrl}`;

    return (
      <div className={s.MoviePreviewThumb}>
        <img
          className={s.moviePoster}
          alt={title}
          src={imgUrl !== null ? imgSrc : this.props.imgSrc}
          width="200px"
        ></img>
        <h2 className={s.MoviePreviewTitle}>{title}</h2>
      </div>
    );
  }
}

export default MoviePreview;

MoviePreview.defaultProps = {
  imgSrc: defaultImg,
};

MoviePreview.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  imgSrc: PropTypes.string,
};
