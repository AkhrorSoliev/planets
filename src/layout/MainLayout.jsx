// react imports
import { useState } from "react";

// react-router-dom
import { Outlet } from "react-router-dom";

// components
import Navbar from "../components/navbar/Navbar";
import NavbarHidden from "../components/navbarHidden/NavbarHidden";

function MainLayout() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <Navbar toggleNavbar={toggleNavbar} showNavbar={showNavbar} />
      <NavbarHidden showNavbar={showNavbar} toggleNavbar={toggleNavbar} />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
