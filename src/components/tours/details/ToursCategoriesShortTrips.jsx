import React from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Test from "../../../images/tours/tours categories/test.jpg";

function ToursCategoriesShortTrips() {
  return (
    <>
    <Header/>
      <div className="container-sm " id="mtn">
        <div>
          {/* Header */}
          <div className="headerop">
            <h3>
              <b>Short Trips</b>
            </h3>
            <p>
              Select Your Choice! {"  "}
              {/* <Link to="/tours">
                <button className="btn btn-sm btn-secondary">Back</button>
              </Link> */}
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
                <Link to="/tours-categories-shorttrip-02">
                  <div className="containerop">
                    <img
                      src={Test}
                      style={{ width: "100%" }}
                      className="image"
                    />
                    <div className="top-left">
                      <div className="btn btn-lg btn-dark">
                        <h6>
                          <b>Short Trips 02</b>
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
                <Link to="/tours-categories-shorttrip-03">
                  <div className="containerop">
                    <img
                      src={Test}
                      style={{ width: "100%" }}
                      className="image"
                    />
                    <div className="top-left">
                      <div className="btn btn-lg btn-dark">
                        <h6>
                          <b>Short Trips 03</b>
                        </h6>
                      </div>
                    </div>
                    {/* <div className="bottom-right">
                  </div> */}
                  </div>
                </Link>

                {/* 2 */}
                <Link to="/tours-categories-shorttrip-04">
                  <div className="containerop">
                    <img
                      src={Test}
                      style={{ width: "100%" }}
                      className="image"
                    />
                    <div className="top-left">
                      <div className="btn btn-lg btn-dark">
                        <h6>
                          <b>Short Trips 04</b>
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

export default ToursCategoriesShortTrips;
