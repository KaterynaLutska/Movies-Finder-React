import PropTypes from 'prop-types';
import { Component } from 'react';

import s from './MoviePreview.module.css';
let key = '68bc44794965f90c41d1f35ad9bb144b';

class MoviePreview extends Component {
  render() {
    const { title, imgUrl } = this.props;
    const imgSrc = `https://image.tmdb.org/t/p/w500/${imgUrl}?api_key=${key}`;

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
