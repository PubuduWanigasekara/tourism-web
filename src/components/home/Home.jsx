import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ImageBar3 from "../../images/ImageBar3.jpg";
import ImageBar4 from "../../images/ImageBar4.jpg";
import ImageBar5 from "../../images/ImageBar5.jpg";
import DestinationImage from "../../images/home/Destination.jpg";
import AboutImage from "../../images/home/About.jpg";

function Home() {
  const cardImage = {
    width: "97%",
    height: 250,
  };
  return (
    <>
      <div className="homescreen" style={{ marginTop: "-20px" }}>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            {/* <li data-target="#myCarousel" data-slide-to={0} className="active" />
                        <li data-target="#myCarousel" data-slide-to={1} />
                        <li data-target="#myCarousel" data-slide-to={2} /> */}
          </ol>
          {/* Wrapper for slides */}
          <div className="carousel-inner">
            <div className="item active">
              <img
                src={ImageBar3}
                alt="Los Angeles"
                style={{ width: "100%" }}
              />
              {/*<div className="carousel-caption">*/}
              {/*    <h3>Los Angeles</h3>*/}
              {/*    <p>LA is always so much fun!</p>*/}
              {/*</div>*/}
            </div>
            <div className="item">
              <img src={ImageBar4} alt="Chicago" style={{ width: "100%" }} />
              {/*<div className="carousel-caption">*/}
              {/*    <h3>Chicago</h3>*/}
              {/*    <p>Thank you, Chicago!</p>*/}
              {/*</div>*/}
            </div>
            <div className="item">
              <img src={ImageBar5} alt="New York" style={{ width: "100%" }} />
              {/*<div className="carousel-caption">*/}
              {/*    <h3>New York</h3>*/}
              {/*    <p>We love the Big Apple!</p>*/}
              {/*</div>*/}
            </div>
          </div>
          {/* Left and right controls */}
          <a
            className="left carousel-control"
            href="#myCarousel"
            data-slide="prev"
          >
            {/* <span className="glyphicon glyphicon-chevron-left" /> */}
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            {/* <span className="glyphicon glyphicon-chevron-right" /> */}
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      {/* About Us */}
      <div className="card mb-3 " style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-4 mobile">
            <img src={AboutImage} style={cardImage} className="image" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">
                <b>About Us</b>
              </h3>
              <p className="card-text">
                <b>
                  Around the world people started to travel from one country to
                  another to spend their leisure time. This excursion spread
                  only among the richest in the world. But later on with the
                  expanding technology, the doors to travel has been opened to
                  everyone. Our vision is to fulfill this dream by providing
                  travel assistance which specifically caters every unique
                  needs, value for money and choosing destination as you wish.
                  Feel the life, come and travel with us.
                </b>
              </p>
              <Link to="/about">
                <p className="card-text">
                  <button className="btn btn-primary">Find More About</button>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Destinations */}
      <div
        className="card mb-3"
        style={{ maxWidth: "100%", marginTop: "-9px" }}
      >
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">
                <b>Destinations</b>
              </h3>
              <p className="card-text">
                <b>
                  Travel through the island with one of ths leading travel
                  agencies in Sri Lanka as your trusted tour partner. Make your
                  choices with the diversified greenaries, sunny beaches and
                  more.. The choice is yours.
                </b>
              </p>
              <Link to="/destinations">
                <p className="card-text">
                  <small className="text-muted">
                    <button className="btn btn-primary">
                      Find More Destinations
                    </button>
                  </small>
                </p>
              </Link>
            </div>
          </div>

          <div className="col-md-4 mobile">
            <img src={DestinationImage} style={cardImage} className="image" />
          </div>
        </div>
      </div>

      {/* <Footer /> */}
      {/* <Header /> */}
    </>
  );
}

export default Home;
