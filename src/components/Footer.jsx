import React from 'react';
import yhlogo from '../assets/yhlogo.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="content">
        <div className="content-container">
          {/* <div className="content-img"> */}
            <img src={yhlogo} alt="logo" />
          {/* </div> */}
          <div className="content-name-p bungee-regular">
            <p>yun-hsia</p>
            <p>ho</p>
          </div>
        </div>
      </div>
      <p className='bungee-hairline-regular footer-line'>Made with love by YUN-HSIA HO</p>
    </div>
  )
}

export default Footer