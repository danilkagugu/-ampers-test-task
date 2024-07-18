import { Link, NavLink } from "react-router-dom";
import css from "./HeaderMenu.module.css";
import sprite from "../../assets/icon.svg";

const HeaderMenu = () => {
  return (
    <div className={css.headerContainer}>
      <div className={css.headerContacts}>
        <ul className={css.contactList}>
          <li className={css.contactItem}>
            <a
              className={`${css.socialLink} ${css.instagram}`}
              href="https://www.instagram.com/goitclub/?hl=uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <svg
                className={`${css.iconSocialLink} ${css.iconInstagram}`}
                width="16"
                height="16"
              >
                <use href={`${sprite}#icon-instagram`}></use>
              </svg>
            </a>
          </li>
          <li className={css.contactItem}>
            <a
              className={`${css.socialLink} ${css.facebook}`}
              href="https://www.facebook.com/goITclub/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <svg
                className={`${css.iconSocialLink} ${css.iconFacebook}`}
                width="16"
                height="16"
              >
                <use href={`${sprite}#icon-facebook`}></use>
              </svg>
            </a>
          </li>
          <li className={css.contactItem}>
            <a
              className={`${css.socialLink} ${css.linkedin}`}
              href="https://www.linkedin.com/school/goit-start-your-career-in-it/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <svg
                className={`${css.iconSocialLink} ${css.iconLinkedin}`}
                width="16"
                height="16"
              >
                <use href={`${sprite}#icon-linkedin`}></use>
              </svg>
            </a>
          </li>
          <li className={css.contactItem}>
            <a
              className={`${css.phone} ${css.number}`}
              href="tel:+380503661777"
            >
              +380-50-366-1777
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
        </ul>
      </div>
      <div className={css.headerMenu}>
        <div className={css.logoBox}>
          <Link className={css.logo} to={"/"}>
            CampersWorld
          </Link>
          <span className={css.circ}></span>
        </div>
        <nav className={css.menu}>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? `${css.active} ${css.itemLink}` : css.itemLink
            }
          >
            Каталог
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? `${css.active} ${css.itemLink}` : css.itemLink
            }
          >
            Улюблене
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? `${css.active} ${css.itemLink}` : css.itemLink
            }
          >
            Контакти
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default HeaderMenu;
