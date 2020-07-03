import React from "react";
import { Link } from "react-router-dom";

import Test from "../../../images/tours/tours categories/test.jpg";

function ToursCategoriesDiscoveryTour() {
  return (
    <>
      <div className="container-sm ">
        <div>
          {/* Header */}
          <div className="headerop">
            <h3>
              <b>Discovery Tour </b>
            </h3>
            <p>
              Select Your Choice! {"  "}
              <Link to="/tours">
                <button className="btn btn-sm btn-secondary">Back</button>
              </Link>
            </p>
          </div>
          {/* Photo Grid */}
          <div className="container-xl" style={{ marginTop: "70px" }}>
            {" "}
            <div className="rowop" style={{ marginBottom: "10px" }}>
              <div className="columnop ">
                {/* 1 */}
                <Link to="/tours-categories-shorttrip-01">
                  <div className="containerop">
                    <img
                      src={Test}
                      style={{ width: "100%" }}
                      className="image"
                    />
                    <div className="top-left">
                      <div className="btn btn-lg btn-dark">
                        <h6>
                          <b>Short Trips 01</b>
                        </h6>
                      </div>
                    </div>
                    {/* <div className="bottom-right">
                  </div> */}
                  </div>
                </Link>

                {/* 2 */}
                <Link to="/home">
                  <div className="containerop">
                    <img
                      src={Test}
                      style={{ width: "100%" }}
                      className="image"
                    />
                    <div className="top-left">
                      <div className="btn btn-lg btn-dark">
                        <h6>
                          <b>Short Trips 01</b>
                        </h6>
                      </div>
                    </div>
                    {/* <div className="bottom-right">
                  </div> */}
                  </div>
                </Link>
              </div>

              <div className="columnop">
                {/* 1 */}
                <div className="containerop">
                  <img src={Test} style={{ width: "100%" }} className="image" />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Short Trips</b>
                      </h6>
                    </button>
                  </div>
                </div>

                {/* 2 */}
                <div className="containerop">
                  <img src={Test} style={{ width: "100%" }} className="image" />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Discovery Tour</b>
                      </h6>
                    </button>
                  </div>
                </div>

                {/* 3 */}
                <div className="containerop">
                  <img src={Test} style={{ width: "100%" }} className="image" />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>RoyaleSeylon</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToursCategoriesDiscoveryTour;
