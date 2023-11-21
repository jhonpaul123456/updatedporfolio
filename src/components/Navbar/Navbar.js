import React, { useState } from "react";
import styles from "./Navbar.module.css";

// import { getImageUrl } from '../../utils';

export const Navbar = () => {
  const ham = require("./menuicon.png");
  const closeham = require("./closemenuicon.png");
  const [menuActive, setMenuActive] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuActive ? closeham : ham}
          alt="menu button"
          onClick={() => setMenuActive(!menuActive)}
        />

        <ul className={`${styles.menuItems} ${menuActive && styles.menuActive}`}
        onClick={() => setMenuActive(false)}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
