import React from 'react'
import About from './About.js'
import Hero from './Hero.js'
import Navbar from './Navbar.js'
import Portfolio from './Portfolio.js'


const Home = () => {
  return (
    <div className='Home '>
           <Navbar/>
            <Hero/>
            <About/>
            <Portfolio/>
    </div>
  )
}

export default Home
