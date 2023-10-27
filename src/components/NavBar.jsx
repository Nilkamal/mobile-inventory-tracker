import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
export default function NavBar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <ul className={styles.navLinks}>
          <li>
            <Link className={styles.link} to='/mobiles'>
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} to='/mobiles/create'>
              Create New Mobile Stock
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
