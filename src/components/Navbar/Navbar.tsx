import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

import styles from "./Navbar.module.css";

const NavContainer = styled.nav`
  align-items: center;
  background-color: white;
  display: flex;
  height: 70px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Link
        activeClass={styles.active}
        className={styles["nav-link"]}
        duration={500}
        offset={-70}
        smooth={true}
        spy={true}
        to="home"
      >
        Home
      </Link>
      <Link
        activeClass={styles.active}
        className={styles["nav-link"]}
        duration={500}
        offset={-70}
        smooth={true}
        spy={true}
        to="projects"
      >
        Projects
      </Link>
      <Link
        activeClass={styles.active}
        className={styles["nav-link"]}
        duration={500}
        offset={-70}
        smooth={true}
        spy={true}
        to="contact"
      >
        Contact
      </Link>
    </NavContainer>
  );
};

export default Navbar;
