import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./components/home/Home";
import Destinations from "./components/destinations/Destinations";
import Tours from "./components/tours/Tours.jsx";
import Ampara from "./components/destinations/details/Ampara.jsx";

function App() {
  return (
    <Router>
      <div>
        <BrowserRouter>
          <Header />
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/destinations">
            <Destinations />
          </Route>
          <Route path="/destinations/ampara">
            <Ampara />
          </Route>
          <Route path="/tours">
            <Tours />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Footer />
        </BrowserRouter>
        <Switch></Switch>
      </div>
    </Router>
  );
}

export default App;
