import { Route, NavLink, Switch } from 'react-router-dom';
import routes from '../../routes';
import BtnBack from '../BtnBack';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav classNamme={(s.nav, s.navPills)}>
      <NavLink
        exact
        to={routes.home}
        className={s.NavLink}
        activeClassName="NavLink-active"
      >
        Home
      </NavLink>

      <NavLink
        exact
        to={routes.movies}
        className={s.NavLink}
        activeClassName="NavLink-active"
      >
        Movies
      </NavLink>
      <BtnBack />
    </nav>
  );
};

export default Navigation;
