import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ImageBar from "./components/image-bar/ImageBar";
import About from "./components/about/About";
import Destinations from "./components/destinations/Destinations";
import Tours from "./components/tours/Tours";

function App() {
  return (
    <div>
        <Header/>
        <ImageBar/>
        <br/>
        <About/>
        <br/>
        <Destinations/>
        <br/>
        <Tours/>
        <br/>
        <Footer/>
    </div>
  );
}

export default App;
