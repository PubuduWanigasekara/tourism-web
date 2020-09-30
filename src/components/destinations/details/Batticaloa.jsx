import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../images/destinations/details/ampara.jpg";
import Header from "../../../components/header/Header";

function Batticaloa() {
  return (
    <>
      <Header />
      <div className="container-md">
        <div className="card mb-3">
          <h5 className="card-title" id="mtn">
            <h1>
              <b>Batticaloa</b>
            </h1>
            {/* <Link to="/destinations">
            <button className="btn btn-secondary">Back</button>
          </Link> */}
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
                Batticaloa is located at a distance of 313 km from Colombo, in
                the Batticaloa district of the Eastern Province. It is a pretty
                city on an island, surrounded by a gorgeous lagoon. Batticaloa
                district has three lagoons such as Batticaloa Lagoon,
                Valaichchenai Lagoon, and Vakari (Panichchankerni) Lagoon. Among
                these lagoons, Batticaloa Lagoon is the largest lagoon. There
                are several islands within the Batticaloa Lagoon such as
                Puliayantheevu, Buffaloa Island, bone Island. Many bridges are
                built across the lagoon connecting the landmasses and the
                islands. Batticaloa beaches are sandy and located along 4 km
                shoreline in the city and further extend through the neighboring
                places. Kallady beach, the popular serene beachfront where large
                numbers of people gather in the city. Also Batticaloa such as
                the heavenly beaches of Pasikudah and Kalkudah have rarely been
                molested. Batticaloa has coral rich seas along the east coast.
                Diving and snorkeling is possible in the seas off Batticaloa.
                Late March to end of October is a good season for these
                activities on the eastern coast.
                {/* <br/><br/>
              <b>Top attractions in Ampara : </b> */}
              </h3>

              <h3 className="card-title">
                <b>Pasikuda Beach </b>
                <h4>
                  Known for its long stretch of golden sand shoreline and
                  tranquil turquoise waters that provide a picture postcard like
                  landscape in which to enjoy the glorious coastal sunshine. It
                  is a place for relaxation and renewal and it is an ideal
                  location for those who wish to learn swimming. The waters that
                  surround the beach are relatively shallow and one can safely
                  wade through the sea for quite some distance. This is an ideal
                  place for a family beach picnic and offers a peaceful and
                  laidback seaside setting in which to just sit back, relax and
                  watch the world go lazily by.
                </h4>
              </h3>

              <h3 className="card-title">
                <b>Kalkudah Beach </b>
                <h4>
                  Located about 35 kilometers north of Batticaloa, Kalkudah bay
                  beach, a 2 km long wide stretch of beach facing east, boats of
                  clear, calm reef protected sea ideal for bathing.
                </h4>
              </h3>

              <h3 className="card-title">
                <b>Kallady Bridge </b>
                <h4>
                  In the long history of excellence established in 1923, is a
                  symbol of British. “Lady Manning Bridge” popularly known as
                  “Kallady Bridge” was the longest bridge in the island of Sri
                  Lanka at one time. This is the gateway connecting Batticaloa
                  town with the southern places of the district. This bridge is
                  also famous for singing fishes that raise a faint but distinct
                  musical sound resembling a plucked guitar during the nights of
                  full moon days of April to September. This music is clearly
                  heard from the lagoon waters in the area along the Kallady
                  Bridge. The mysterious music is attributed to a noise emanated
                  from some form of a marine life found in the lagoon.The best
                  way to listen to the music is to dip one end of an oar into
                  the water and hold the other closer to your ear.
                </h4>
              </h3>

              <h3 className="card-title">
                <b> Batticaloa Lighthouse</b>
                <h4>
                  This Lighthouse is another landmark of Batticaloa town.
                  Batticaloa Lighthouse, situated near the estuary in
                  Palameenmadu, was built in 1913. It is 28 meters high. Thanks
                  to a series of ladders, it is possible to reach the top of the
                  lighthouse to get a breathtaking view of the gorgeous
                  surroundings like Estuary, Beach, Eco-park, Lagoon and
                  Islands, and get yourself lost in wonderful nuances of Blue
                  and Green.
                </h4>
              </h3>

              <h3 className="card-title">
                <b> Batticaloa (Dutch) Fort </b>
                <h4>
                  This is a fine strategic base of very long history in
                  Batticaloa. This fortress was first built by Portuguese in
                  1628. Then it was captured by the Dutch in 1638. Later, in
                  1745 the British captured and used it. Batticaloa Fort
                  prevailed as a solid and formidable fortress and very safe
                  during wartimes. Even today one can see many cannons
                  decorating the site majestically. At present, too, this fort
                  houses several regional administrative departments. On two
                  sides of the Batticaloa Fort the lagoon waters laps its craggy
                  stone walls while on the other two sides a beautifully calm
                  moat runs deep giving a soothing sight to eyes and mind.
                </h4>
              </h3>
            </p>
            {/* <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Batticaloa;
