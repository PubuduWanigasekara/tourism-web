import React from "react";
import "./Destinations.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Capture from "../../images/Capture.jpg";

function Destinations() {
  return (
    <div>
      <Header />
      <div className="container5">
        <div>
          {/* Header */}
          <div className="header">
            <h1>Responsive Image Grid</h1>
            <p>Resize the browser window to see the responsive effect.</p>
          </div>
          {/* Photo Grid */}
          <div className="row">
            <div className="column">
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
            </div>
            <div className="column">
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
            </div>
            <div className="column">
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
            </div>
            <div className="column">
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Destinations;
