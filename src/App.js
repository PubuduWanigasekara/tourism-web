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
            <Route path="/tours">
              <Tours />
            </Route>
            <Route path="/tours-categories">
              <ToursCategories />
            </Route>
            <Route path="/tours-categories-shorttrip-01">
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
