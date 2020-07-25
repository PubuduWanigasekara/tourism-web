import React from "react";
import "./Tours.css";
import { Link } from "react-router-dom";

import BeachBreak from "../../images/tours/Beach break .jpg";
import RoyaleSeylon from "../../images/tours/Royale seylon.jpg";
import ShortTrips from "../../images/tours/Short trips.jpg";
import DiscoveryTour from "../../images/tours/Discovery tour.jpg";
import ExclusiveTour from "../../images/tours/Exclusive tour.jpg";

function Tours() {
  return (
    <>
      <div className="container-sm " id="mtn">
        <div>
          {/* Header */}
          <div className="headerop">
            <h3>
              <b>Tours</b>
            </h3>
            <p>Select Your Choice!</p>
          </div>
          {/* Photo Grid */}
          <div className="container-xl" style={{ marginTop: "70px" }}>
            {" "}
            <div className="rowop" style={{ marginBottom: "10px" }}>
              <div className="columnop ">
                {/* 1 */}
                <Link to="/tours-categories-beachbreak">
                  <div className="containerop">
                    <img
                      src={BeachBreak}
                      style={{ width: "100%" }}
                      className="image"
                    />
                    <div className="top-left">
                      <div className="btn btn-lg btn-dark">
                        <h6>
                          <b>Beach Break</b>
                        </h6>
                      </div>
                    </div>
                    {/* <div className="bottom-right">
                    
                  </div> */}
                  </div>
                </Link>

                {/* 2 */}
                <Link to="/tours-categories-exclusive-tour">
                  <div className="containerop">
                    <img
                      src={ExclusiveTour}
                      style={{ width: "100%" }}
                      className="image"
                    />
                    <div className="top-left">
                      <div className="btn btn-lg btn-dark">
                        <h6>
                          <b>Exclusive Tour</b>
                        </h6>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="columnop">
                {/* 1 */}
                <Link to="/tours-categories-short-trips">
                  <div className="containerop">
                    <img
                      src={ShortTrips}
                      style={{ width: "100%" }}
                      className="image"
                    />
                    <div className="top-left">
                      <div className="btn btn-lg btn-dark">
                        <h6>
                          <b>Short Trips</b>
                        </h6>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* 2 */}
                <Link to="/tours-categories-discovery-tour">
                  <div className="containerop">
                    <img
                      src={DiscoveryTour}
                      style={{ width: "100%" }}
                      className="image"
                    />
                    <div className="top-left">
                      <div className="btn btn-lg btn-dark">
                        <h6>
                          <b>Discovery Tour </b>
                        </h6>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* 3 */}
                <Link to="/tours-categories-royale-seylon">
                  <div className="containerop">
                    <img
                      src={RoyaleSeylon}
                      style={{ width: "100%" }}
                      className="image"
                    />
                    <div className="top-left">
                      <div className="btn btn-lg btn-dark">
                        <h6>
                          <b>Royale Seylon </b>
                        </h6>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tours;
