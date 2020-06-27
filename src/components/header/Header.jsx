import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <Link class="navbar-brand" to="/home">
          <b>Chauffeur Prive Sri Lanka</b>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto navbar-right">
            <li class="nav-item active">
              <Link class="nav-link" to="/home">
                <b>Home </b> <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/destinations">
                <b>Destinations </b>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/tours">
                <b>Tours </b>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#">
                <b>Activities </b>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#">
                <b>About </b>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#">
                <b>Contact </b>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
