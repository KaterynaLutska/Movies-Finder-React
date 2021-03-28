import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const NavigationDeteils = ({ url, location }) => {
  //console.log(props, 'url');

  return (
    <ul>
      <li>
        <NavLink
          to={{
            pathname: `${url}/cast`,
            state: { ...location.state },
          }}
          className={s.NavLink}
          activeClassName={s.NavLinkActive}
        >
          Cast
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to={{
            pathname: `${url}/reviews`,
            state: { ...location.state },
          }}
          className={s.NavLink}
          activeClassName={s.NavLinkActive}
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};
export default NavigationDeteils;
