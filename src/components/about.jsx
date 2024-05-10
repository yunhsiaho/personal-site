import React from 'react';
import aboutLeft from '../assets/p2.jpg';
import aboutRight from '../assets/about-right.jpeg';

const About = () => {
  return (
    <div className="about-container container">
      <h1 className='bungee-regular'>about</h1>
      <div className="about-content">
      <p className='arvo-regular-italic'>
      Hi, I’m Yun-Hsia.
      <br/><br/>
      I’m a Taiwanese currently living in Belgium.
      <br/><br/>
      My enthusiasm for web development and UI/UX design equips me with the skills to communicate with the world.
      </p>      
      <div className="about-img">
        <img className="about-photo-left" src={aboutLeft} alt="#" />
        <img className="about-photo-right" src={aboutRight} alt="#" />
      </div>
      </div>
    </div>
  )
}

export default About