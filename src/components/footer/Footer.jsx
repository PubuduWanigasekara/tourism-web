import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer
        className="mainfooter"
        role="contentinfo"
        style={{ marginTop: "-6px" }}
      >
        <div className="footer-middle">
          <div style={{ marginTop: " -25px" }}>
            <div className="row">
              <div className="col-5  col-sm-5" style={{ marginLeft: "40px" }}>
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
                <br />
                {/* <br /> */}
                <h4>Follow Us</h4>
                <ul className="social-network social-circle">
                  <li>
                    <a
                      href="www.facebook.com/openmic24x7"
                      className="icoFacebook"
                      title="Facebook"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoInstagram" title="Instagram">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-12 copy">
                <p className="text-center">
                  <h5>
                    <b>Powered by OPENMIC Digital Media</b>
                  </h5>
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
