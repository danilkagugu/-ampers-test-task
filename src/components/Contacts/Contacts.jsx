import css from "./Contacts.module.css";
import sprite from "../../assets/icon.svg";
const Contacts = () => {
  return (
    <>
      <h2 className={css.title}>Contacts</h2>
      <div className={css.contactList}>
        <div className={css.contactBox}>
          <svg width="16" height="16">
            <use href={`${sprite}#icon-emeil`}></use>
          </svg>
          <a className={css.contactText} href="mailto:info@campersworld">
            info@campersworld
          </a>
        </div>
        <div className={css.contactBox}>
          <svg width="16" height="16">
            <use href={`${sprite}#icon-phone`}></use>
          </svg>
          <a className={css.contactText} href="tel:+38099999999">
            +380-99-999-9999
          </a>
        </div>
      </div>
    </>
  );
};

export default Contacts;
