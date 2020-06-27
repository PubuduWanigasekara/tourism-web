import React from "react";
import "./Destinations.css";

import Ampara from "../../images/destinations/ampara.jpg";
import Anuradhapura from "../../images/destinations/anuradapuraya.jpg";
import Bandarawela from "../../images/destinations/bandarawela.jpg";
import Batticaloa from "../../images/destinations/batticaloa.jpg";
import Bentota from "../../images/destinations/benthota.jpg"
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

function Destinations() {
  const containerStyle = {
    marginLeft:"20px",
    marginRight:"20px"
  };

  return (
    <>
      <div className="container-sm" style={containerStyle}>
        <div>
          {/* Header */}
          <div className="header">
            <h1>
              <b>Destinations</b>
            </h1>
            <p>Click the Destination title button of your choice for More Information.</p>
          </div>
          {/* Photo Grid */}
          <div className="row" style={{marginBottom:"10px"}}>
            <div className="column">
              {/* 1 */}
              <div className="containerop">
                <img src={Ampara} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-primary btn-sm"  href="/destinations/ampara">
                    <h6>
                      <b>Ampara</b>
                    </h6>
                  </button>
                </div>
              </div>

              {/* 2 */}
              <div className="containerop">
                <img src={Anuradhapura} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Anuradhapura</b>
                    </h6>
                  </button>
                </div>
              </div>

              {/* 3 */}
              <div className="containerop">
                <img src={Bandarawela} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Bandarawela</b>
                    </h6>
                  </button>
                </div>
              </div>

              {/* 4 */}
              <div className="containerop">
                <img src={Batticaloa} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Batticaloa</b>
                    </h6>
                  </button>
                </div>
              </div>

              {/* 5 */}
              <div className="containerop">
                <img src={Beruwala} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Beruwala</b>
                    </h6>
                  </button>
                </div>
              </div>

              {/* 6 */}
              <div className="containerop">
                <img src={Bentota} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Bentota</b>
                    </h6>
                  </button>
                </div>
              </div>
            </div>

            <div className="column">
              {/* 1 */}
              <div className="containerop">
                <img src={Colombo} style={{ width: "100%" }} className="image" />
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
                <img src={Galle} style={{ width: "100%" }} className="image" />
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
                <img src={Haputale} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Haputale</b>
                    </h6>
                  </button>
                </div>
              </div>

              {/* 4 */}
              <div className="containerop">
                <img src={Hikkaduwa} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Hikkaduwa</b>
                    </h6>
                  </button>
                </div>
              </div>

              {/* 5 */}
              <div className="containerop">
                <img src={Kandy} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Kandy</b>
                    </h6>
                  </button>
                </div>
              </div>

              {/* 6 */}
              <div className="containerop">
                <img src={Kitulgala} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Kitulgala</b>
                    </h6>
                  </button>
                </div>
              </div>
            </div>

            <div className="column">
              {/* 1 */}
              <div className="containerop">
                <img src={Kurunagala} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Kurunagala</b>
                    </h6>
                  </button>
                </div>
              </div>

              {/* 2 */}
              <div className="containerop">
                <img src={MannarIsland} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Mannar Island</b>
                    </h6>
                  </button>
                </div>
              </div>

              {/* 3 */}
              <div className="containerop">
                <img src={Matale} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Matale</b>
                    </h6>
                  </button>
                </div>
              </div>

              {/* 4 */}
              <div className="containerop">
                <img src={Mihinthale} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Mihinthale</b>
                    </h6>
                  </button>
                </div>
              </div>

              {/* 5 */}
              <div className="containerop">
                <img src={Mirissa} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Mirissa</b>
                    </h6>
                  </button>
                </div>
              </div>

              {/* 6 */}
              <div className="containerop">
                <img src={Monaragala} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Monaragala</b>
                    </h6>
                  </button>
                </div>
              </div>
            </div>

            <div className="column">
              {/* 1 */}
              <div className="containerop">
                <img src={Negambo} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Negambo</b>
                    </h6>
                  </button>
                </div>
              </div>

              {/* 2 */}
              <div className="containerop">
                <img src={NuwaraEliya} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Nuwara Eliya</b>
                    </h6>
                  </button>
                </div>
              </div>

              {/* 3 */}
              <div className="containerop">
                <img src={Polonnaruwa} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Polonnaruwa</b>
                    </h6>
                  </button>
                </div>
              </div>

              {/* 4 */}
              <div className="containerop">
                <img src={Tangalle} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Tangalle</b>
                    </h6>
                  </button>
                </div>
              </div>

              {/* 5 */}
              <div className="containerop">
                <img src={TheSacredMountain} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>The Sacred Mountain</b>
                    </h6>
                  </button>
                </div>
              </div>

              {/* 6 */}
              <div className="containerop">
                <img src={Tissamaharama} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Tissamaharama</b>
                    </h6>
                  </button>
                </div>
              </div>

              {/* 7 */}
              <div className="containerop">
                <img src={Trincomalee} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Trincomalee</b>
                    </h6>
                  </button>
                </div>
              </div>

              {/* 8 */}
              <div className="containerop">
                <img src={VavuniyaAndJaffnalle} style={{ width: "100%" }} className="image" />
                <div class="bottom-right">
                  <button className="btn btn-dark btn-sm">
                    <h6>
                      <b>Vavuniya And Jaffnalle</b>
                    </h6>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Destinations;
