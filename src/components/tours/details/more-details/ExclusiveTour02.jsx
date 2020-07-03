import React from "react";
import { Link } from "react-router-dom";
import AmparaI from "../../../../images/tours/tours categories/details/ampara.jpg";

function BeachBreakTour01() {
  const containerStyle = {
    marginLeft: "0px",
    // marginRight: "0px",
  };

  return (
    <div className="container-md">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Hill Station, Beach Wildlife - 6 Days 5 Nights</b>
          </h1>
          <Link to="/tours-categories-exclusive-tour">
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
            <h3 className="card-title">
              <b>Day 01-Sigiriya </b>
              <h4>
                Upon your arrival we transfer you to Sigiriya for your hotel. After check in you are free to take some rest or join the safari at kaudulla or Minneriya national park.or take a village tour and spend the night stay at sigiriya.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Day 02-Sigiriya</b>
              <h4>
                Wake up early morning and our chauffeur will drive you to climb up Sigiriya rock. Then take a village tour and you can taste a traditional food for lunch in there or take a safari. It depends on your wish. Evening relax at your hotel in Sigiriya.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Day-03, 04 - Trincomalee or Nilaveli </b>
              <h4>
                After your breakfast we'll drive to Trincomalee your beach hotel and now you are free to relax or join beach activities.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Day-05 - Kandy </b>
              <h4>
                After your beach break now we are traveling to royal city of Kandy. On the way you will discover picturesque temples and will get a chance to visit the herbal garden. Evening you're free to walk along the beautiful Kandy Lake and do some shopping as your wish. Also if you like to join cultural drumming and dancing event in there you can do so.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Day-06 - Departure </b>
              <h4>
                Today you are going to visit the world heritage temple known as the temple of tooth relic. This is also the last palace in Sri Lanka and also if you like you can visit the botanical garden in Kandy. And finally we will be driving you back to airport to depart or transfer you to your Negambo hotel. And the tour ends here.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Summary</b>
              <h4>
                This tour is designed for the discerning travelers who have limited time and wish to explore the true beauty and hidden charm of the hill country, wild life and discover enchanting beaches of Sri Lanka. Joining this tour, you will discover the diverse beauty of Sri Lanka including royal Kandy city, Heritage tooth relic temple, Sigiriya (4th century) which is named as the eighth wonder of the world. Also you can enjoy the wild life and scenic beauty at Minneriya or Kaudulle national park.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Highlights</b>
              <h4>
                <ui>
                  <li>
                    Learning about Sri Lankan architecture, art and proud history while visiting the temple of tooth relic and refreshing mind walking through the Kandy Lake.
                  </li>
                  <li>
                    Learning about secrets of beautiful life visiting herbal and spice garden.
                  </li>
                  <li>Climbing the Sigiriya rock and understanding marvelous graffiti about love while admiring the Sri Lankan beauty observing the mirror walls at Sigiriya.</li>
                  <li>Discover scenic beauty and wild life at national park Habarana.</li>
                  <li>Discover the Sri Lankan traditional life at village safari.</li>
                  <li>Relaxing at Nilaveli or Trincomalee picturesque beach as per your wish.</li>
                </ui>{" "}
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

export default BeachBreakTour01;
