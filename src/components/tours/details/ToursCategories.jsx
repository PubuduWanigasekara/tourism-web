import React from "react";
import {Link} from "react-router-dom";

import Test from "../../../images/tours/tours categories/test.jpg";


function ToursCategories() {
  return (
    <>
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
          <div className="container-xl" style={{ marginTop: "70px" }}>
            {" "}
            <div className="rowop" style={{ marginBottom: "10px" }}>
              <div className="columnop ">
                {/* 1 */}
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
                          <b>Beach Break</b>
                        </h6>
                      </div>
                    </div>
                    {/* <div className="bottom-right">
                    
                  </div> */}
                  </div>
                </Link>

                {/* 2 */}
                <div className="containerop">
                  <img
                    src={Test}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Exclusive Tour</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </div>

              <div className="columnop">
                {/* 1 */}
                <div className="containerop">
                  <img
                    src={Test}
                    style={{ width: "100%" }}
                    className="image"
                  />
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
                  <img
                    src={Test}
                    style={{ width: "100%" }}
                    className="image"
                  />
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
                  <img
                    src={Test}
                    style={{ width: "100%" }}
                    className="image"
                  />
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

export default ToursCategories;
