import React from "react";
import { Link } from "react-router-dom";
import AmparaI from "../../../../images/tours/tours categories/details/ampara.jpg";

function BeachBreakTour02() {
  const containerStyle = {
    marginLeft: "0px",
    // marginRight: "0px",
  };

  return (
    <div className="container-md">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Mirissa Creature Beach Break – 5 Days 4 Nights</b>
          </h1>
          <Link to="/tours-categories-beachbreak">
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
              <b>Day 01- Negambo city - Mirissa </b>
              <h4>
                Our chauffer will pick up you at the airport and after 6 hours of drive you can arrive at Mirissa Whale creature beach. While you are on your way to the destination don't miss out to enjoy the rubber, paddy fields and beautiful landscapes. After checking in your resort you can start your beach break tour. And then stay your night in a sea side resort.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Day 2 -3- 4</b>
              <h4>
                The next three days are the most wonderful time of your beach break tour for the reason is that you can spend all your times as you wish. If you want to enjoy the fresh cool air from the sea, wake up early to soak in to the warm water or catch the sunrise moment. Then enjoy your breakfast. You can be totally free and ease your mind from stresses of daily life while enjoying the sunrise moment.
                Why don't you take your leisure time to wander along the beach sunbathing in the morning sunlight or read a book under tree of in a cool place? The one activity that almost every visitors to Mirissa take part in is a Whale watching boat trip. So why you want be late for that? Also joining with this tour you have chance to visit beautiful landscape such as Hummanaya Blow hole, Weurukannala temple, Parey Dewa temple (Rock in water), Dondra light house and also you will get a chance to learn about Dutch Era by visiting Dutch Rampart and Star fort in Matara. To add more activities and values to your trip you can enjoy with snorkeling, surfing and stilt fishing.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Day 5</b>
              <h4>
                In the morning before you return to the airport you can take a rest at your resort or sightsee the reminder attraction. Our car will pick up you at your resort and transfer you to the airport. A beach break comes to the end.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Summary</b>
              <h4>
                Being known as the Sri Lanka’s biggest creatures, the blue whales are in a small fishing village – Mirissa which has a wide stretch of a golden beach full of palm trees. Mirissa is one of the closest point to watch whales and dolphins and also famous for activities like water skiing, surfing, snorkeling. The tropical sunlight in Mirissa will make you feel warm and your skin color will turn into sexy tan color.
                Visiting the city of Matara will give you a chance to visit places like Dutch Rampart, Parey Dewa temple (modern Buddhist temple on Pigeon Island) and star fort will help you to understand more about history and nature. So let’s go to Mirissa for a memorable trip.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Highlights</b>
              <h4>
                <ui>
                  <li>
                    Joining outdoor activities such as playing beach games and water activities like diving, snorkeling and also enjoy whale and dolphin watching activities and extra special you can enjoy a seafood party at night
                  </li>
                  <li>
                    Visiting places like Dondra light house, Wewrukannala viharaya, Hummanaya blow- hole, Parey Dewa temple, Dutch rampart, Star fort and also enjoy some fishing with locals.
                  </li>
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

export default BeachBreakTour02;
