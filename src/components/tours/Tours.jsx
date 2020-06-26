import React from "react";
import "./Tours.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import Ampara from "../../images/destinations/ampara.jpg";
import Anuradhapura from "../../images/destinations/anuradapuraya.jpg";
import Bandarawela from "../../images/destinations/bandarawela.jpg";
import Batticaloa from "../../images/destinations/batticaloa.jpg";
// import Bentota from "../../images/destinations/"
import Beruwala from "../../images/destinations/beruwella.jpg";
import Colombo from "../../images/destinations/colombo.jpg";
import Galle from "../../images/destinations/gallefort.jpg";
import Haputale from "../../images/destinations/haputhale.jpg";
import Hikkaduwa from "../../images/destinations/hikaduwa.jpg";
import Kandy from "../../images/destinations/kandy.jpg";
import Kitulgala from "../../images/destinations/kithulgala.jpg";
import Kurunagala from "../../images/destinations/kurunagala.jpg";
import MannarIsland from "../../images/destinations/mannarisland.jpg";
import Matale from "../../images/destinations/mathale.jpg";
import Mihinthale from "../../images/destinations/mihinthale.jpg";
import Mirissa from "../../images/destinations/mirissa.jpg";
import Monaragala from "../../images/destinations/monaragala.jpg";
import Negambo from "../../images/destinations/nigambo.jpg";
import NuwaraEliya from "../../images/destinations/nuwaraeliya.jpg";
import Polonnaruwa from "../../images/destinations/polonaruwa.jpg";
import Tangalle from "../../images/destinations/thangalla3.jpg";
import TheSacredMountain from "../../images/destinations/shri padaya.jpg";
import Tissamaharama from "../../images/destinations/Tissamaharama_Stupa.jpg";
import Trincomalee from "../../images/destinations/thrinkomale.jpg";
import VavuniyaAndJaffnalle from "../../images/destinations/vavniya.jpg";

function Tours() {
  return (
    <div>
      <Header />
      <div className="container-sm ">
        <div>
          {/* Header */}
          <div className="headerop">
            <h3>
              <b>Tours</b>
            </h3>
            <p>Select Your Your!</p>
          </div>
          {/* Photo Grid */}
          <div className="flex1-container1" style={{ margin: "70px" }}>
            {" "}
            <div className="rowop ">
              <div className="columnop ">
                {/* 1 */}
                <div className="containerop">
                  <img
                    src={Ampara}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Ampara</b>
                      </h6>
                    </button>
                  </div>
                </div>

                {/* 2 */}
                <div className="containerop">
                  <img
                    src={Anuradhapura}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Anuradhapura</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </div>

              <div className="columnop">
                {/* 1 */}
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

                {/* 2 */}
                <div className="containerop">
                  <img
                    src={Galle}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Galle</b>
                      </h6>
                    </button>
                  </div>
                </div>

                {/* 3 */}
                <div className="containerop">
                  <img
                    src={Haputale}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Haputale</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tours;
