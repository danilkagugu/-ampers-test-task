import { Link, NavLink } from "react-router-dom";
import css from "./HeaderMenu.module.css";

const HeaderMenu = () => {
  return (
    <div className={css.headerContainer}>
      <div className={css.headerContacts}>
        <ul className={css.contactList}>
          <li className={css.contactItem}>in</li>
          <li className={css.contactItem}>link</li>
          <li className={css.contactItem}>fa</li>
          <li className={css.contactItem}>tel</li>
        </ul>
      </div>
      <div className={css.headerMenu}>
        <h1>
          <Link to={"/"}>CampersWorld</Link>
        </h1>
        <nav>
          <NavLink
            to="/catalog"
            className={({ isActive }) => (isActive ? css.active : css.menuItem)}
          >
            Каталог
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? css.active : css.menuItem)}
          >
            Улюблене
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? css.active : css.menuItem)}
          >
            Контакти
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default HeaderMenu;
