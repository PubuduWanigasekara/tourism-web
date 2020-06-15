import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="opfooter">
      <div class="card text-left">
        <div class="card-body">
          <h3 class="card-title">
            <b>Chauffeur Prive Sri Lanka</b>
          </h3>
          <p class="card-text">
            Chauffeurprive Srilanka is a specialist in tour oraganization
            focused on offering our clients luxury holiday <br/>packages and the
            opportunity to enjoy Srilanka's beauty making your experience with
            us a momentous occasion. <br />
            <b>+94 75 9485 435</b> <br />
            <b>srilankachauffeurprive@gmail.com</b>
          </p>
          {/* <a href="#" class="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
        <div class="card-footer text-muted text-center">
          <b>Powered by OPENMIC Digital Media</b>
        </div>
      </div>
    </div>
  );
}

export default Footer;
