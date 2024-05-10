import React from 'react';
import p1 from '../assets/p12.jpg';
import p2 from '../assets/p13.jpeg';

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
        <img className="about-photo-left" src={p1} alt="#" />
        <img className="about-photo-right" src={p2} alt="#" />
      </div>
      </div>
    </div>
  )
}

export default About