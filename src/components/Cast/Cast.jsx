import s from './Cast.module.css';
import PropTypes from 'prop-types';

const Cast = ({ cast, imgSrc }) => {
  return (
    <div>
      {cast.length === 0 ? (
        <h3 className={s.CastTitle}>We don`t have information about cast.</h3>
      ) : (
        <ul className={s.Cast}>
          {cast.slice(0, 6).map(el => (
            <li key={el.id}>
              {el.name}
              <img
                src={
                  el.profile_path !== null
                    ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                    : imgSrc
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
  imgSrc:
    'https://static.ukrinform.com/photos/2018_12/thumb_files/630_360_1546000648-830.jpg',
};

Cast.propTypes = {
  cast: PropTypes.array,
};
