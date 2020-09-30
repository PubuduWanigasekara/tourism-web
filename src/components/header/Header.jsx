import React,{useState , useEffect} from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from '../../images/logo/MainLogo.png'
import {ReactComponent as Menu} from '../../images/menu.svg'

export default function Header() {

  let [mobileMenu , SetMenu] = useState(false);
  let [showm , Setshow] = useState(false);

  const  show = ()=>{
    Setshow(showm = !showm);
    
  }

  useEffect(()=>{

    const width = window.innerWidth;

    if(window.innerWidth < 995){
      SetMenu(mobileMenu = true);
     }
     else{
       SetMenu(mobileMenu = false);
     }

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
          <img src={Logo} alt="logo" style={{width:'150px'}}/>
        </div>

        <div id="menu">
         { !mobileMenu &&
         <>
           <li><Link className="NavItems" to="/home">Home</Link></li>
           <li><Link className="NavItems" to="/destinations">Destinations</Link></li>
           <li><Link className="NavItems" to="/tours">Tour</Link></li>
           <li><Link className="NavItems" to="/activities">Activities</Link></li>
           <li><Link className="NavItems" >About</Link></li>
           <li><Link className="NavItems" >Contact</Link></li>
           </>
         }

           {mobileMenu && <li>
             <div id="mob_button" onClick={show}>
             <Menu id="menu_icon"/>
             </div>
           
             </li>}
         
        </div>
      </div>

{ showm &&
      <div id="mob_menu">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/tours">Tour</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link >About</Link></li>
        <li><Link >Contact</Link></li>
      </div>}
    </>
  );
}


