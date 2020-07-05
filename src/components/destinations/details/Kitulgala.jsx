import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/destinations/details/ampara.jpg";

function Kitulgala() {
  return (
    <div className="container-md" id="mtn">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Kitulgala</b>
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
              Kitulgala is surrounded by woody hills making way to the swift water of River Kelani. Kitulgala is a village of lush vegetation and being blessed with two monsoons each year records the highest rainfall in Sri Lanka. However January to March is the dry period that makes Kitulgala Sri Lanka’s foremost tourist attraction of those who venture in to white water rafting. In addition to the white water rafting Kitulgala affords the opportunity to engage in nature adventure, jungle trekking, outdoor camping, mountain biking and Bird watching.
              {/* <br/><br/>
              <b>Top attractions in Ampara : </b> */}
            </h3>

            <h3 className="card-title">
              <b>Rafting</b>
              <h4>
                The stretch of Kelani River 5 Km upstream from the village of Kitulgala provides rapids for white water rafting. The lower section is suited for the beginners of white water rafting. In between rapids are few calm stretches of 6.5Km Kitulgala run that takes about 90 minutes to complete. Each rapid brings off its own distinctive character. Their names – Head chopper, Virgin’s Breast, Butter crunch Killer fall and the Rib cage could perhaps carry indications as what to expect.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Bird watching</b>
              <h4>
                Many birds stay at Kitulgala just across the Kelani River is a primeval forest with lush tropical flora, home to about 54 rare species of birds. Though in a lesser density, most of the rain forest bird species that are found at the Sinharaja rain forest can be sighted at Kitulgala.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Movie Location </b>
              <h4>
                Kitulgala has been famous for being the location were the award winning classic movie ‘Bridge on the River Kwai’ directed by David Lean was filmed. The picturesque location of the movie by the river is accessible to all visitors.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Excursions - Kitulgala </b>
              <h4>
                Belilena caves, 8Kmfrom Kitulgala revealed the remains (ten skeletons) of pre-historic “Balangoda Man” (Homosapiens). Sri Lanka oldest inhabitant deduced to have lived there 32000 years ago.
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

export default Kitulgala;