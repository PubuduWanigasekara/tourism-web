import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

import Tours from "./components/tours/Tours.jsx";
import Ampara from "./components/destinations/details/Ampara.jsx";
import Anuradhapura from "./components/destinations/details/Anuradhapura.jsx";
import Bandarawela from "./components/destinations/details/Bandarawela.jsx";
import Batticaloa from "./components/destinations/details/Batticaloa.jsx";
import Bentota from "./components/destinations/details/Bentota.jsx";
import Beruwala from "./components/destinations/details/Beruwala.jsx";
import Colombo from "./components/destinations/details/Colombo.jsx";
import Galle from "./components/destinations/details/Galle.jsx";
import Haputale from "./components/destinations/details/Haputale.jsx";
import Hikkaduwa from "./components/destinations/details/Hikkaduwa.jsx";
import Kandy from "./components/destinations/details/Kandy.jsx";
import Kitulgala from "./components/destinations/details/Kitulgala.jsx";
import Kurunagala from "./components/destinations/details/Kurunagala.jsx";
import MannarIsland from "./components/destinations/details/MannarIsland.jsx";
import Matale from "./components/destinations/details/Matale.jsx";
import Mihinthale from "./components/destinations/details/Mihinthale.jsx";
import Mirissa from "./components/destinations/details/Mirissa.jsx";
import Monaragala from "./components/destinations/details/Monaragala.jsx";
import Negambo from "./components/destinations/details/Negambo.jsx";
import NuwaraEliya from "./components/destinations/details/NuwaraEliya.jsx";
import Polonnaruwa from "./components/destinations/details/Polonnaruwa.jsx";
import Tangalle from "./components/destinations/details/Tangalle.jsx";
import TheSacredMountain from "./components/destinations/details/TheSacredMountain.jsx";
import Tissamaharama from "./components/destinations/details/Tissamaharama.jsx";
import Trincomalee from "./components/destinations/details/Trincomalee.jsx";
import VavuniyaAndJaffna from "./components/destinations/details/VavuniyaAndJaffna.jsx";

import Activities from "./components/activities/Activities.jsx";

import Destinations from "./components/destinations/Destinations";

import ToursCategories from "./components/tours/details/ToursCategories";
import ShortTripOne from "./components/tours/details/more-details/ShortTripOne";

function App() {
  return (
    <Router>
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/activities">
              <Activities />
            </Route>
            <Route path="/destinations">
              <Destinations />
            </Route>
            <Route path="/destinations-ampara">
              <Ampara />
            </Route>
            <Route path="/destinations-anuradhapura">
              <Anuradhapura />
            </Route>
            <Route path="/destinations-anuradhapura">
              <Anuradhapura />
            </Route>
            <Route path="/destinations-bandarawela">
              <Bandarawela />
            </Route>
            <Route path="/destinations-batticaloa">
              <Batticaloa />
            </Route>
            <Route path="/destinations-bentota">
              <Bentota />
            </Route>
            <Route path="/destinations-beruwala">
              <Beruwala />
            </Route>
            <Route path="/destinations-colombo">
              <Colombo />
            </Route>
            <Route path="/destinations-galle">
              <Galle />
            </Route>
            <Route path="/destinations-haputale">
              <Haputale />
            </Route>
            <Route path="/destinations-hikkaduwa">
              <Hikkaduwa />
            </Route>
            <Route path="/destinations-kandy">
              <Kandy />
            </Route>
            <Route path="/destinations-kitulgala">
              <Kitulgala />
            </Route>
            <Route path="/destinations-kurunagala">
              <Kurunagala />
            </Route>
            <Route path="/destinations-mannarisland">
              <MannarIsland />
            </Route>
            <Route path="/destinations-matale">
              <Matale />
            </Route>
            <Route path="/destinations-mihinthale">
              <Mihinthale />
            </Route>
            <Route path="/destinations-mirissa">
              <Mirissa />
            </Route>
            <Route path="/destinations-monaragala">
              <Monaragala />
            </Route>
            <Route path="/destinations-negambo">
              <Negambo />
            </Route>
            <Route path="/destinations-nuwaraeliya">
              <NuwaraEliya />
            </Route>
            <Route path="/destinations-polonnaruwa">
              <Polonnaruwa />
            </Route>
            <Route path="/destinations-tangalle">
              <Tangalle />
            </Route>
            <Route path="/destinations-thesacredmountain">
              <TheSacredMountain />
            </Route>
            <Route path="/destinations-tissamaharama">
              <Tissamaharama />
            </Route>
            <Route path="/destinations-trincomalee">
              <Trincomalee />
            </Route>
            <Route path="/destinations-vavuniyaandjaffna">
              <VavuniyaAndJaffna />
            </Route>
            <Route path="/tours">
              <Tours />
            </Route>
            <Route path="/tours-categories-beachbreak">
              <ToursCategories />
            </Route>
            <Route path="/tours-categories-beachbreak-shorttrip-01">
              <ShortTripOne />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </Router>
  );
}

export default App;
