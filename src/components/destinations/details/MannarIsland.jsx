import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/destinations/details/ampara.jpg";

function MannarIsland() {
  return (
    <div className="container-md">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Mannar Island</b>
          </h1>
          <Link to="/destinations">
            <button className="btn btn-secondary">Back</button>
          </Link>
        </h5>
        <img
          className="card-img-top"
          src={image}
          alt="Card image cap"
          style={{}}
        />
        <div className="card-body">
          <p className="card-text">
            <h3>
              Mannar is a dry island with a desert like climate. However it is still a very important place to visit and it is also a sacred place to Catholics as most Catholics make a pilgrimage to Mannar.
              {/* <br/><br/>
              <b>Top attractions in Ampara : </b> */}
            </h3>

            <h3 className="card-title">
              <b>Venkalai bridge</b>
              <h4>
                The longest bridge in Mannar. There is a bird sanctuary on either side of the bridge. This place is bliss for all bird watchers as more than 200 rare species of birds and species of pigs and crocodiles also have made Venkalai sanctuary their home. There are also mangroves and sandy stretches along with mini dunes around the area.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Thiruketheeswaram temple</b>
              <h4>
                One of the famous Hindu Temples in Sri Lanka.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Mannar fort </b>
              <h4>
                Built by Portuguese in 1560. The fort fell to the Dutchin 1658 and they rebuild the fort in 1696.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Urumale beach</b>
              <h4>
                The most beautiful beach in Mannar is the Urumale beach.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Madu church</b>
              <h4>
                One of the holiest churches in Asia and one that is visited by many devotees.
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

export default MannarIsland;