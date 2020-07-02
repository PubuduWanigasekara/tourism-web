import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/destinations/details/ampara.jpg";

function Trincomalee() {
  return (
    <div className="container-md">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Trincomalee</b>
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
              Trincomalee, also known Trinco is popular for its beautiful quiet sandy beaches that are ideal for tourists to relax thousands of miles away from bustling city life. Trincomalee is a one of the most natural harbors in the world. There are only four or five others comparable to Trincomalee harbor, among them Sydney harbor and Buenos Aires harbor in Argentina are some. Trinco harbor is the fifth largest natural harbor. <br /> <br />
Trincomalee is also famous among tourist for its picturesque and scenic beaches that remain unspoiled and clean. The sea of Trincomalee is relativity shallow that makes it good for bathing and swimming for travelers.
              {/* <br/><br/>
              <b>Top attractions in Ampara : </b> */}
            </h3>

            <h3 className="card-title">
              <b>Fort Fedrick</b>
              <h4>
                The small peninsula jutting out of Trincomalee town near the stadium and the main shopping streets is the Portuguese built “fort Fedrick” in the year 1624 CE. Fort Fedrick was built from the debris of a Hindu temple known as Koneshwaram temple after destroying some. Another attraction for traveler is the lover’s leap or swami rock, which is a 130m high cliff giving scenic view of surrounding.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Hot Springs</b>
              <h4>
                The hot springs of Kannya are about five miles North West of Trincomalee and about half a mile off the Anuradhapura road.
                As with most places of interest in and around Trincomalee these hot springs also have their legends , which goes back to pre-Vijayan times , when Rawanas was ruling Sri Lanka . The legend as told to Bella Sydney Woofl, sister of leornard woofl and recoded in her 1914 publication “how to see Ceylon”, is as follows. <br /> <br />

                “Vishnu wished to prevent rawana from setting forth on some undertaking, and he appeared to ravana as an old man bearing the false news that kannya (his mother) was dead .thereupon ravana determined to put off his project and, perform the rites for the dead, asked where he could find water for the ablution. Vishnu disappeared and the hot spring burst forth where he had stood. Since then this place have been called as kannya”.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Seruwila Temple </b>
              <h4>
                Seruwila temple is an ancient temple, which is among the sixteen holiest Buddhist shrines in Sri Lanka. It is reachable both from road and sea routes.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Nilaveli and Uppaveli</b>
              <h4>
                Nilaveli is one of most beautiful beaches in Sri Lanka known for its soft white sand and breath taking bays. Nilaveli is famous for recreational water sports such as scuba diving now more and more travelers are discovering Uppaveli and Nilaveli. Either way, everyone loves “pigeon island”, a pretty island, and reef 1km from Nilaveli that makes for a perfect snorkeling or diving.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Marble Beach</b>
              <h4>
                This is a place to relax and rest your feet while watching the sun rise against a serene ‘shaded blue’ sea front where the crystal Clear water would make you forget all the aches and pains. That little heaven would be the marble beach. This beach is maintained by Sri Lanka army. Seawater at marble beach is clear and calm as glass.
              </h4>
            </h3>
            <h3 className="card-title">
              <b>Pigeon Island </b>
              <h4>
                This island got its name because of the rock pigeons live over there. Earlier this island was used by British army as a place for shooting practice during world war time.<br /> <br /> The island, a breeding ground for rock pigeon, is beautiful enough with rock pools and paths. Running through thickets, but it is the underwater landscape that is the real stars. The reef here is shallow making snorkeling almost as satisfying as diving, and its home to dozens of corals. Hundreds of reef fish (including a black tip reef sharks) and turtles.
              </h4>
            </h3>
          </p>
          {/* <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p> */}
        </div>
      </div>
    </div >
  );
}

export default Trincomalee;