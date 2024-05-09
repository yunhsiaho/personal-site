import React from 'react';
import imgEmail from '../assets/email.png';
import imgLinkedin from '../assets/linkedin.png';
import imgGithub from '../assets/github.png';
import imgCodewars from '../assets/codewars.png';


export const Profile = () => {
  return (
    <div className="profile-container container">
            <h1 className='bungee-regular'>profile</h1>
            <div className="profile arvo-regular-italic">
              <p className="connect uppercase">
              let 's connect
              </p>
              <div className="links">
                <div className="link" id='mail'>
                  <img src={imgEmail} alt="#" />
                  <p className='uppercase'>mail</p>
                </div>
                <div className="link" id='linkedin'>
                  <img src={imgLinkedin} alt="#" />
                  <p className='uppercase'>linkedin</p>
                </div>
                <div className="link" id='github'>
                  <img src={imgGithub} alt="#" />
                  <p className='uppercase'>github</p>
                </div>
                <div className="link" id='codewars'>
                  <img src={imgCodewars} alt="#" />
                  <p className='uppercase'>codewars</p>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Profile