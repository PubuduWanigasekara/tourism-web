import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../images/destinations/details/ampara.jpg";

function Beruwala() {
  return (
    <div className="container-md">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Beruwala</b>
          </h1>
          <Link to="/destinations">
            <button className="btn btn-secondary">Back</button>
          </Link>
        </h5>
        <img
          className="card-img-top"
          src={Image}
          alt="Card image cap"
          style={{}}
        />
        <div className="card-body">
          <p className="card-text">
            <h3>
              Powdery sands, towering palm and heavenly coral reefed bay –
              Beruwala is nothing short of beach holiday bliss. ’ If Sri Lanka
              has one all out beach resort, Beruwala it’s a plum spot for
              serious beach lovers thanks to its dazzling combination of sun,
              sea and sand. The name Beruwala is derived from the Sinhalese word
              for the place where the sail is lowered. It marks the spot for the
              first Muslim settlement on the island, established by Arabian
              traders around 8th century AD.
              {/* <br/><br/>
              <b>Top attractions in Ampara : </b> */}
            </h3>

            <h3 className="card-title">
              <b>Kechimalai Mosque</b>
              <h4>
                Beruwala is home to the oldest mosque in the island, the
                kechimalai mosque is built on the spot where the Muslim traders
                from the Middle East landed. The best time to visit this
                historic structure would be during the annual celebration
                marking the end of the month of Ramadan .it is a joyous occasion
                and visitors to the kechimalai mosque will also enjoy the
                gorgeous vistas of the ocean and the surrounding areas that one
                can get from a top the headland.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Beruwala Light House</b>
              <h4>
                A ten minute boat ride to this incredible island will take you
                to a wonderful tourist attraction which is the Beruwala light
                house. The island alone is a pleasure to the eye with its
                greenery and the view of the Indian Ocean as well as its
                peaceful ambience, the light house is simply a pleasing addition
                to this green island known as Barbarian Island.
              </h4>
            </h3>

            <h3 className="card-title">
              {/* <b>Wadinagala </b> */}
              <h4>
                There are only four international lighthouse in Sri Lanka, one
                being the Beruwala light house. All ships and boats going to the
                Maldives have to pass the Beruwala lighthouse which is among the
                most important place along the voyage.
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

export default Beruwala;
