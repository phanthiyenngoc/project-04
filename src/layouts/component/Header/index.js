import React from "react";
import "./Header.css";
import Container from "../../../components/common/Container";
import logo from "../../../acessts/img/icon/logo.png";

import Button from "../../../components/common/Button";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <nav className="header__inner">
          <div className="nav__logo">
            <img src={logo} alt="logo" className="nav__logo-img" />
          </div>
          <ul className="nav__list">
            <li className="nav__item">
              <a hreft="#!" className="nav__item--link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a hreft="#!" className="nav__item--link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a hreft="#!" className="nav__item--link">
                Services & Rates
              </a>
            </li>
            <li className="nav__item">
              <a hreft="#!" className="nav__item--link">
                Reviewa
              </a>
            </li>
            <li className="nav__item">
              <a hreft="#!" className="nav__item--link">
                Contacts us
              </a>
            </li>
          </ul>
          <Button className="nav__action">Sign up</Button>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
