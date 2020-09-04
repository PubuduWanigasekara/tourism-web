import React from "react";
import "./Destinations.css";
import { Link } from "react-router-dom";

import Header from "../header/Header";
import Ampara from "../../images/destinations/ampara.jpg";
import Anuradhapura from "../../images/destinations/anuradapuraya.jpg";
import Bandarawela from "../../images/destinations/bandarawela.jpg";
import Batticaloa from "../../images/destinations/batticaloa.jpg";
import Bentota from "../../images/destinations/benthota.jpg";
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
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-50px",
  };

  return (
    <>
    <Header/>
      <div style={{paddingTop:"30px"}}>
        <div>
          {/* Header */}
          <div className="header" >
            <h1>
              <b>Destinations</b>
            </h1>
            <p>Click the destination for more information.</p>
          </div>
          {/* Photo Grid */}
          <div className="row" style={{ marginBottom: "10px" }}>
            <div className="column">
              {/* 1 */}
              <Link to="destinations-ampara">
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
              </Link>

              {/* 2 */}
              <Link to="destinations-anuradhapura">
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
              </Link>

              {/* 3 */}
              <Link to="destinations-bandarawela">
                <div className="containerop">
                  <img
                    src={Bandarawela}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Bandarawela</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </Link>

              {/* 4 */}
              <Link to="destinations-batticaloa">
                <div className="containerop">
                  <img
                    src={Batticaloa}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Batticaloa</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </Link>

              {/* 5 */}
              <Link to="destinations-beruwala">
                <div className="containerop">
                  <img
                    src={Beruwala}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Beruwala</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </Link>

              {/* 6 */}
              <Link to="destinations-bentota">
                <div className="containerop">
                  <img
                    src={Bentota}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Bentota</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </Link>
            </div>

            <div className="column">
              {/* 1 */}
              <Link to="destinations-colombo">
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
              </Link>

              {/* 2 */}
              <Link to="destinations-galle">
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
              </Link>

              {/* 3 */}
              <Link to="destinations-haputale">
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
              </Link>

              {/* 4 */}
              <Link to="destinations-hikkaduwa">
                <div className="containerop">
                  <img
                    src={Hikkaduwa}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Hikkaduwa</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </Link>

              {/* 5 */}
              <Link to="destinations-kandy">
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
              </Link>

              {/* 6 */}
              <Link to="destinations-kitulgala">
                <div className="containerop">
                  <img
                    src={Kitulgala}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Kitulgala</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </Link>
            </div>

            <div className="column">
              {/* 1 */}
              <Link to="destinations-kurunagala">
                <div className="containerop">
                  <img
                    src={Kurunagala}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Kurunagala</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </Link>

              {/* 2 */}
              <Link to="destinations-mannarisland">
                <div className="containerop">
                  <img
                    src={MannarIsland}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Mannar Island</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </Link>

              {/* 3 */}
              <Link to="destinations-matale">
                <div className="containerop">
                  <img
                    src={Matale}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Matale</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </Link>

              {/* 4 */}
              <Link to="destinations-mihinthale">
                <div className="containerop">
                  <img
                    src={Mihinthale}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Mihinthale</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </Link>

              {/* 5 */}
              <Link to="destinations-mirissa">
                <div className="containerop">
                  <img
                    src={Mirissa}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Mirissa</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </Link>

              {/* 6 */}
              <Link to="destinations-monaragala">
                <div className="containerop">
                  <img
                    src={Monaragala}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Monaragala</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </Link>
            </div>

            <div className="column">
              {/* 1 */}
              <Link to="destinations-negambo">
                <div className="containerop">
                  <img
                    src={Negambo}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Negambo</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </Link>

              {/* 2 */}
              <Link to="destinations-nuwaraeliya">
                <div className="containerop">
                  <img
                    src={NuwaraEliya}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Nuwara Eliya</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </Link>

              {/* 3 */}
              <Link to="destinations-polonnaruwa">
                <div className="containerop">
                  <img
                    src={Polonnaruwa}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Polonnaruwa</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </Link>

              {/* 4 */}
              <Link to="destinations-tangalle">
                <div className="containerop">
                  <img
                    src={Tangalle}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Tangalle</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </Link>

              {/* 5 */}
              <Link to="destinations-thesacredmountain">
                <div className="containerop">
                  <img
                    src={TheSacredMountain}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>The Sacred Mountain</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </Link>

              {/* 6 */}
              <Link to="destinations-tissamaharama">
                <div className="containerop">
                  <img
                    src={Tissamaharama}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Tissamaharama</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </Link>

              {/* 7 */}
              <Link to="destinations-trincomalee">
                <div className="containerop">
                  <img
                    src={Trincomalee}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Trincomalee</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </Link>

              {/* 8 */}
              <Link to="destinations-vavuniyaandjaffna">
                <div className="containerop">
                  <img
                    src={VavuniyaAndJaffnalle}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Vavuniya And Jaffna</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Destinations;
