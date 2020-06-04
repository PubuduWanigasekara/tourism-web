import React from "react";

function Header() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <a className="navbar-brand" href="/home"><b>Chauffeur Prive Sri Lanka</b></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#"><b>Home </b><span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link active" href="#"><b>Destinations </b><span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link active" href="#"><b>Tours </b><span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link active" href="#"><b>Activities </b><span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link active" href="#"><b>About </b><span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link active" href="#"><b>Contact </b><span className="sr-only">(current)</span></a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;