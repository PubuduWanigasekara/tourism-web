import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/destinations/details/ampara.jpg";

function Hikkaduwa() {
  return (
    <div className="container-md" id="mtn">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Hikkaduwa</b>
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
              Sri Lanka’s only marine sanctuary is located here and it is an ideal place for nature lovers with its abundant corals and tropical fishes. Hikkaduwa has something to offer to everyone –coral for snorkelers, waves for surfers and white pristine beaches for those who want to relax and enjoy sun and sand.
              {/* <br/><br/>
              <b>Top attractions in Ampara : </b> */}
            </h3>

            <h3 className="card-title">
              <b>Hikkaduwa National Park</b>
              <h4>
                Hikkaduwa’s over exploited marine national park stretches along the northern end of the beach. The coral Garden here is considered to be the best out of all such coral gardens found in Asia. There is a reef of lime stones running parallel to the coast. The corals are in between this line of lime stones and the coast the sea up to about 200 meters from the coast is very shallow. The reef of lime stones protects the corals from high tide. The coral type found mostly here is the type locally called “Gampara”. These corals are found in various forms, shapes and colors. They are a very fascinating sight especially, when there is bright sunlight which gives a very cleaver view of the corals, you see some corals in the shape of a cabbage leaf, some are like a lady’s fan, since there is no silt, and corals can grow in their natural from and color.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Surfing </b>
              <h4>
                The conditions for surfing are at their best from November to April. Over the years Hikkaduwa has spread south, absorbing several hamlets. The best spot for surfing in Hikkaduwa is a short distance from the marine sanctuary off the beach of Wevala and Narigama. Here there are no very large waves but instead accommodating breaks that seldom become frightening. That is why beginners, who need to feel safe in order to progress with confidence, get on so well at Hikkaduwa.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Seenigama Temple </b>
              <h4>
                This temple is devoted for God Devol and is around 300 years old. But some believe that this place is more than 1000 years old, but there is no any proven evidence. Even though, many visitors go only to the devalaya in land, the main devalaya is located in sea close by island and can be reached only by boat.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Gemstone Mines</b>
              <h4>
                Sri Lanka has gained popularity for many things and amongst its most sought after is its precious gem stones. It has gained universal acknowledgement for a doming the blue sapphire engagement ring of late princess Diana and princess Kate Middleton, and to the big blue sapphire that was worm by Kate Winslet in the box office movie “Titanic”. For the best moon stones one must take a visit down to Meetiyagoda gemstone mine.
                This is an ideal place of visit for those interested in the mining for it is a place of very high concentration of these stones. Also you can visit Gangarama temple that has lots of popular educational paintings and Hikkaduwa lake home monitor lizards and a lot of birdlife.
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

export default Hikkaduwa;