// react router dom imports
import { NavLink } from "react-router-dom";

// site nav links
const navLinks = [
  {
    id: 1,
    text: "mercury",
    url: "/planet/Mercury",
  },
  {
    id: 2,
    text: "venus",
    url: "/planet/Venus",
  },
  {
    id: 3,
    text: "earth",
    url: "/planet/Earth",
  },
  {
    id: 4,
    text: "mars",
    url: "/planet/Mars",
  },
  {
    id: 5,
    text: "jupiter",
    url: "/planet/Jupiter",
  },
  {
    id: 6,
    text: "saturn",
    url: "/planet/Saturn",
  },
  {
    id: 7,
    text: "uranus",
    url: "/planet/Uranus",
  },
  {
    id: 8,
    text: "neptune",
    url: "/planet/Neptune",
  },
];

// style
import style from "./Navbar.module.css";

function NavLinks() {
  return (
    <>
      {navLinks.map((navLink) => {
        const { id, url, text } = navLink;
        return (
          <li key={id} className={style["sitenav__item"]}>
            <NavLink to={url}>{text}</NavLink>
          </li>
        );
      })}
    </>
  );
}

export default NavLinks;
