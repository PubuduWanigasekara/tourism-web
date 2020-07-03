import React from "react";
import { Link } from "react-router-dom";
import AmparaI from "../../../../images/tours/tours categories/details/ampara.jpg";

function BeachBreakTour01() {
  const containerStyle = {
    marginLeft: "0px",
    // marginRight: "0px",
  };

  return (
    <div className="container-md">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>South Coast And Wild Life With Gem City- 3 Days 2nights</b>
          </h1>
          <Link to="/tours-categories-exclusive-tour">
            <button className="btn btn-secondary">Back</button>
          </Link>
        </h5>
        <img
          className="card-img-top"
          src={AmparaI}
          alt="Card image cap"
          style={{}}
        />
        <div className="card-body">
          <p className="card-text">
            <h3 className="card-title">
              <b>Day 01 - Galle fortress </b>
              <h4>
                Upon your arrival, our tour guide will pick up you at
                Bandaranayaka International airport and transfer you to Galle-
                the Dutch fortified city. Here you can see 17th century fortress
                bursting with life, quaint shops where you can purchase
                exquisite handmade lace items. Also you will be visiting
                Hikkaduwa and around include: National park. Overnight stay at
                Galle.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Day 02 - Wild life Yala National park </b>
              <h4>
                Staring the journey in the Morning leaving to Thissamaharama,
                the gateway to Yala National park. Afternoon will be spent at
                the park and that day Night stay at Yala or Tissamaharamaya.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Day 03 - Gem city;Rathnapura </b>
              <h4>
                Morning leaving to Rathanpura from your stay and this will be
                the last day of the tour. And after reaching there you can visit
                the gem mines and gem museum. Evening returning to Negambo your
                hotel or Katunayake International Airport to depature. And the
                tour ends here...
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Summary</b>
              <h4>
                This trip is from Galle fort to Yala and gem city which covers
                the best of this area. Discovering the beloved Galle city,
                safari at Yala National park are the best parts of this tour.
                And if you are looking for the real valuable gems I'm sure this
                trip to gem city will give you a lot of understanding of how
                that are found and the value of those gems and this trip is
                surely a perfect choice.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Highlights</b>
              <h4>
                <ui>
                  <li>
                    Strolling at the sculptured streets of arty and whimsical
                    city of Galle.
                  </li>
                  <li>
                    Watching the native leopards and listening out for big eared
                    elephants in Yala National park.
                  </li>
                  <li>Discovering the outskirts of gem city.</li>
                </ui>{" "}
              </h4>
            </h3>
          </p>
          {/* <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default BeachBreakTour01;
