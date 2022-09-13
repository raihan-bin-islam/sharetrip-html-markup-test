import React, { useState } from "react";
// SVG Components
import Logo from "../../svg/logo";
// Style
import {
  navStyle,
  logo,
  linkList,
  linkListOpen,
  active,
  notActive,
  hamburgerIcon,
  hamburgerOpen,
} from "./navbar.module.scss";
// Data
import links from "./links/links.json";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState([false, false, false, false, false, false, false, false, false, false]);

  const openMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleActiveLink = (index) => {
    console.log(index);
    setActiveLink((prev) => {
      let temp = [false, false, false, false, false, false, false, false, false, false];
      temp[index] = true;
      prev = temp;
      return prev;
    });
  };

  return (
    <nav className={navStyle}>
      <Logo classes={logo} />
      <ul className={`${linkList} ${menuOpen ? linkListOpen : ""}`}>
        {links.map(({ link }, index) => {
          return (
            <li key={index}>
              <a
                onClick={() => handleActiveLink(index)}
                className={`${activeLink[index] === true ? active : notActive}`}
                href="#"
              >
                {link}
              </a>
            </li>
          );
        })}
      </ul>
      <div onClick={openMobileMenu} className={`${hamburgerIcon} ${menuOpen ? hamburgerOpen : ""}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
