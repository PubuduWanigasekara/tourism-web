import React from "react";
import { Link } from "react-router-dom";
import AmparaI from "../../../../images/tours/tours categories/details/ampara.jpg";

function ShortTripOne() {
  const containerStyle = {
    marginLeft: "0px",
    // marginRight: "0px",
  };

  return (
    <div className="container-md" id="mtn">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Hill Country with Ancient Cities- 03 Days 02 Night</b>
          </h1>
          <Link to="/tours-categories-short-trips">
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
              <b>Day 01- Kitulgala - Nuwara Eliya </b>
              <h4>
                Upon your arrival our tour guide will pickup you at the airport to transfer you to Nuwara Eliya via Kithulgala. On the way to Nuwara Eliya you are able to admire the beautiful tea carpeted hill country sceneries where most of them were planted by the nostalgic British planters and rafting in Kitulgala, sightseeing the Nuwara Eliya mist covered beauty. Also you can visit Haggala botanical garden. And spend overnight at Nuwara Eliya.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Day 02- Horton plains - Kandy </b>
              <h4>
                Wake up early morning and starting the day’s journey by visiting the famous National park – Horton Plains in Nuwara Eliya by 4*4 jeeps. That will take around half of the day. After that you can return to your hotel and after the lunch will be leaving to Kandy. On the way to Kandy you can visit the tea estate and factory. After going to Kandy sightseeing and shopping can be done and in the evening you are able to visit the Dalada Maligawa the golden roofed temple of the sacred tooth relic of the Buddha which brings sanctity to Kandy. And then spend overnight at Kandy.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Day 03- Sigiriya - Negambo via Kurunagala </b>
              <h4>
                Early Morning starting the journey to Sigiriya rock fortress which was a built in the 5th century. After lunch return to Negambo airport/ hotel via Kurunagala visiting the Yapahuwa Kingdom. And the tour ends here....
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Summary</b>
              <h4>
                Our hill country to ancient cities tour is a great combination among the famous classic attractions. Sri Lankan sunrise and the cold misty air can be felt as in heaven well in Horton Plains, Nuwara Eliya. Climbing the Sigiriya rock and exploring the temple of tooth relic are an ideal choice to learn and observe the beauty and hidden architecture of Sri Lanka.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Highlights</b>
              <h4>
                <ui>
                  <li>
                    Joining the rafting event at kithulgala river will be an adventurous experience in your life.
                  </li>
                  <li>
                    Sunrise view from the stunning heights of World’s End at Horton Plains.
                  </li>
                  <li>Discovering the culture capital with temple of tooth relic.</li>
                  <li>Climbing the Sigiriya rock fortress and identifying the nature and mind blowing ruins and architecture.</li>
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
