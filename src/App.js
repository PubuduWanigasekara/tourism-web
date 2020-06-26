import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Destinations from "./components/destinations/Destinations";
import Tours from "./components/tours/Tours.jsx";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/destinations">
            <Destinations />
          </Route>
          <Route path="/tours">
            <Tours />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
