import React from "react";
import { Link } from "react-router-dom";
import AmparaI from "../../../images/destinations/details/ampara.jpg";

function Anuradhapura() {
  return (
    <div className="container-md">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Ampara</b>
          </h1>
          <Link to="/destinations">
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
            <h3>
              This was a hunter’s resting place during British colonial days
              (Late 1890s and early 1900). During the development of the Galoya
              scheme from 1949, this was transformed into a town.
              {/* <br/><br/>
              <b>Top attractions in Ampara : </b> */}
            </h3>

            <h3 className="card-title">
              <b>Buddhangala Monastery</b>
              <h4>
                Hidden among a thick jungle full of wild elephants and leopards
                is the Buddhangala monastery, a Buddhist meditation center,
                which is nearby 2300 years old. Established in the secondary
                century BC by a provincial princess named, Chitra.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Jayanthi Wewa (lake) </b>
              <h4>
                The reservoir is a source of water to the elephant herds who
                roam the bordering gal oya national wildlife park. And the
                flocks of bird like little cormorant, Malayan night heron,
                lesser whistling – duck and spot billed pelican, who gather at
                the reservoir in search of food and nesting ground.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Wadinagala </b>
              <h4>
                Stands 2400 feet tall challenging the brave and the reckless. It
                is famed to be a mountain, one considered as an alternative to
                bear the foot marks of the Lord Buddha and its heritage in
                ancient Buddhism is visible in many ruins scattered around the
                mountain. Beautiful guard stone s, rocks pillars and moonstones
                lie amidst the towering forest of ebony and stain wood, which is
                been plundered by treasure hunters and illegal loggers.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Galoya National Park</b>
              <h4>
                Established in 1954 and serves as the main catchment area for
                Senanayake Samudra, the largest reservoir in Sri Lanka.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Crocodile Rock </b>
              <h4>
                Lies at the river mouth where the Heda Oya falls to sea. Some
                drip ledge caves, rock cut steps and ruins of ancient stupa can
                be found on this rock.
              </h4>
            </h3>
            <h3 className="card-title">
              <b>Lahugala Magul Maha Viharaya </b>
              <h4>
                Ruins of this temple are one of the major tourist attractions of
                the eastern province. And this temple is an archeologically
                protected monument of the country.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Lahugala Kitulana National Park </b>
              <h4>
                One of the smallest national parks in Sri Lanka and it is an
                important habitat for Sri Lankan elephants and endemic birds.
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

export default Anuradhapura;
