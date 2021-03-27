import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

import routes from '../../routes';
import BtnBack from '../BtnBack';

const Navigation = () => {
  return (
    <nav className={(s.nav, s.navPills)}>
      <NavLink
        exact
        to={routes.home}
        className={s.NavLink}
        activeClassName={s.NavLinkActive}
      >
        Home
      </NavLink>
      <NavLink
        exact
        to={routes.movies}
        className={s.NavLink}
        activeClassName={s.NavLinkActive}
      >
        Movies
      </NavLink>
      <BtnBack />
    </nav>
  );
};

export default Navigation;