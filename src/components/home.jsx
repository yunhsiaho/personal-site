import React from 'react';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Profile from './Profile';
import Navbar from './Navbar';
import Footer from './Footer'
import backGroundTop from "../assets/background-top.png";
import backGroundbottom from "../assets/background-bottom.png";



const Home = () => {
  return (
    <div className='home-container'>
      <img src={backGroundTop} alt="#" id='top-img' />    
      <Navbar/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Profile/>
      <img src={backGroundbottom} alt="#" id='bottom-img' />    
      <Footer/>
    </div>
  )
}

export default Home