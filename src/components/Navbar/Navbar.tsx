import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

import styles from "./Navbar.module.css";

const Fadeaway = styled.div`
  background: linear-gradient(to top, transparent, white);
  height: 30px;
`;

const NavLinks = styled.nav`
  align-items: center;
  background-color: white;
  /* box-shadow: 0 20px 10px white; */
  display: flex;
  height: 70px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Navbar = () => {
  return (
    <div>
      <NavLinks>
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
      </NavLinks>
      <Fadeaway></Fadeaway>
    </div>
  );
};

export default Navbar;
