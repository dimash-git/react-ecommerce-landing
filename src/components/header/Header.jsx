import React, { useState } from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";

const breakpoints = {
  tablet: 768,
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const toggleMenu = () => {
    if (window.innerWidth < breakpoints.tablet) {
      setShowMenu((showMenu) => !showMenu);
    }
  };
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="Logo" />
        <span>Amazon</span>
      </div>
      <div className={css.right}>
        {window.innerWidth < breakpoints.tablet && (
          <div className={css.bars} onClick={toggleMenu}>
            <GoThreeBars />
          </div>
        )}

        <ul
          className={css.menu}
          style={{ display: showMenu ? "inherit" : "none" }}
        >
          <li>Collections</li>
          <li>Brands</li>
          <li>News</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>
        <input type="text" className={css.search} placeholder="search" />

        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
