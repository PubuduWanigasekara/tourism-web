import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/destinations/details/ampara.jpg";

function Tissamaharama() {
  return (
    <div className="container-md">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Tissamaharama</b>
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
              Tissamaharama is a significant place not to be missed one, it is the most pleasant towns in the southern coast and named after the man-made reservoir Tissa Wewa. It used to be the capital of the Sinhalese Kingdom of Ruhuna as early as the 3rd century B.C. The large artificial Tissa Wewa (lake), which was a part of a sophisticated irrigation system, also dates from that time.
              Only few buildings from that period can still be seen today. The town in turn is bounded by a beautiful expanse of paddy fields. In the midst of paddy fields stands most impressive of Tissa’s dagobas (stupas). It is home to many remarkable bird life and provides the scenic backdrop to the town. Today, the town mainly serves as a starting point for visits to Yala National Park and Kataragama.
              {/* <br/><br/>
              <b>Top attractions in Ampara : </b> */}
            </h3>

            <h3 className="card-title">
              <b>The Tissamaharama Dagobas</b>
              <h4>
                The Tissamaharam Raja MahaVihara is one of the largest dagobas (Stupa) with a height of 158 feet and 550 feet in circumference in Sri Lanka.  It is found near the town center. A stupa is a Buddhist dome-shaped religious monument.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Tissa Wewa (lake)</b>
              <h4>
                Tissa Wewa is a huge man-made lake about 1.5km from the town centre. It is built by King Kavantissa in the 2nd century BC of the ancient southern kingdom of Ruhuna. The shore nearest the town is often busy with flock of aquatic birds including bitterns, heron’s egrets skimming across the waters.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Yatala Wehera (temple)</b>
              <h4>
                Lotus ponds surround this site, which has a wealth of elephant details in the carvings. There’s a small museum next to the temple. Amidst the dusty artefacts dug up from around the site, look for an ornate, ancient bidet sitting outside. It was built 2300 years ago.
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

export default Tissamaharama;