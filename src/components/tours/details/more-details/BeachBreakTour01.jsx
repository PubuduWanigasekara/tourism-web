import React from "react";
import { Link } from "react-router-dom";
import AmparaI from "../../../../images/tours/tours categories/details/ampara.jpg";
import Header from "../../../../components/header/Header"

function BeachBreakTour01() {
  // const containerStyle = {
  //   marginLeft: "0px",
  // };

  return (
    <>
      <Header/>
      <div className="container-md">
        <div className="card mb-3">
          <h5 className="card-title" id="mtn">
            <h1>
              <b>
                A Beach Break From Hill Country to Arugambay - 5 Days 4 Nights
              </b>
            </h1>
            {/* <Link to="/tours-categories-beachbreak">
            <button className="btn btn-secondary">Back</button>
          </Link> */}
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
                <b>Day 1: Negambo airport – Arugambay</b>
                <h4>
                  Starting the journey at Negambo airport (Bandaranayake
                  international airport) and traveling to Arugambay (via Colombo
                  Kandy road). During six hours of travel by car (about 350Km)
                  you can behold the roadside landscape. Upon arrival you can go
                  through a nestled amidst verdant hills, interspersed by the
                  Mahaveli Ganga (river) and beautiful Kandy lake which is the
                  center piece. Kandy is a certainly the most picturesque city
                  in the island and most visited before reaching Arugambay.
                </h4>
              </h3>

              <h3 className="card-title">
                <b>Day 2 - 4: Arugambay beach </b>
                <h4>
                  During the three days of this Arugambay beach tour you are
                  free to take a rest and discover the surrounding areas such as
                  Pottuvil lagoon, Pottuvil point, Muhudumaha viharaya, Panama
                  to Okanda and Kumana bird sanctuary. Some options can be
                  offered on your break in Arugambay such as sunbathing,
                  surfing, swimming, joining sporty games etc. Delicious
                  traditional food and barbecue to be served upon your request.
                </h4>
              </h3>

              <h3 className="card-title">
                <b>Day 5 - Departure </b>
                <h4>
                  Our car will pick you up at your resort and depart for airport
                  or your hotel at Negambo. And then the tour ends.
                  <br />
                  <br />
                  Note: you can stay another nights as your wish
                </h4>
              </h3>

              <h3 className="card-title">
                <b>Summary</b>
                <h4>
                  This tour destinations are at the heart of Sri Lanka’s nascent
                  places and so you are able to spend your beach break at the
                  southern end of Arugambay beach. Also you will get a great
                  opportunity to visit one of the most valuable heritance city
                  Kandy of Sri Lanka. This tour is designed to capture the real
                  essence of Sri Lanka and is a fascinating introduction to one
                  of the most popular surfing center ranked 3rd among the best
                  20 beaches in the world by the ‘British Surfers Association’.
                  In Arugambay you can also visit Lahugala National park –
                  famous for elephants, Pottuvil lagoon – paradise for bird
                  watchers and Kumana bird sanctuary. A stroll along main street
                  will take you pass many traditional Sri Lankan restaurants
                  which serves some of the best rice and curry meals in the
                  country.
                </h4>
              </h3>

              <h3 className="card-title">
                <b>Highlights</b>
                <h4>
                  <ui>
                    <li>
                      Discovering the culture capital and the last palace
                      (Temple of Tooth Relic) in Sri Lanka.
                    </li>
                    <li>Taking part in outdoor activities.</li>
                    <li>Beach games and surfing.</li>
                    <li>Enjoying outdoor seafood and traditional meals.</li>
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
    </>
  );
}

export default BeachBreakTour01;
