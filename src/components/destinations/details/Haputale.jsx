import React from "react";
import { Link } from "react-router-dom";
import AmparaI from "../../../images/destinations/details/ampara.jpg";

function Haputale() {
  return (
    <div className="container-md" id="mtn">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Haputale</b>
          </h1>
          <Link to="/destinations">
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
            <h3>
              One of the most spectacularly situated towns of Sri Lanka. When you stand on the mountain top, you are able to see Landscapes of North, South West and East. The South geo plane run towards distant sea and the north are hills over the hills of the highlands. The eastern plane is of large tea plantation areas that disappears into far sky with green valley of paddy fields and forest. The Climate is cool in this city. A train trip to or from Haputale is one of best experiences you can make in Sri Lanka.
              {/* <br/><br/>
              <b>Top attractions in Ampara : </b> */}
            </h3>

            <h3 className="card-title">
              <b>Adisham Bungalow</b>
              <h4>
                Adisham is now a religious house where tranquility lies like a blessing and the grandeur of sweeping mountain vistas takes your breath away. Adisham was originally the country seat of Sir Thomas Villiers. The sign at the main gate reads ‘Silence is Golden’, a golden saying hardly adhered by the million mutinies of the modern world devoid of collective responsibility yet clamoring for individual rights.
                The house was designed in the Tudor style, on the lines of Leeds Castle in Kent, with stout granite walls of locally quarried stone, long, narrow turret windows and chimneys. It looked in every detail an Elizabethan country mansion, the retreat in the tropics of a homesick Englishman, nostalgic for the scenes of his boyhood. The roof is covered with flat Burma teak shingles. The doors, windows, paneling, staircase and floors were all of Burma teak. . The bungalow was filled with valuable carpets, porcelain, furniture and glassware and even had an English chauffeur brought in for his Daimler.
                This old Colonial British planters’ bungalow was converted into a monastery by an industrious team of monks with tons of stonework. Today the monastery runs a domestic industry of food products such as jams, jellies from guavas and fruit cordials. The monastery bordering the Tangamalai bird sanctuary, the garden is home to blue magpies, paradise flycatchers, green barbets, brilliant orange plumaged mini-verts hornbills, golden orioles and a host of other bird life.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Lipton’s seat </b>
              <h4>
                Lipton’s seat is one of the attractive observation points of Sri Lankan Tourism. It is located on the top of the Poonagala hill near the Dambetenna tea factory in Poonagala, Sri Lanka. Lipton’s seat is the highest point of the mountain range, where the most famous Tea planter of Ceylon, Sir Thomas Lipton used to admire & enjoy the panoramic view of Haputale.
                To reach the place you have to climb about 7 km through rich tea plantations. Some parts of the roads are still not repaired since British built them. Therefore the original stone constructions are abided. From the Lipton’s view you can entertain and have a conspicuous view of 7 districts.
                If you are lucky enough to travel there on a clear day it will be breath taking in wanting to be entertained by the entire site, early morning will be fantastic as the mist sets in. The route is fully fledged with lots of gorgeous outlooks, amid with pure green lush green plantations. And it is recommended to arrive before 10.00am to the Lipton’s seat. On the way you will also meet St. Catherines seat and Lemasthota Waterfall.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Dambatenna Tea Factory </b>
              <h4>
                East of Haputale, a 10 km scenic road along the edge of the escarpment through beautiful rambling tea estates to leads us to legendary Dambatenna Tea Factory, built in 1890 by Sir Thomas Lipton, the tea magnate whose name is immortalized in Lipton’s Tea. This famous factory accommodates over 20,000 square feet in land and has employees of 1,600. At the entrance is a quote from John Ruskin: “Quality is no accident. It is the result of intelligent effort.” In spite of the on-going modernization, some of the machinery of the colonial era is still in operation in this ISO certified factory.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Greenfields Bio Plantations</b>
              <h4>
                A very pleasant walk leads us to Greenfields Bio Plantations, 3 km from Dambetenne, one of the few organic tea producers in the country.
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

export default Haputale;