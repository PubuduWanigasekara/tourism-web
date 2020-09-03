import React,{useState , useEffect} from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {

  let [mobileMenu , SetMenu] = useState(false);


  useEffect(()=>{

    window.onresize =()=>{
      const width = window.innerWidth;

      if(width < 995){
       SetMenu(mobileMenu = true);
      }
      else{
        SetMenu(mobileMenu = false);
      }
    }

  })


  return (
    <>
      <div id="nav_container">
        <div id="logo_text">
    logo goes here
        </div>

        <div id="menu">
         
           <li>HOME</li>
           <li>DESTINATIONS</li>
           <li>ACTIVITIES</li>
           <li>TOUR</li>
           <li>ABOUT</li>
           <li>CONTACT</li>
           <li>M</li>
         
        </div>
      </div>
    </>
  );
}

export default Header;
