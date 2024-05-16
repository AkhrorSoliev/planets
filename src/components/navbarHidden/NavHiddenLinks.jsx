// react router dom imports
import { NavLink } from "react-router-dom";

// links
const navLinks = [
  {
    id: 1,
    text: "Mercury",
    color: "#DEF4FC",
  },
  {
    id: 2,
    text: "Venus",
    color: "#F7CC7F",
  },
  {
    id: 3,
    text: "Earth",
    color: "#545BFE",
  },
  {
    id: 4,
    text: "Mars",
    color: "#FF6A45",
  },
  {
    id: 5,
    text: "Jupiter",
    color: "#ECAD7A",
  },
  {
    id: 6,
    text: "Saturn",
    color: "#FCCB6B",
  },
  {
    id: 7,
    text: "Uranus",
    color: "#65F0D5",
  },
  {
    id: 8,
    text: "Neptune",
    color: "#497EFA",
  },
];

// styles
import style from "./NavbarHidden.module.css";

function NavHiddenLinks({ toggleNavbar }) {
  return (
    <>
      {navLinks.map((link) => {
        return (
          <li
            key={link.id}
            className={style["sitenav__item__hidden"]}
            onClick={toggleNavbar}
          >
            <NavLink
              className={style["sitenav__item__hidden__link"]}
              to={`/planet/${link.text}`}
            >
              <span
                className={style["sitenav__item__hidden__cirlce"]}
                style={{ backgroundColor: link.color }}
              ></span>
              <span className={style["sitenav__item__hidden__text"]}>
                {link.text}
              </span>
              <img
                className={style["sitenav__item__hidden__icon"]}
                src="../assets/icon-chevron.svg"
                alt=""
              />
            </NavLink>
          </li>
        );
      })}
    </>
  );
}

export default NavHiddenLinks;
