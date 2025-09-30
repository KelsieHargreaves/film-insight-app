import React from "react";
import "./Nav.css";
import logo from "../../assets/logo thumbnail (2).png";
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
            <a  className="movies__btn" href="/Movies">Movies</a>
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
