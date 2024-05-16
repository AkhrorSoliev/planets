// style
import style from "./NavbarHidden.module.css";

// nav links
import NavLinks from "./NavHiddenLinks";

function NavbarHidden({ showNavbar, toggleNavbar }) {
  return (
    <div
      className={`${style["navbar__hidden"]} ${
        showNavbar ? "active-toggle" : ""
      }`}
    >
      <nav className={style["sitenav__hidden"]}>
        <ul className={style["sitenav__list__hidden"]}>
          <NavLinks toggleNavbar={toggleNavbar} />
        </ul>
      </nav>
    </div>
  );
}

export default NavbarHidden;
