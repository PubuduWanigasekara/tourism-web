import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Destinations() {
  return (
    <div>
      <Header />
      <div className="container5">
        <div className="card w-150">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Button
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "500px" }}>
          <img
            className="card-img-top"
            src="../../images/IMG_20180317_154944.jpg"
            alt="Card image"
          />
          <div className="card-img-overlay">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
            <a href="#" className="btn btn-primary">
              See Profile
            </a>
          </div>
        </div>

        <div className="row">
          <div className="card w-50">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Button
              </a>
            </div>
          </div>
          <div className="card w-25">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Button
              </a>
            </div>
          </div>

          <div className="card w-25">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Destinations;
