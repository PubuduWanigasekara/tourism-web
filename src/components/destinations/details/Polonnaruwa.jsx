import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/destinations/details/ampara.jpg";

function Polonnaruwa() {
  return (
    <div className="container-md">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Polonnaruwa</b>
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
              This city was the second great capital of Sri Lanka after Anuradhapura and is located about 100 kilometres of the south east. It’s prominence as the capital lasted for about 300 years, during which a number of major Buddhist structures were made.
              <br /><br />By the 13th century, Polonnaruwa became increasingly vulnerable to attacks from the north by Indian invaders, and civil wars, subsequent kings gradually shifted their capitals to words the south-west, and like Anuradhapura, Polonnaruwa was eventually abandoned. This ancient city is named a world heritage site by UNESCO.
              {/* <br/><br/>
              <b>Top attractions in Ampara : </b> */}
            </h3>

            <h3 className="card-title">
              <b>The Sea Of Parakrama</b>
              <h4>
                Although without any religious significance, this reservoir is possibly Polonnaruwa’s most impressive feature .it was constructed during the reign of king Parakramabahu in the late 12th century and served both as a defense against invaders and as a supply of water for both the city and for irrigation. Reservoirs in Sri Lanka are somewhat incongruously called “tanks” and some of them, like the sea of Parakrama, are so big they are actually more like inland seas.In fact, this reservoir covers more that 22sequare kilometers and is comprised of three huge bodies of water connected together. This was an incredible feature of ancient engineering which has to be seen and believed. The lake now irrigates more than 72 square kilometers of paddy fields.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>The Quadrangle of the Temple Of Tooth</b>
              <h4>
                Just before the quadrangle, lies the remains of Parakramabahu’s seven storayed victory palace. Only its 3 meter thick walls still stand. Within this quadrangle is the vatadage, an elegant temple which consist of two concentric stone terraces encircling a number of Buddha statues in the Samadhi or meditation posture.At the four entrances are beautifully carved moonstones and guard stones making this the finest temple in Polonnaruwa. Most complete structure of the quadrangle is the Thuparama temple which originally constrained a seated Buddha image.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>The Gal Viharaya</b>
              <h4>
                Some of the finest Buddha statues in Sri Lanka are found in the gal Viharaya or “rock temple”, where four Buddha images are carved from the face of a single granite rock. There is a very impressive 5 meter high seated image with an elaborate halo behind its head.
                Next is a large standing image 7 meters tall. Because of its usual posture with its hands folded across its chest, some people believe that this image is not of the Buddha, but of Ananda thero, his personal attendant.
                At the end of the cliff is a massive reclining statue 14 meters long. This statue shows the Buddha at rest as he enters in to final nibbhana (the enlightment). The pillow and the feet of the statue are all exquisitely carved. The face also has a most peaceful and serene smile.
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

export default Polonnaruwa;