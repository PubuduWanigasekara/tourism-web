import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="/home">
          <b>Chauffeur Prive Sri Lanka</b>
        </a>
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
              <a class="nav-link" href="/home">
                <b>Home </b> <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <b>Destinations </b>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <b>Tours </b>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <b>Activities </b>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <b>About </b>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <b>Contact </b>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
