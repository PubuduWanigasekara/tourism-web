import React from "react";
import './Header.css';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow fixed-top acccc">
        <a className="navbar-brand" href="/home">
          <b>Chauffeur Prive Sri Lanka</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="navbar-collapse collapse w-100 order-3 dual-collapse2 opheader"id="navbarNavAltMarkup"
        >
          <div className="navbar-nav navbar-right">
            <a className="nav-item nav-link active" href="#">
              <b>Home </b>
              <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link active" href="#">
              <b>Destinations </b>
              <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link active" href="#">
              <b>Tours </b>
              <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link active" href="#">
              <b>Activities </b>
              <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link active" href="#">
              <b>About </b>
              <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link active" href="#">
              <b>Contact </b>
              <span className="sr-only">(current)</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
