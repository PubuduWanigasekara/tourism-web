import React from "react";
import { Link } from "react-router-dom";
import AmparaI from "../../../../images/tours/tours categories/details/ampara.jpg";

function ShortTripOne() {
  const containerStyle = {
    marginLeft: "0px",
    // marginRight: "0px",
  };

  return (
    <div className="container-md" id="mtn">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Cultural Capital via Ancient Cities - 3 Days 2 nights</b>
          </h1>
          <Link to="/tours-categories-short-trips">
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
              <b>Day 01- Kandy cultural Capital</b>
              <h4>
                Our tour guide will pick up you at Bandaranayeke International Airport and you will be heading to Kandy. On the way you'll visit elephant orphanage, Peradeniya botanical garden en route. And in the evening you can visit the Dalada Maligawa the golden roofed temple of the sacred Tooth Relic of the Buddha. In evening you can do shopping and sightseeing and visit many interesting and historical temples nearby.
                Overnight at Kandy.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Day 02- Sigiriya and Polonnaruwa </b>
              <h4>
                Early morning starting the journey heading to Polonnaruwa and then visiting the Sigiriya rock fortress which was built in the 5th centuary. And in the evening will be the tour to the medieval capital Polonnaruwa and Overnight there.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Day 03- Anuradhapura- Negambo </b>
              <h4>
                Early morning leaving to Anuradhapura (3rd century BC - 8th century AD) tour of ancient city. After lunch leaving to Negambo via Kurunagala for departure or hotel. Tour ends here.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Summary</b>
              <h4>
                This tour is taking you to the best destinations from hill country to ancient cities in Sri Lanka. This tour offers you a chance to thoroughly and deeply understand Sri Lanka with a full picture of its nature, history and culture in various perspectives. When the city of Kandy shows you about the heritage, Polonnaruwa and Anuradhapura shows you a part of Sri Lankan history and unbelievable architectures of this country. Join with us and feel it yourself.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Highlights</b>
              <h4>
                <ui>
                  <li>
                    Experience the cultural activities of traditional dancers and drummers.
                  </li>
                  <li>
                    Discover the architectural and most valuable place, the temple of tooth relic at Kandy.
                  </li>
                  <li>Admire the fine art works embedded into the fascinating quadrangle in Polonnaruwa.</li>
                  <li>Scaling the rock fortress at Sigiriya which is well known for its architecture, Wall paintings and epic views.</li>
                  <li>Discovering the valuable and most ancient ruins at Anuradhapura.</li>
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

export default ShortTripOne;
