import React from "react";

function Header() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/home"><b>Chauffeurprive Sri Lanka</b></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link active" href="#">Destinations <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link active" href="#">Tours <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link active" href="#">Activities <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link active" href="#">Contact <span className="sr-only">(current)</span></a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;