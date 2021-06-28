import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

//scss
import HeaderStyle from "./Header.module.scss";

const Header = () => {
  return (
    <Navbar expand="sm" className={HeaderStyle.navbar}>
      <Navbar.Brand as={Link} to="/">
        <h1 className="text-danger">Restro</h1>
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      {/* <Navbar.Collapse id="basic-navbar-nav" className={HeaderStyle.nav}>
      <Nav className="ml-auto">
        <ul>
          <li>
            <Link to="/" activeClassName={HeaderStyle.activeLink}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/contact">CONTACTS</Link>
          </li>
          <li>
            <Link to="/plan">PLANS</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
        </ul>
      </Nav>
    </Navbar.Collapse> */}
    </Navbar>
  );
};

export default Header;
