import React from "react";
import "./Nav.css";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Nav = ({ extraContent }) => {
  return (
    <div className="navigation">
      <div className="nav__container">
        <figure>
          <img className="logo" src={logo} alt="" />
        </figure>
        <ul className="nav__lists">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Movies">Movies</a>
          </li>
          <li>
            <a href="" className="contact__btn">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="movie__content">
        {extraContent && 
          <div className="extra">{extraContent}</div>
        }
      </div>
    </div>
  );
};

export default Nav;
