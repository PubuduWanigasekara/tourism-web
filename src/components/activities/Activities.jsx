import React from "react";
import { Link } from "react-router-dom";
import AmparaI from "../../images/activities/ampara.jpg";

function Activities() {
  const containerStyle = {
    marginLeft: "0px",
    // marginRight: "0px",
  };

  return (
    <div className="container-md" id="mtn">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Activities</b>
          </h1>
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
              <b>Surfing</b>
              <h4>
                Mirissa, Midigama, Hikkaduwa, Lakshawaththa beach, Hiriketiya
                beach, Arugambay, Tangalle, Unakuruwa beach.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Bird Watching</b>
              <h4>
                Sinharaja Rain forest, Kitulgala, Kalametiya, Kumana National
                park, Mannar, Vankalai.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Rafting </b>
              <h4>Kitulgala.</h4>
            </h3>

            <h3 className="card-title">
              <b>Snorkeling and Scuba Diving</b>
              <h4>
                Hikkaduwa, Trincomalee, Mirissa, Unawatuna, Nilavali, Bentota,
                Weligama, Kalpitiya, Galle, Matara, Tangalle, Negambo, Beruwala,
                KAlkudah, Dikwella.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Jet Skiing</b>
              <h4>Negambo, Bentota, Unawatuna, Mirissa.</h4>
            </h3>

            <h3 className="card-title">
              <b>Jeep Safari</b>
              <h4>
                Yala National park, Wilpaththu National park, Minneriya,
                Udawalawe, Hiriwadunna Village safari, Bundala National park,
                Kaudulla National park.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Horse Riding</b>
              <h4>
                Mathugama, Bentota, Thissamaharamaya, Ella, Nuwara Eliya,
                Sigiriya, Dambulla.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Turtle Watching</b>
              <h4>Rekawa, Hikkaduwa, Mirissa, Kosgoda.</h4>
            </h3>

            <h3 className="card-title">
              <b>Whale Watching</b>
              <h4>Mirissa, Kalpitiya, Kosgoda, Trincomalee.</h4>
            </h3>

            <h3 className="card-title">
              <b>Camping</b>
              <h4>
                YalaNational park, Wilpattu National Park, Knuckles, Udawalawe
                National park, Mahiyanganaya, Kitulgala, Minneriya, Sinharaja,
                Nuwara Eliya, Kandy, Trincomalee.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Wind Surfing/ Kite Surfing</b>
              <h4>Kalpitiya, Unawatuna, Pottuvil, Arugambay .</h4>
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

export default Activities;
