import PropTypes from 'prop-types';
import { Component } from 'react';

import s from './MoviePreview.module.css';

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
  imgSrc:
    'https://static.ukrinform.com/photos/2018_12/thumb_files/630_360_1546000648-830.jpg',
};

MoviePreview.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string,
};
