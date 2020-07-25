import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/destinations/details/ampara.jpg";

function Kurunagala() {
  return (
    <div className="container-md" id="mtn">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Kurunagala</b>
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
              The capital of the north western province, has a historical name – Hasthishilapura (Elephant rock city). It was the royal capital city of Sri Lanka and is full of legend, romance and history. Tooth relic temple of Kurunagala was once very famous, but now only the remains of the temple are there. Kurunagala is a naturally beautiful town with a lake in middle of the city and colossal Elephant rock in the background. There are seven famous rocks here.
              {/* <br/><br/>
              <b>Top attractions in Ampara : </b> */}
            </h3>

            <h3 className="card-title">
              <b>Ethagala (Elephant rock)</b>
              <h4>

              </h4>
            </h3>

            <h3 className="card-title">
              <b>Tortoise rock </b>
              <h4>

              </h4>
            </h3>

            <h3 className="card-title">
              <b>Eel rock </b>
              <h4>

              </h4>
            </h3>

            <h3 className="card-title">
              <b>Goat rock</b>
              <h4>

              </h4>
            </h3>

            <h3 className="card-title">
              <b>Lady bird rock </b>
              <h4>

              </h4>
            </h3>
            <h3 className="card-title">
              <b>Monkey rock </b>
              <h4>

              </h4>
            </h3>

            <h3 className="card-title">
              <b>Kurunagala lake</b>
              <h4>
                A large man made water reservoir constructed by ancient kings. The lake is located in the outskirts of the central business district near to Kurunagala - Dambulla road.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Clock tower</b>
              <h4>
                The Kurunagala clock tower was built in 1992 as a tribute to the officers, who went from the Wayamba province and sacrificed their lives in the First World War. The tower memorial plaque has the following inscribed. “This clock tower was erected in memory of those who went from the North western province at the call of duty and gave their lives for the empire in the world war in 1914-1918” However soon after 1945,the tower was also dedicated to the valiant officers who sacrificed their lives in the second world war.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Ridi Viharaya (temple)</b>
              <h4>
                18Km off from Kurunagala, is known for its rock cave hermitages and an image house with Kandyan paintings. Those who are interested in architecture can witness Buddha idols, a door frame elegantly carved and inlaid with ivory and a curious altar bedecked by Dutch tiles with Biblical figures. The artificial lake at the foot of the hills would also interest you.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Arankele</b>
              <h4>
                It is an ancient sylvan forest monastery in a beautiful serene setting. A large complex meditation hall , stone pathways, alms halls and rock caves lie in the forest which are used by the meditating monks of the monastery.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Yakdessagala </b>
              <h4>
                This rock is associated with the ancient legend almost 2500 years ago when Kuveni, the native queen of Vijaya, the first king of Sri Lanka, shouted her curse and leapt to death when deserted by him for an Indian princess.
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

export default Kurunagala;