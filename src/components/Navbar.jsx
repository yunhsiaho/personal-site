import React, {useState} from 'react';
// import Logo from "../assets/";
import {HiOutlineBars3} from "react-icons/hi2";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    "about",
    "resume",
    "portfolio",
    "profile"
  ]
  return (
    <nav>
      <div className="topbar"></div>  
      <div className="navbar-container">
        <a href="#about" className="bungee-hairline-regular">about</a>
        <a href="" className="bungee-hairline-regular">resume</a>
        <a href="" className="bungee-regular">
          <p className="bungee-regular">YUN-HSIA</p>
          <p className="bungee-regular">HO</p>
          </a>
        <a href="" className="bungee-hairline-regular">portfolio</a>
        <a href="" className="bungee-hairline-regular">profile</a>
      </div>
    </nav>
  )
}

export default Navbar