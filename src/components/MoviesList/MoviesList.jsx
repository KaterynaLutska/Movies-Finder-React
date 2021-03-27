import s from './MoviesList.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import MoviePreview from '../MoviePreview';

const MoviesList = ({ movies, location }) => {
  console.log(location, 'movielist location');

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
            <MoviePreview
              id={el.id}
              title={el.title}
              vote={el.vote_average}
              imgUrl={el.poster_path}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      vote: PropTypes.number,
      imgUrl: PropTypes.string,
    }),
  ),
  onClickModal: PropTypes.func,
};
