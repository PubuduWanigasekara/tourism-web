import React from "react";
import { Link } from "react-router-dom";

import Test from "../../../images/tours/tours categories/test.jpg";

function ToursCategoriesExclusiveTour() {
  return (
    <>
      <div className="container-sm ">
        <div>
          {/* Header */}
          <div className="headerop">
            <h3>
              <b>Exclusive Tour</b>
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
                <Link to="/tours-categories-exclusivetour-01">
                  <div className="containerop">
                    <img
                      src={Test}
                      style={{ width: "100%" }}
                      className="image"
                    />
                    <div className="top-left">
                      <div className="btn btn-lg btn-dark">
                        <h6>
                          <b>Exclusive Tour 01</b>
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
                <Link to="/tours-categories-exclusivetour-02">
                  <div className="containerop">
                    <img
                      src={Test}
                      style={{ width: "100%" }}
                      className="image"
                    />
                    <div className="top-left">
                      <div className="btn btn-lg btn-dark">
                        <h6>
                          <b>Exclusive Tour 02</b>
                        </h6>
                      </div>
                    </div>
                    {/* <div className="bottom-right">
                  </div> */}
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

export default ToursCategoriesExclusiveTour;
