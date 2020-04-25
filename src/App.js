import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ImageBar from "./components/image-bar/ImageBar";
function App() {
  return (
    <div>
        <Header/>
        <ImageBar/>
        <br/>
        <Footer/>
    </div>
  );
}

export default App;
