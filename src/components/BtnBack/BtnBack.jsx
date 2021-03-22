import { useHistory } from 'react-router';
import s from './BtnBack.module.css';

const BtnBack = () => {
  const history = useHistory();
  const goBack = () => history.goBack();

  return (
    <button className={s.Btn} type="button" onClick={goBack}>
      <span class="material-icons">fast_rewind</span>
    </button>
  );
};
export default BtnBack;
