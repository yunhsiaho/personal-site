import React from 'react'
import About from './About'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Contact/>

    </div>
  )
}

export default Home