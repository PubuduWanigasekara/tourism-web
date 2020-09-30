import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/destinations/details/ampara.jpg";
import Header from "../../../components/header/Header";

function Mirissa() {
  return (
    <>
      <Header />
      <div className="container-md">
        <div className="card mb-3">
          <h5 className="card-title" id="mtn">
            <h1>
              <b>Mirissa</b>
            </h1>
            {/* <Link to="/destinations">
            <button className="btn btn-secondary">Back</button>
          </Link> */}
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
                Mirissa and its breath taking sandy beach pretty much transforms
                your dreams and visions of a tropical paradise in to an everyday
                reality. Located close to Southern tip of the Island of Sri
                Lanka and only about 200Km from the equator, this secluded
                crescent shaped beach is the perfect place to sit back, relax
                and forget about all the hassle and bustle of your other life
                that’s million miles away. This small sandy tropical beach
                boasts some of Sri Lanka’s best and most stunning sunsets and
                sunrises. Here the water is deliciously clear and around the
                reefs and rocks at either end. It’s excellent for the
                snorkeling. If you do need to move then there are some pleasant
                walks. One heads up a steep series of steps from the main road
                to the small Kandavahari temple, while head the land is a good
                spot to vie Weligama Bay. The one activity that almost every
                visitors to Mirissa takes part in is a whale-watching boat trip
                {/* <br/><br/>
              <b>Top attractions in Ampara : </b> */}
              </h3>

              <h3 className="card-title">
                <b>Whale-Watching</b>
                <h4>
                  Mirissa is known as one of the world’s best locations (amongst
                  the top three possibly) for watching Blue Whales and Sperm
                  Whales. In warm Indian Ocean you can see Blue whales, Bryde´s
                  whales, Sperm whales, Fin whales, sometimes Killer whales, and
                  Common dolphins, Bottlenose dolphins, Spinner dolphins,
                  Risso’s dolphins and Striped dolphins. Sometimes you can see
                  turtles and various fish species, for example Bluefin tuna and
                  flying fish. Whales are always about 10 minutes under water
                  and then they occur for short time on the surface of the
                  ocean. At this moment you will appreciate the speed of boat.
                  You will also spend less time on the way to the whales and
                  back to the harbour with the speed boat. The whale watching
                  season starts in November and ends in April. High season is
                  from December to March. At this time is water of the coast of
                  Sri Lanka warm and calm.
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

export default Mirissa;
