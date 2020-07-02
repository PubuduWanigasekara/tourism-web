import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/destinations/details/ampara.jpg";

function Matale() {
  return (
    <div className="container-md">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Matale</b>
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
              Matale is 142 km (88 mi) from Colombo and near to Kandy. Surrounding the town are the Knuckeles Mountain Range, the foothills were called Wiltshire by the British. It is a mainly an agricultural area where tea, rubber, vegetable and spice cultivation dominate.
              {/* <br/><br/>
              <b>Top attractions in Ampara : </b> */}
            </h3>

            <h3 className="card-title">
              <b>Aluvihare rock temple</b>
              <h4>
                This is an ancient rock temple of great significance in history of Buddhism. The Buddhist cannon and its commentaries, which were till then handed down orally, were committed to writing for the first time at Aluvihare temple in 2nd century B.C.
                Folklore has many meanings to the name Aluvihara. One is that the Pali word Aloka was Alu (light) in ancient Sinhala and as it was the abode of Theras, it was a Viharaya. Hence the two words have been coined to make it Aluvihara. Another view is that there is a huge rock, east of the main rock cave, it has not cut off the light. Therefore it was known as the Aloka lena (cave with light).
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Sri Muththumariamman Temple</b>
              <h4>
                Hindu temple in matale. This temple is dedicated to Mariamman, the goddess of rain and fertility.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>National Spice Garden</b>
              <h4>
                Unique centre for learning about Sri Lankan spices and experiencing the real spices of the country.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Sembuwatta lake</b>
              <h4>
                Man- made lake created from natural spring water. Alongside the lake is a natural swimmimg pool.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Wasgamuwa national park</b>
              <h4>
                One of the protected areas where Sri Lankan elephants can be seen in large herds. It is also one of the important bird areas in Sri Lanka.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Fort MacDowall</b>
              <h4>
                One of the few inland forts constructed by the British and was completed in 1803.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Bambarakiri Ella</b>
              <h4>

              </h4>
            </h3>

            <h3 className="card-title">
              <b>Nature Riverston</b>
              <h4>
                Riverstan is one of several hill tops in the Knuckles range being located in a windy gap on a range of scenic mountains with frequently changing climate in the middle of Rattota – Pallegama road. Riverstan is highly popular with both foreign & local travelers. Two telecommunication towers were setup on the both summits of the Riverstan Mountain. The access road for them was a private one and no vehicles were allowed beyond the Riverstan gap. The climate is changed in every minute, Sometimes it brought little sun rays, and sometime cool wind, but most of the time with a thick mist.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Knuckles</b>
              <h4>
                Distance from Colombo 190 Km, the knuckles or Dumbara hills are a striking geographical feature which nature has bestowed on Sri Lanka. These hills cover parts of Kandy and Matale district, and are separated from the central hills by the Mahaweli valley to the south and east, and the Matale valley to the west. This is an Ideal environment for adventure and Eco holiday lovers since rocks, streams, jungle and three waterfalls are the main attractions around the place.
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

export default Matale;