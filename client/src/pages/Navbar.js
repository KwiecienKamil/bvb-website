import React, { useState } from "react";
import { Link } from "react-scroll";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img
        src="https://www.bvb.de/extension/bvbdesign/design/bvbdesign/images/layout/logo-bvb.svg"
        alt="logo"
      />
      <Link to="home" spy={true} smooth={true} offset={-100} duration={400}>
        HOME
      </Link>
      <Link to="players" spy={true} smooth={true} offset={50} duration={400}>
        PLAYERS
      </Link>
      <Link to="shop" spy={true} smooth={true} offset={70} duration={400}>
        SHOP
      </Link>
    </div>
  );
};

export default Navbar;
