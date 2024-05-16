// style
import style from "./Navbar.module.css";

// navLinks component
import NavLinks from "./NavLinks";

function Navbar({ toggleNavbar, showNavbar }) {
  return (
    <div className={style.navbar}>
      <div className={style["navbar__container"]}>
        {/* LOGO */}
        <h3 className={style["navbar__logo"]}>THE PLANETS</h3>
        {/* NAVBAR */}
        <nav>
          <ul className={style["sitenav__list"]}>
            <NavLinks />
          </ul>
        </nav>
        {/* TOGGLE BUTTON */}
        <button
          className={`${style["navbar__toggle__btn"]} ${
            showNavbar ? "active-toggle-btn" : ""
          }`}
          onClick={toggleNavbar}
        >
          <img
            src="../assets/icon-hamburger.svg"
            alt=""
            width={24}
            height={17}
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
