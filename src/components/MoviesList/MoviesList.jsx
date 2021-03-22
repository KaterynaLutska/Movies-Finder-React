import s from './MoviesList.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import routes from '../../routes';
import MoviePreview from '../MoviePreview';

const MoviesList = ({ movies }) => {
  return (
    <ul className={s.MoviesList}>
      {movies.map(el => (
        <li key={el.id}>
          <Link to={`${routes.movies}/${el.id}`}>
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
