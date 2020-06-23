import React from "react";
import "./Destinations.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Capture from "../../images/Capture.jpg";

import Colombo from "../../images/destinations/Colombo.jpg";
import Kandy from "../../images/destinations/Kandy.jpg";

import haputhale from "../../images/newphoto/haputhale.jpg";
import Anuradhapura from "../../images/newphoto/Anuradhapura-view.jpg";
import bandarawela_gallery_7 from "../../images/newphoto/bandarawela_gallery_7.jpg";
import polonaruwa from "../../images/newphoto/polonaruwa.jpeg";
import thisamaharamaya from "../../images/newphoto/thisamaharamaya.jpg";

function Destinations() {
  return (
    <div>
      <Header />
      <div className="container-xl">
        <div>
          {/* Header */}
          <div className="header">
            <h1>
              <b>Destinations</b>
            </h1>
            <p>Resize the browser window to see the responsive effect.</p>
          </div>
          {/* Photo Grid */}
          <div className="row">
            <div className="column">
              <div className="containerop">
                <img
                  src={Colombo}
                  style={{ width: "100%" }}
                  className="image"
                />

                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Colombo</b>
                    </h6>
                  </button>
                </div>
              </div>

              <div className="containerop">
                <img
                  src={Kandy}
                  style={{ width: "100%" }}
                  className="image"
                />

                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Kandy</b>
                    </h6>
                  </button>
                </div>
              </div>

              <img src={haputhale} style={{ width: "100%" }} />
              <img src={Anuradhapura} style={{ width: "100%" }} />
              <img src={bandarawela_gallery_7} style={{ width: "100%" }} />
              <img src={polonaruwa} style={{ width: "100%" }} />
              <img src={thisamaharamaya} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
            </div>
            <div className="column">
              <img src={bandarawela_gallery_7} style={{ width: "100%" }} />
              <img src={thisamaharamaya} style={{ width: "100%" }} />
              <img src={haputhale} style={{ width: "100%" }} />
              <img src={Capture} style={{ width: "100%" }} />
              <img src={Anuradhapura} style={{ width: "100%" }} />
              <img src={thisamaharamaya} style={{ width: "100%" }} />
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
