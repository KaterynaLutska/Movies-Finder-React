import s from './MoviesList.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import MoviePreview from '../MoviePreview';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={s.MoviesList}>
      {movies.map(el => (
        <li key={el.id}>
          <Link
            to={{
              pathname: `movies/${el.id}`,
              state: { from: location },
            }}
          >
            <MoviePreview title={el.title} imgUrl={el.poster_path} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array,
};
