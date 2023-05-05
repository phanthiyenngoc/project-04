import React from "react";
import Container from "../../../components/common/Container";
import "./Footer.css";
import "./Footer.css";
import logo from "../../../acessts/img/icon/logo.png";
import arrow_right from "../../../acessts/img/icon/ArrowRight.png";
import facebook from "../../../acessts/img/icon/facebook.png";
import twitter from "../../../acessts/img/icon/tiwer.png";
import linked from "../../../acessts/img/icon/linked.png";
import instagram from "../../../acessts/img/icon/instagram.png";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <section className="footer__inner">
          <section className="footer_left">
            <div className="bgleft"></div>
            <img src={logo} alt="" className="footer__logo" />
            <input className="footer__left--search" placeholder="Enter your email"></input>
            <span className="footer__left-arrow-right">
              <img src={arrow_right} alt="arrow_right" className="footer__left-arrow-right-icon" />
            </span>
            <span className="footer__left--title">Follow Us</span>
            <div className="footer__left-group">
              <span className="footer__left-icon">
                <img src={facebook} alt="" className="footer__left-group--icon" />
              </span>
              <span className="footer__left-icon">
                <img src={twitter} alt="" className="footer__left-group--icon" />
              </span>
              <span className="footer__left-icon">
                <img src={linked} alt="" className="footer__left-group--icon" />
              </span>
              <span className="footer__left-icon">
                <img src={instagram} alt="" className="footer__left-group--icon" />
              </span>
            </div>
          </section>
          <section className="footer__right">
            <ul className="footer__right-row01--list">
              <li className="footer__right-row01--item">
                <a href="#!" className="footer__right--title">
                  Explore
                </a>
              </li>
              <li className="footer__right-row01--item">
                <a href="#!" className="footer__right--link">
                  About Us
                </a>
              </li>
              <li className="footer__right-row01--item">
                <a href="#!" className="footer__right--link">
                  Services
                </a>
              </li>
              <li className="footer__right-row01--item">
                <a href="#!" className="footer__right--link">
                  Our Team
                </a>
              </li>
              <li className="footer__right-row01--item">
                <a href="#!" className="footer__right--link">
                  Adapt Pet
                </a>
              </li>
            </ul>
            <ul className="footer__right-row01--list">
              <li className="footer__right-row01--item">
                <a href="#!" className="footer__right--title">
                  Useful links
                </a>
              </li>
              <li className="footer__right-row01--item">
                <a href="#!" className="footer__right--link">
                  FAQs
                </a>
              </li>
              <li className="footer__right-row01--item">
                <a href="#!" className="footer__right--link">
                  Services
                </a>
              </li>
              <li className="footer__right-row01--item">
                <a href="#!" className="footer__right--link">
                  Shop
                </a>
              </li>
              <li className="footer__right-row01--item">
                <a href="#!" className="footer__right--link">
                  Privacy Policy
                </a>
              </li>
              <li className="footer__right-row01--item">
                <a href="#!" className="footer__right--link">
                  Terms of Use
                </a>
              </li>
              <li className="footer__right-row01--item">
                <a href="#!" className="footer__right--link">
                  Site Map
                </a>
              </li>
            </ul>
            <ul className="footer__right-row02--list">
              <li className="footer__right-row02--item">
                <a href="#!" className="footer__right--title">
                  Contact Info
                </a>
              </li>
              <li className="footer__right-row02--item">
                <a href="#!" className="footer__right--link-left">
                  abc@gmail.com 0 (800)-000-00-00 New York, NY, Rocawy 7
                </a>
              </li>
            </ul>

            <ul className="footer__right-row02--list">
              <li className="footer__right-row02--item">
                <a href="#!" className="footer__right--title">
                  Opening Time
                </a>
              </li>
              <li className="footer__right-row02--item">
                <a href="#!" className="footer__right--link">
                  Mon – Fri : 08.00 am – 20.00 pm Saturday : 09.00 am – 20.00 pm Sunday: We are Closed
                </a>
              </li>
            </ul>
          </section>
        </section>
        <p className="footer_dev">Copyright & Design By Uihut</p>
      </Container>
    </footer>
  );
};

export default Footer;
