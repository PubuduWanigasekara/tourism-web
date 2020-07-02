import React from "react";
import { Link } from "react-router-dom";
import Images from "../../../images/destinations/details/ampara.jpg";

function TheSacredMountain() {
  return (
    <div className="container-md">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>The sacred mountain – Adams’ Peak</b>
          </h1>
          <Link to="/destinations">
            <button className="btn btn-secondary">Back</button>
          </Link>
        </h5>
        <img
          className="card-img-top"
          src={Images}
          alt="Card image cap"
          style={{}}
        />
        <div className="card-body">
          <p className="card-text">
            <h3>
              Located about 122km due to east from Colombo is the sacred mountain Sri Pada. It is situated in the southern reaches of the central highlands, and adjacent to extensive wildlife reserves. With no other comparable mountains nearby Sripadaya (Adams’ Peak) rises prominently above the surrounding area, soaring to a height of 2,243 meters above sea level. At the top of the mountain is a slab of rock with a large indentation believed to be the Buddha’s foot print, which he left during his legendary third visit to the Island. Centuries later, Christians and Muslims developed the belief that this indentation was the footprint of Adam thus, Sripada is also commonly known as Adam’s peak. The Hindus, according to their own belief revere the spot as the footprint of Shiva. The climbing season is between Decembers to May.
              {/* <br/><br/>
              <b>Top attractions in Ampara : </b> */}
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

export default TheSacredMountain;