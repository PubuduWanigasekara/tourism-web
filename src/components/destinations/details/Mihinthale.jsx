import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/destinations/details/ampara.jpg";

function Mihinthale() {
  return (
    <div className="container-md">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Mihinthale</b>
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
              The sacred mountain of Mihintale lies just 12 kilometers away from Anuradhapura and is the site where Buddhism was first introduced to Sri Lanka and is 300 meters high, it is now a sacred site for pilgrims with many stupa and other places of religious and historical significance.
              {/* <br/><br/>
              <b>Top attractions in Ampara : </b> */}
            </h3>

            <h3 className="card-title">
              <b>The Kantaka chetiya (temple) </b>
              <h4>
                Dating to around the 1st century BC, this small stupa is located a short distance away from the main pilgrimage areas of Mihintale. It is decorated with carvings of elephant, geese and dwarfs. The ruins of the dining area for monks is almost 19 meters long, and more than 7 meters wide which had an elaborate drainage system. The Great Staircase of 122 meters long with 1840 steps leads to several monasteries and stupas, and even tally to the main terraces at the top of Mihintale. The steps are cut from granite, and nearby are the remains of ancient hospital and medicinal booths which were used by monks.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>The Ambaththala Stupa</b>
              <h4>
                This small stupa is traditionally believed to mark the exact spot of the first meeting between Ven. Mahinda and king Devanampiyatissa. Along its side is a stone with a symbol of the Buddha’s footprint nearby are some caves containing statues representing various scenes of the famous incidents in Buddhist history.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>The Mahaseya Stupa</b>
              <h4>
                Right at the summit of Mihintale is a huge bubble shaped white stupa built in the first century CE. It is 44 meters high with a diameter of 41 meter’s, and relics of the Buddha are believed to be enshrined within it.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Aradhana Gala (rock)</b>
              <h4>
                There is a panoromic and breath-taking view of the surrounding area from the top of the rock which is known as the “Aradhana gala”.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>The “Black Water Pond”</b>
              <h4>
                One of the most beautiful and serene lakes in Sri Lanka is a short distance away from Mihintale. It is locally called “kaludiya pokuna” and the lake is named because the water appears to be black when seen from some angles.
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

export default Mihinthale;