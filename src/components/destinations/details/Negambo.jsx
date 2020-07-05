import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/destinations/details/ampara.jpg";

function Negambo() {
  return (
    <div className="container-md" id="mtn">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Negambo</b>
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
              Negambo is a modest beach is a major tourist destination in Sri Lanka. This city is an ideal and liberal place with luxury life style, for those who want quick access to and from the country’s international airport.
              Negambo is also home to the country second largest fish market. The “Lellema” at the north end of the town’s lagoon. There are daily auction, which give tourists a chance to meet the area’s fisherman and even organize fishing trips into the lagoon and the ocean beyond.
              {/* <br/><br/>
              <b>Top attractions in Ampara : </b> */}
            </h3>

            <h3 className="card-title">
              <b>Muthurajawela marshland</b>
              <h4>
                Which is part of a 6,000 hectare (14,826 acre). The protected mangroves of the Nagambo lagoon is home to over 190 species of wild life. Also popular among visitors with a few-well-preserved coral reef and 50 years old shipwreck that serves as an artificial reef for many varieties of fishes.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Negambo Lagoon</b>
              <h4>
                Negambo Lagoon is a largest estuarine lagoon in Gampaha District, south-west Sri Lanka. The lagoon consist an area of 3164 hectares. The lagoon is fed by a number of small rivers and canals. It is surrounded by a densely populated region containing rice paddies, coconut plantations and grassland. The land is used for fishing and agriculture. Also here is a green called the esplanade, where cricket matches are a big attraction. A structure that harks back to Sri Lanka’s Colonial Days when the nation was once under the rule of the Portuguese and then the Dutch.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Negambo - Multi Religious City</b>
              <h4>
                Since the beginning of European Colonization, the township of Negambo has a majority of Roman Catholics along with Buddhist, Hindus and Muslims. Negambo has been given the name little Rome due to the highly on rate Portuguese-era Roman Catholic Churches such as St. Mary’s Church found within the township. This holy building is lavish and grand in nature, standing tall amidst other structure in the town.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>The Katuwapitiya Church</b>
              <h4>
                The Katuwapitiya Church, the sea street church and the Grand street church are the three biggest parishes in Negambo.  And there are over twenty Roman Catholic Churches in the city.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Angurukaramulla temple</b>
              <h4>
                Angurukaramulla temple with its 6 meter long reclining Buddha is also an important place seeing. Abhayasekara Ramaya temple, Sri Sudharshanaramaya, Dutugamunu Viharaya and Asapuwa are some other famous Buddhist temples in the city.
              </h4>
            </h3>
            <h3 className="card-title">
              <b>Hindu temples in Negambo</b>
              <h4>
                Here are so many Hindu temples in Negambo such as Kali temple, Ganapati temple, Murugan temple, Muththumari Amman temple, Karumari Amman temple are some of them.
              </h4>
            </h3>

            <h3 className="card-title">
              {/* <b>No topic  </b> */}
              <h4>
                There are so many Hindu temples in Negambo such as Kali temple, Ganapati temple, Murugan temple, Muththumari Amman temple, Karumari Amman temple are some of them.
              </h4>
            </h3>

            <h3 className="card-title">
              {/* <b>No topic 2 </b> */}
              <h4>
                Seven Jumma Mosques in Negambo and the Negambo Grand Jumma mosque is one of the biggest in Sri Lanka.
              </h4>
            </h3>

            <h3 className="card-title">
              {/* <b>No topic 3 </b> */}
              <h4>
                There are also Methodist, Baptist and other Anglican Churches in Negambo.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Negambo Canals</b>
              <h4>
                Canals extend from Negambo all the way to south to Colombo and north to Puttlam, a total distance of over 120km. You can ride bicycles along the canal side paths for some distance enjoying the views and small village along the way.
                Negambo is very close to the airport and is convenient place to either begin or end your trips to Sri Lanka. You can relax on beautiful beaches. View incredible sunsets and enjoy western and Sri Lankan Food. Sea Food is very popular because fish are caught fresh daily by Negambo fisherman. Visit a fishing village and the bustling early morning fish auction as the catamarans come ashore with their bounty of fresh seafood. Negambo by night also has comparatively lively atmosphere with a scattering of independent bars and restaurant down the coastal strip. Experience the western coast of Sri Lanka, Which truly is paradise.
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

export default Negambo;