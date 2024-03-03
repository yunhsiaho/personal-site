import React from 'react';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Profile from './Profile';
import Navbar from './Navbar';
import Footer from './Footer'


const Home = () => {
  return (
    <div className='home-container'>
      <Navbar/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Profile/>
      <Footer/>
    </div>
  )
}

export default Home