import React from "react";
import { Link } from "react-router-dom";

function About() {
  const containerStyle = {
    marginLeft: "0px",
  };

  return (
    <div className="container-md">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>About Us</b>
          </h1>
        </h5>
        <div className="card-body">
          <p className="card-text">
            <h3 className="card-title">
              <h4>
                Around the world people started to travel from one country to
                another to spend their leisure time. This excursion spread only
                among the richest in the world. But later on with the expanding
                technology, the doors to travel has been opened to everyone. Our
                vision is to fulfill this dream by providing travel assistance
                which specifically caters every unique needs, value for money
                and choosing destination as you wish. Feel the life, come and
                travel with us
              </h4>
            </h3>

            <h3 className="card-title">
              <h4>
                Launched for many years, Sri Lanka Chauffeurprive has been one
                among the major tour operators in Sri Lanka and served a huge
                number of travelers every year. Our services comprise a wide
                range of providing for foreign visitors, car pick-up and
                transfer along with arranging accommodations and operating
                in-bound tours.
              </h4>
            </h3>

            <h3 className="card-title">
              {/* <b>Day 03 - Gem city;Rathnapura </b> */}
              <h4>
                With advantage of the most skillful and talented online
                technological professional team, we supply 24/7 free-of-charge
                helpful Sri Lanka travel information and arrange any Sri Lanka
                tours for those who wish to travel to Sri Lanka for different
                kinds of purposes like business, vacation or leisure. We have
                strived to promote Sri Lanka as a beautiful country rich in
                history, culture and traditions along with stunning sceneries,
                friendly and hospitable local people. Thanks to our Sri Lankan
                information and professional services, we keep our promise to
                offer you a memorable and deeply-impressed trip on this small
                but beautiful island.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Why Chauffeurprive Sri Lanka?</b>
              <h4>
                <ui>
                  <li>
                    We provide 24/7 personalized customer care to our clients.
                  </li>
                  <li>Our commitment to provide you the best service.</li>
                  <li>
                    We provide wide range of travel opportunities with custom
                    made and specialized tours to clients.
                  </li>
                  <li>
                    Experienced local guides with firsthand experience on every
                    location.
                  </li>
                  <li>
                    Sustainable tours with travel plans with guaranteed
                    satisfaction.
                  </li>
                </ui>
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

export default About;
