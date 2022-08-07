import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import logo from "../logo.png";
import "./Header.css";
import FavouritesContext from "../store/FavouritesContext";

export default function Header() {
  const favouritesCtx = useContext(FavouritesContext);

  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
    if (!isActive) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  };

  return (
    <div className="header-block">
      <div className="container">
        <header className="header gridBlock">
          <div className="header-logo">
            <Link to="/">
              <img src={logo} alt={logo.alt} />
              <p>blogs</p>
            </Link>
          </div>
          <div className="middle-navigation">
            <ul className="gridBlock dekstop-navigation">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favourite-blogs">
                  My Favourites
                  <span className="favrourite-number">
                    {favouritesCtx.totalFavourites}
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/about-me">About Me</Link>
              </li>
            </ul>

            <div className="mobile-navigation">
              <div
                className={"hamburger " + (isActive ? "isactive" : "")}
                onClick={toggleClass}
              >
                <div className="line" />
                <div className="line" />
                <div className="line" />
              </div>
              <menu className={"navbar " + (isActive ? "active" : "")}>
                <div
                  className={"hamburger " + (isActive ? "isactive" : "")}
                  onClick={toggleClass}
                >
                  <div className="line" /> 
                  <div className="line" />
                  <div className="line" />
                </div>
                <ul>
                  <li onClick={toggleClass}>
                    <Link to="/">Home</Link>
                  </li>
                  <li onClick={toggleClass}>
                    <Link to="/favourite-blogs">
                      My Favourites
                      <span className="favrourite-number">
                        {favouritesCtx.totalFavourites}
                      </span>
                    </Link>
                  </li>
                  <li onClick={toggleClass}>
                    <Link to="/about-me">About Me</Link>
                  </li>
                </ul>
                <div className="hamburger-add-block-buttpn">
              <li onClick={toggleClass}>
                    <Link to="/new-blog">Add New Blog</Link>
                  </li>
            </div>
              </menu>
              
            </div>
          </div>
          <div className="right-navigation">
            <ul>
              <li>
                <Link to="/new-blog">Add New Blog</Link>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
}
