import React from "react";
import { Link } from "react-router-dom";
import AmparaI from "../../../../images/tours/tours categories/details/ampara.jpg";

function ShortTripOne() {
  const containerStyle = {
    marginLeft: "0px",
    // marginRight: "0px",
  };

  return (
    <div className="container-md">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Discovery Tour to South Coast to Culture Capital – 6 Days 5 Nights</b>
          </h1>
          <Link to="/tours-categories-discovery-tour">
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
              <b>Day 01- Negambo airport- Bentota </b>
              <h4>
                Our guide will pick you up at the airport and then drive you to Bentota. After arriving at Bentota you can relax yourself at the beach.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Day 02- Bentota </b>
              <h4>
                You are able to go on a boat trip along Madu river to discover it's picturesque scene, visit the garden and Galpota temple which has been for there from the 12th century. This is a very poetic landscape which will bring you a relaxing time with fresh air and beautiful environment.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Day 03- Bentota- Galle-Thissamaharama  </b>
              <h4>
                Wake up early morning and after the breakfast you will visit the world heritage site in Galle. Galle was the main port of Sri Lanka for more than 200 years and was an important stop for boats and ships travelling between Europe and Asia. In the afternoon you will arrive to the Yala National park and get a chance to join a safari by 4*4 jeep and also spend your night in a Thissamaharama. If you like you can visit the ancient temple in the city.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Day 04- Thissamaharama- Nuwara Eliya   </b>
              <h4>
                After breakfast our guide will drive you to Nuwara Eliya, superb hill country in Sri Lanka. You are able to see the beautiful waterfalls, Botanical garden, vast areas of tea plantations after reaching the destination. Also you can visit the Seetha kovil, and many more beautiful places like Lake Gregory etc.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Day 05- Nuwara Eliya- Kandy  </b>
              <h4>
                Wake up early morning and we will take a Jeep tour to visit Horton plains. You'll need to wrap up to warm yourself (a morning frost isn't common) for down hike across there bleak moorlands. It's one of the most enjoyable walks in the country, so don't forget your camera for some nice photos. After the lunch you will go to culture capital, on the way you will see largest tea plantation estate and famous tea factory. You can buy the best Ceylon tea and taste a cup of tea from hill country. In the evening you will arrive the culture capital city. You will visit the Tooth temple and enjoy in the cultural show by teenagers. Take a walk around the city at night.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Day 06- Kandy- Negambo (airport)</b>
              <h4>
                On the next day, while travelling back to Negambo (or airport) you can discover spices and herbal garden. To satisfy your desire of discovering, we will stop at the elephant orphanage which the best known place for big elephants reservation in Sri Lanka. You can feed them food and take the photos with elephants. And then it will be the last part of your tour and say goodbye. Our guide will drive you the airport. Tour ends.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Summary</b>
              <h4>
                This exclusive tours takes you from an empty swath of golden sand beach called Bentota of southern coast and also to Yala National park and picturesque heritage city of Kandy. The city of Kandy is well known for the temple of tooth relic. And Beloved Galle fort is the enchanting old City in Sri Lanka. While the cold breezy winds in Hortan Plains and the wild life and all the experiences you get in this tour will leave you a lasting impression and create an unforgettable moment I'm your lives.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Highlights</b>
              <h4>
                <ui>
                  <li>
                    Having a boat trip to explore Madhu River and its lagoons.
                  </li>
                  <li>
                    Admiring the spectacular beauty of beloved Galle fort which was built during the British colonial era.
                  </li>
                  <li>Joining the Safari in one of the largest National park in Yala and understand the wild nature in Sri Lanka.</li>
                  <li>Getting a chance to enjoy the best tea in the world from hill country of Sri Lanka and don't miss out to visit Hortan Plains in Nuwara Eliya.</li>
                  <li>Discovering the culture city Kandy and visiting the temple of tooth relic.</li>
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

export default ShortTripOne;
