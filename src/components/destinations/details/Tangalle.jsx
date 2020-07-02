import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/destinations/details/ampara.jpg";

function Tangalle() {
  return (
    <div className="container-md">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Tangalle</b>
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
              Tangalle is one of the nicest spots along the south coast located in the Hambantota District, particularly if you want somewhere to find a place to laze and soak up the sun. The palm fringed bay and picturesque coves of Tangalle are a natural treasure. The starting point for whale and dolphin watching expeditions owing to its close proximity to one of the main whale migrating routes.<br /><br />
The town, in spite of being beside the bay, fishing harbor & busy market has a relaxed atmosphere with some reminders of Dutch days, including the Rest House.<br /><br />
Tangalle is a pleasant fishing port situated on one of the finest and largest natural bays in the island, which is protected from the ocean by an enclosing reef. Exhibiting fine beaches, surf breaks, good swimming, sea bathing, sunbathing, snorkeling and more than reasonable diving, it is a popular destination on the south coast.<br /><br />
The Dutch were the first Europeans to discover the maritime benefits of Tangalle, and their influence can be seen in a few remaining examples of architecture, such as the Rest House, Court House and Fort. The Dutch Fort stands on a slope above the bay. Unfortunately it has undergone considerable alteration since it was turned into a jail in the middle of the 19th century.
              {/* <br/><br/>
              <b>Top attractions in Ampara : </b> */}
            </h3>

            <h3 className="card-title">
              <b>Mulkirigala Rock Temple</b>
              <h4>
                The stunning rock temple of Mulkirigala, 20km to the north, where after ascending a series of rock steps you will reach few natural caves with numerous wall paintings and Buddha statues. One cave houses a library in which, a most important discovery was made in 1826 by a British administrator George Tumour who found some long-unseen palm-leaf manuscripts containing the key to translating the Mahawamsa, the Great Chronicle of Sri Lanka. It is well worth making it the summit, for there are magnificent views to be had of the surrounding countryside.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Wevurukannala</b>
              <h4>
                The largest seated Lord Buddha statute is 50 m high. An eight story building is there backing the statue and you can climb to the top of the building. Inside the building walls are painted to show events of Lord Buddha’s life.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Hoo-maniya Blowhole</b>
              <h4>
                Around 7km west of Tangalla is the fishing village of Kuduwela. There in located Hoo-maniya blowhole. The fanciful name derives from the low, booming “Hoo” sound that precedes the jets of water. The blowhole is formed from a deep, narrow cleft in the cliff, around 20m deep and a meter wide, which funnels plumes of water up into the air in great jets by some terrific action of water pressure. It’s most impressive during the monsoon – May to Nov.
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
              <b>Kalametiya Bird sanctuary</b>
              <h4>
                20km beyond Tangalle, Kalametiya Bird Sanctuary comprises an area of coastal lagoons and mangroves which is rich in marine and birdlife, similar to that found in Bundala and best seen from November to March. Access to the sanctuary is from the village of Hungama, located approximately 20 mints from Tangalle.
              </h4>
            </h3>
            <h3 className="card-title">
              {/* <b>Lahugala Magul Maha Viharaya </b> */}
              <h4>
                Rakawa Turtle sanctuary is a 02 km stretch of protected coastline which is a nesting haven for 05 species or marine turtles.
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

export default Tangalle;
