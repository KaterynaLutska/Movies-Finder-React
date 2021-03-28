import s from './Cast.module.css';
import PropTypes from 'prop-types';
import defaultImg from '../../images/no-image.jpeg';

const Cast = ({ cast, defaultImg }) => {
  return (
    <div>
      {cast.length === 0 ? (
        <h3 className={s.CastTitle}>
          We don`t have any information about cast.
        </h3>
      ) : (
        <ul className={s.Cast}>
          {cast.slice(0, 6).map(el => (
            <li key={el.id}>
              {el.name}
              <img
                src={
                  el.profile_path !== null
                    ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                    : defaultImg
                }
                width="100px"
                alt={el.name}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;

Cast.defaultProps = {
  defaultImg: defaultImg,
};

Cast.propTypes = {
  cast: PropTypes.array,
  defaultImg: PropTypes.string,
};
