import { Component } from 'react';
import s from '../../views/MovieDetailsPage/MovieDetailsPage.module.css';
import PropTypes from 'prop-types';

class MovieDetailsCard extends Component {
  render() {
    const {
      title,
      genres,
      overview,
      poster_path,
      release_date,
      vote_average,
    } = this.props.movie;

    return (
      <div className={s.MovieDetailsPageWrap}>
        <div className={s.MovieDetailsPage}>
          <img
            src={
              poster_path !== null
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : this.props.imgSrc
            }
            width="350px"
          ></img>
          <div className={s.MovieDetailsPageInfo}>
            <h1>{title} </h1>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Release data</h2>
            <p>{release_date}</p>
            <h2>Vote</h2>
            <p>{vote_average}</p>
            <h2>Genres</h2>
            {genres && (
              <ul className={s.Genre}>
                {genres.map(el => (
                  <li key={el.id}>{el.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetailsCard;

MovieDetailsCard.defaultProps = {
  imgSrc:
    'https://static.ukrinform.com/photos/2018_12/thumb_files/630_360_1546000648-830.jpg',
};

MovieDetailsCard.propTypes = {
  movies: PropTypes.array,
};
