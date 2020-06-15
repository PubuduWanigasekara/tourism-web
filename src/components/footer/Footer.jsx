import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="opfooter">
      <div class="card text-center">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            <b>Chauffeur Prive Sri Lanka</b>
            Chauffeurprive Srilanka is a specialist in tour oraganization
            focused on offering our clients luxury holiday packages and the
            opportunity to enjoy Srilanka's beauty making your experience with
            us a momentous occasion. +94 75 9485 435
            srilankachauffeurprive@gmail.com
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  );
}

export default Footer;
