import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import Icon from '../common/Icon/Icon';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <NavLink to="/" className={s.logo}>
          
          <span>TravelTrucks</span>
        </NavLink>
        <nav className={s.nav}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? s.activeLink : s.navLink)}
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) => (isActive ? s.activeLink : s.navLink)}
          >
            Catalog
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? s.activeLink : s.navLink)}
          >
            Favourite
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
