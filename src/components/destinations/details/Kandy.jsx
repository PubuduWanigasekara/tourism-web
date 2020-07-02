import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/destinations/details/ampara.jpg";

function Kandy() {
  return (
    <div className="container-md">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Kandy</b>
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
              The city of Kandy is located 116 kilometers from Colombo. It is 465 meters above sea level and nestled in the mountainous central region of the island. The city resisted many invasions by Portuguese and Dutch, who occupied most of the island from the 16th century onwards.
              Kandy remained the last independent capital of Sri Lanka. However, it is still considered the religious and cultural central of the country, with numerous temples and monasteries, Buddhist colleges and beautiful parks and gardens.
              {/* <br/><br/>
              <b>Top attractions in Ampara : </b> */}
            </h3>

            <h3 className="card-title">
              <b>The Lankathilake temple</b>
              <h4>
                Known for its traditional Sinhalese architecture and was built in 1344.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Embakke Dewalaya</b>
              <h4>
                A rocky and uneven hilltop, this temple was constructed in the 14th century, is famous for its wooden structure and beautifully intricate wood carvings.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Gadaladeniya temple </b>
              <h4>
                Temple which was built in South Indian style.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>The Temple Of Tooth </b>
              <h4>
                The most famous attraction in Kandy is the temple of the tooth, or “Sri Dalada Maligawa”. The tooth relic of Lord Buddha is enshrined here. It is surrounded by a moat and low white walls with simple carvings. Its distinctive octagonal tower, or “pattirippuwa”, was built in 1803 and is a houses a collection of palm leaf manuscripts.
                The tooth is kept in a two story shrine which is covered with a golden canopy and fronted by a museum where many Buddha images are kept. Most of them are gifts from different countries and different paintings depicting the various events in the history of the tooth are also displayed here.
                A replica of the tooth, together with its on rate and beautiful caskets, is displayed once a year during the “Esala perahara”. This is the island’s largest annual celebration, being celebrated for ten days with colorful and elaborate parades of dancers, drummers and elephants, around a million peoples attend this festival each year. Due to security concerns, the actual tooth is never brought out for the festival.
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

export default Kandy;