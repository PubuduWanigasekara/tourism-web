import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer className="mainfooter" role="contentinfo">
        <div className="footer-middle">
          <div>
            <div className="row">
              <div className="col-4  col-sm-4" style={{ marginLeft: "10px" }}>
                {/*Column1*/}
                <div className="footer-pad">
                  <h3>Chauffeur Prive Sri Lanka</h3>
                  <b>
                    Chauffeurprive Srilanka is a specialist in tour
                    oraganization focused on offering our clients luxury holiday
                    packages and the opportunity to enjoy Srilanka's beauty
                    making your experience with us a momentous occasion.
                    <br />
                    srilankachauffeurprive@gmail.com | +94 75 9485 435{" "}
                  </b>
                </div>
              </div>
              <div className="col-md-3 col-sm-6"></div>
              <div className="col-md-3">
                <br/>
                <h4>Follow Us</h4>
                <ul className="social-network social-circle">
                  <li>
                    <a href="#" className="icoFacebook" title="Facebook">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoLinkedin" title="Linkedin">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-12 copy">
                <p className="text-center">
                  <b>Powered by OPENMIC Digital Media</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
