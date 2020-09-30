import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../images/destinations/details/anuradapuraya.jpg";
import Header from "../../../components/header/Header";

function Anuradhapura() {
  return (
    <>
    <Header/>
      <div className="container-md">
        <div className="card mb-3">
          <h5 className="card-title" id="mtn">
            <h1>
              <b>Anuradhapura</b>
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
                Located in the north-west of the island, Anuradhapura was the
                capital of Sri Lanka for 1400 Years. It is slightly more than
                200KM from Colombo and a drive of around 6 hours Anuradhapura
                gained much greater prominence with the advent of Buddhism on
                the island, after which many significant buildings and
                monasteries were constructed.
                {/* <br/><br/>
            <b>Top attractions in Ampara : </b> */}
              </h3>

              <h3 className="card-title">
                {/* <b>Buddhangala Monastery</b> */}
                <h4>
                  The three greatest Monasteries of Sri Lanka, the Mahavihara,
                  the Abhayagiri temple and Jethawanaramaya are all located in
                  Anuradhapura. Lately visitors will see mainly the ruins of
                  these Monasteries. The city and its important ruins were
                  rediscovered only in the early 19th century with the help of
                  the British.
                </h4>
              </h3>

              <h3 className="card-title">
                <b>Ruwanvalisaya </b>
                <h4>
                  Simply known as the Greatest Stupa, was constructed by king
                  Dutthagamini after he becomes king in 161 BC. This was his
                  most ambitious project but sadly the king did not live to see
                  the completion of the Stupa. It is believed that relics of the
                  Buddha are enshrined with in the stupa.
                </h4>
              </h3>

              <h3 className="card-title">
                <b>Sri Maha Bodhi </b>
                <h4>
                  The sister of Ven. Mahinda came to the island to start the
                  order of bhikkunis (nuns). She brought with her a branch of
                  the sacred bodhi tree from India under which the Buddha
                  meditated and attained enlightment. The tree is believed to be
                  the oldest living planted tree in the world. It’s one of the
                  most sacred and venerated relics in Sri Lanka.
                </h4>
              </h3>

              <h3 className="card-title">
                <b>The Brazen Palace </b>
                <h4>
                  The brazen palace or “lohapasada”, was first built by King
                  Devanampiya Tissa in the 3rd century BC. It was later
                  redesigned as a chapter house, or Sima hall, by king
                  Dutthagamini for the Mahavihara. One side of the building was
                  120 meters long and it had thousand rooms within its nine
                  stories.
                </h4>
              </h3>

              <h3 className="card-title">
                {/* <b>Crocodile Rock </b> */}
                <h4>
                  It is called the brazen palace because its roof was once
                  covered with sheets of bronze tiles. A total of 1,600 stone
                  pillars supported the structure. Most of which can still be
                  seen even today.
                </h4>
              </h3>
              <h3 className="card-title">
                <b>The Thuparamaya Temple </b>
                <h4>
                  This was the first stupa constructed with the introduction of
                  Buddhism in Sri Lanka build by King Devanampiyatissa, it is
                  believed to enshrine the collar-bone of the Buddha.
                </h4>
              </h3>

              <h3 className="card-title">
                <b> Mahasena’s Pavilion </b>
                <h4>
                  This location is known for its beautiful moonstone, the finest
                  and most well-preserved in Sri Lanka. Moonstones are usually
                  found at the entrances or at the bottom of stairways to
                  temples and other important Buddhist buildings. They are
                  characteristic of ancient Sinhalese artwork.
                </h4>
              </h3>
              <h3 className="card-title">
                <b> The Twin Ponds </b>
                <h4>
                  These were large bathing tanks that catered to the needs of
                  the monks and staff of the Abhayagiri temple and were built
                  around the 8th century. Water was filtered several times
                  before flowing in to ponds through a dragon headed spout.
                  Other noteworthy features are the beautiful carvings around
                  the ponds and the snake-shaped guard stone.
                </h4>
              </h3>
              <h3 className="card-title">
                <b>The Abhayagiri Temple </b>
                <h4>
                  The Abhayagiri monastery was built by King Vattagamini Abhaya
                  in 88 BC after regaining his throne. This is the largest
                  monastery in Sri Lanka for over 600 years. The Abhayagiri
                  stupa was built by king Gajabhahu in the 2nd Century CE, and
                  stands 72 meters high with a diameter of 94 meters.{" "}
                </h4>
              </h3>
              <h3 className="card-title">
                <b> The Samadhi Buddha Statue </b>
                <h4>
                  Constructed in the 4th century and is above 1.75 meters high.
                  The Samadhi Buddha statue is one of the best examples of Sri
                  Lankan sculpture. The statue shows the Buddha sitting
                  cross-legged in a meditating or “Samadhi” posture.
                </h4>
              </h3>
              <h3 className="card-title">
                <b>The Jetawana Stupa </b>
                <h4>
                  This colossal stupa was built by king Mahasena towards the end
                  of the 4th century and is considered the largest stupa in the
                  world, it was originally about 160 meters tall and an
                  estimated 93 million bricks were needed in its construction.
                  It is believed that a part of the Buddha’s belt relic is
                  enshrined within this stupa and is an excellent example of
                  ancient Sri Lankan engineering and construction.
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

export default Anuradhapura;
