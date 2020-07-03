import React from "react";
import { Link } from "react-router-dom";
import AmparaI from "../../../../images/tours/tours categories/details/ampara.jpg";

function ShortTripOne() {
  const containerStyle = {
    marginLeft: "0px",
    // marginRight: "0px",
  };

  return (
    <div className="container-md">
      <div className="card mb-3">
        <h5 className="card-title">
          <h1>
            <b>Mysterious Sri Lanka - City of Light: Nuwara Eliya - 3 days 2 nights</b>
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
              <b>Day 1- Transferring To Nuwara Eliya-Tea Factory </b>
              <h4>
                7.30 am our tour guide will pickup you and starts the journey to Nuwara Eliya. On the way, you will stop at Ramboda falls for sightseeing and taking pictures. This destination helps you to relax and learn more about Sri Lanka's nature. At around 11.00 am you’ll reach Nuwara eliya and during that half an hour will be taken to visit tea heritance factory where you also can have your lunch there at the tea factory restaurant. After the lunch you can visit inside the factory and explore the tea plantations and our guide will show and tell you everything about Ceylon tea and plantations.
                At around 3.00pm check into your hotel and take a cycle tour and wander along the street and discover this little England with various things to see: from colonial period such as horse race course, post office, golf club, city and relax at the lake Gregory. Then after you can check into your hotel and have a rest after the trip. Our tour guide will tell you some tips about tomorrow Horton plains trekking.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Day 2 - Horton Plains - Hakgala</b>
              <h4>
                Wake up early morning before sunrise and the hotel will serve you breakfast. Our guide will pick up you at 5.30 am and will drive you by 4*4 Jeep. During your journey you can see beautiful sunrise, misty rain forest stopping at the view points. You will get chance to capture nice photos and feel the fresh mountain air. After reaching at the car park at Horton plains now you have to go trekking around the plains and you can see the Baker's fall, World's end and many of flora and fauna there. During your trekking you will get a chance enjoy your breakfast.
                After your 3 hours journey of trekking you'll visit the Hakgala botanical garden which is the 2nd largest botanical garden in Sri Lanka. Here you'll see there are lot of varieties of flora like Black-introduce plant, Yellow-poison plant, Red-endemic plant, Green-Asian plants and also you will be able to understand the Sri Lanka's flower industry here from our guide…… After the visit at the botanical garden you’ll stop at cool peel restaurant for lunch near the picturesque “Seetha Amman temple”.
                On the way to your hotel you can stop at the up country vegetable stalls near the farm and see different vegetables and the plantations such as leeks, carrot, beat, potato etc… Here, you can learn the Sri Lankan vegetable farming and how important is this to people living in here and also you can visit “Seetha Amman” Hindu temple. It's said to mark the spot where Seetha was held captive by the demon king Rawana in Lanka epic, Ramayana, where she prayed daily for Rama to come and rescue her.
                After all we can say a good bye to this wonderful journey and return to Nuwara Eliya by jeep and end this day trip at your hotel at around 5.00pm. And if you like you can have a walk around Gregory Lake and don't forget your camera to photograph the sunset moment at there and enjoy the fresh air on this romantic lake side…...
                Overnight in Nuwara Eliya
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Day 03- Nuwara Eliya – Ella </b>
              <h4>
                On the last day of this mysterious city of light tour, our chauffeur will transfer you to Nanu-oya train station to travel to Ella. Train will leave at 9.30 am and we say good bye to each other here. End of service.
                This will be a slow travel train journey to Ella. On the way you are able to see huge areas of tea plantations, tea plucking ladies with their colorful saris. After all these at the station you can experience vendors hustle treats, including some amazing corn and chili fritters wrapped and sold by people there. And it will be somebody's small scale business at home. While munching one of these start enjoying your visit to Ella.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Summary</b>
              <h4>
                This journey is to specially discover the mysterious mountain peak of “Horton plains Nature reserve” which is known to be a world heritage. This place is also said to be the heaven of clouds and is enriched with rugged terrain and the vast variety of thousands of wild flowers and fauna. Also you can observe the extremely deep cliffs with tea plantation and gasp the pure wind along the two sides of the mountains, marvelous waterfalls, colonial architecture, rural vegetation and secret of Sri Lankan tea.
              </h4>
            </h3>

            <h3 className="card-title">
              <b>Highlights</b>
              <h4>
                <ui>
                  <li>
                    Rising before dawn for a view from stunning heights of worlds end
                  </li>
                  <li>
                    Enjoying the life of tea planters and getting chance to taste a cup of tea from the tea factory with Chocolate cake. Buying the tea as you want such as green tea, BOPF, BOP etc.
                  </li>
                  <li>Ratting and rolling with Tamil tea pickers on a slow train journey from Nanuoya to Ella.</li>
                  <li>Walking around Gregory Lake while relishing your crazy, intimacy love and feel it with sundown.</li>
                  <li>Understanding vegetation and farming of up country people.</li>
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
