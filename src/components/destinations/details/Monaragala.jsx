import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/destinations/details/ampara.jpg";

function Monaragala() {
  return (
    <div className="container-md">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Monaragala </b>
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
              Monaragala is a district in Uva Province of Sri Lanka. It is the 2nd largest of the 25 districts with an area of 5,636 km².
              {/* <br/><br/>
              <b>Top attractions in Ampara : </b> */}
            </h3>

            <h3 className="card-title">
              <b>Buduruwagala</b>
              <h4>
                Buduruwagala is located about 5 km from the Wellawaya on the Thanamalwila road. The name Buduruwagala means “the rock with the statue of Buddha” and this is exactly what it is. Seven figures are carved in this rock with a massive 51 foot Buddha statue in the Abhaya Mudra gesture at the Centre. Although there is no documented information about this site in the ancient scriptures, different historians have dated these statues from the 6th century to late Anuradhapura period. (Between 8 – 10 Century). These carvings are of the Mahayana Buddhist style and belongs to the Pallawa- Sri Lankan art tradition.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Yudaganawa Temple</b>
              <h4>
                Yudaganawa Temple is located close to Buttala on the Wellawaya– Buttala Road. This is one of the largest Stupas in the country and dates back to 2nd century BC. This colossal stupa with a circumference of 317 meters (1038 feet) was initially known to be a Kota Vehera. A large stupa built half way and a smaller stupa built on top of that.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Maligawila</b>
              <h4>
                A monolithic Buddha statue 10.5m high, 3 m of wide crystalline limestone. It is the largest monolithic Buddha statue in Sri Lanka. It is also regarded by some as the finest piece of all Sinhalese sculpture.
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

export default Monaragala;