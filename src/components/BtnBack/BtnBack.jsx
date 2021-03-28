import s from './BtnBack.module.css';
import PropTypes from 'prop-types';

const BtnBack = ({ onClick }) => {
  return (
    <button className={s.Btn} type="button" onClick={onClick}>
      <span className="material-icons">fast_rewind</span>
    </button>
  );
};

export default BtnBack;

BtnBack.propTypes = {
  onClick: PropTypes.func,
};
