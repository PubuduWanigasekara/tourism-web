import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../images/destinations/details/ampara.jpg";
import Header from "../../../components/header/Header";

function Galle() {
  return (
    <>
      <Header />
      <div className="container-md">
        <div className="card mb-3">
          <h5 className="card-title" id="mtn">
            <h1>
              <b>Galle</b>
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
                Away from the bustle of the metropolis, 115km along the coast
                from Colombo, is Galle which is visited by most of the tourists.
                Once an outpost of the Portuguese invaders and later of the
                Dutch, it still retains the original fortification in a perfect
                state of preservation massive old structures denote an
                atmosphere of the past Portuguese and Dutch era when the Sri
                Lanka in some parts were held in bondage. A butterfly bridge
                spans the canal constructed during the Dutch period. This bridge
                shows been engineering skill.
                {/* <br/><br/>
              <b>Top attractions in Ampara : </b> */}
              </h3>

              <h3 className="card-title">
                <b>Gall Fort</b>
                <h4>
                  Famous all over the world due to Galle Dutch fort statue
                  facing the Indian Ocean is one of the UNESCO heritage site.
                  The fort was first built by Portuguese in 1588 before being
                  extensively fortified by the Dutch in the middle of 1600.
                  Actually Galle was considered as the place where Portuguese
                  first arrived to Sri Lanka in 1550.The famous invader ‘Lorenzo
                  de Almeida’ was able to make a close connection with the Sri
                  Lankan king Dharmaparakramabahu and got his blessing to build
                  a camp, which was done to ensure the safety of Sri Lanka, but
                  ultimately This place become a prison for the local Sinhalese
                  community who were against the cruel Portuguese rulers. There
                  are two main entrances to the Galle Dutch fort. If you are
                  coming from the Galle harbor side you will see the two symbols
                  on the top the main gate logo contain the wording ‘Dieu at mon
                  droit,’ the motto of the British monarch in England. The
                  inside wall contains the Dutch VOC symbol which Symbolized the
                  Dutch East India company. The other main entrance is located
                  in fort of Galle cricket ground and now mostly used by the
                  public.
                </h4>
              </h3>

              <h3 className="card-title">
                <b>The Churches </b>
                <h4>
                  Some of the best attractions for tourists in from of Churches
                  are found in Galle. ‘Groote Klerk church’ the oldest
                  protestant church in Sri Lanka is found in Galle. The Dutch
                  constructed a ‘new’ church street in the years 1754. It is
                  known that several engraved tombstones were transfer from the
                  old church to the new church area.
                </h4>
              </h3>

              <h3 className="card-title">
                <b>The Galle Light-House </b>
                <h4>
                  This is Sri Lanka’s old light station dating back to 1848, but
                  the original 24.5meters high lighthouse built by the British
                  was located about 100 meters (330ft) from the current site,
                  however it was destroyed in 1934 and the Existing 26.5 Meters
                  lighthouse was erected here. 1939 the light station within the
                  wall of the ancient Galle fort was named a UNESCO world
                  heritage site and well known place for tourist attraction.
                </h4>
              </h3>

              <h3 className="card-title">
                <b>Antiquities of Galle</b>
                <h4>
                  The Dutch Commander’s residence or Government House, queen’s
                  house in the British era, can be seen down the street opposite
                  the Dutch Church which leads of the old gate over the doorway
                  of this residence is a large stone slab on which is the date
                  1683, and the figure of a cock inscribed. Another antiquities
                  of Galle is the old main gate to the fort. The visitor should
                  pause to study to stone lets in to the wall over the entrance
                  and exist this gateway, which tells the story of the conquests
                  of the old city. The lion and unicorn of the British coat of
                  aim is found over the outside area and of the inside is a
                  monogram of the Dutch East India Company a shield with the
                  initials V.O.C chiseled upon it and two lions supporting the
                  crest, the date is 1669.
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

export default Galle;
