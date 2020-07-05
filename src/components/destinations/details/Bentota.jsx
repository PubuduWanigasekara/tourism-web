import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../images/destinations/details/ampara.jpg";

function Bentota() {
  return (
    <div className="container-md" id="mtn">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Bentota</b>
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
              Bentota is well experienced with what tourists want so you can
              arrange almost anything from swimming, diving and fishing to water
              sports like water skiing, wind – surfing, jet skiing and tubing.
              Bentota enriched swimming conditions in the season combined with
              fun water sport and exiting excursions that setup an ideal
              background for the relax holiday in Sri Lanka is an attraction for
              the families . The accommodation option at Bentota ranges from 5
              star luxury to mid-range and budget.
              {/* <br/><br/>
              <b>Top attractions in Ampara : </b> */}
            </h3>

            <h3 className="card-title">
              <b>Bentota Beach</b>
              <h4>
                The beach Bentota is nothing like your usual holiday destination
                and the beach here is a fold of pristine golden sands along the
                mighty Indian Ocean. Bentota’s principal dive is Canoe Rock
                where you will find sandy areas as well as sections with coral
                formations. Divers have the shore, with the former being more
                popular and perhaps more exiting a night dive is a good option
                for the enthusiast who caves adventure. Crucially, the Majority
                of diving operators take supplies of pure oxygen with them to
                counter the risk of decompression.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Picturesque Location </b>
              <h4>
                Bentota is the most popular location for romantic weddings, is
                witnesses hundreds of weddings of locals as well as the
                foreigners. Is also an attraction of honeymoon couples once
                again to Sri Lankans as well as to the foreigners. At the
                northern end of the beach, is the long and narrow estuary called
                “Paradise Island”, at the southern end is the pristine palm
                fringed broad beach.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Turtle Hatchery </b>
              <h4>
                Kosgoda nearby Bentota is famous for its turtle hatchery
                operated by the wild life protection society of Sri Lanka. It
                was established 1981 to protect Sri Lanka’s turtles from
                extinction. The hatchery pays fishermen for eggs that they
                collect at night along the sandy beach; visitors can see huge
                tanks filled with new born turtle hatchlings. <br />
                <br />
                After the baby turtles are being fed they are taken to be
                released when they are 2-4 days old, usually during the safer
                hours of darkness. Although October to April is the main laying
                season and some eggs can be found at Wasgoda throughout the
                year. Marine turtles were roaming the oceans for about 190
                million years. Among the many different varieties of this
                species only eight of ancient reptiles are found living today
                Sri Lankan beaches. The Turtle hatcheries are open from 6.00 am
                to 6.00pm and in the evening if you visit here, you can get a
                chance to release a freshly hatched three day old turtle into
                the ocean.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Brief Garden</b>
              <h4>
                Brief garden is a wonderful stretch of impeccably designed
                landscape, spread over a couple of acres of land, which is,
                located about eight kilometers off Bentota. Brief garden house
                is a mesmerizingly beautiful Japanese style gardens and lawns
                inspired from the colonial days. It has been home to the famous
                architect Bevis Bawa, some of whose works are showcased here,
                along with several other artists from Sri Lanka as well as
                abroad.
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

export default Bentota;
