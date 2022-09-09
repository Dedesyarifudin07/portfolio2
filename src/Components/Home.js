import React from 'react'
import About from './About.js'
import Clients from './Clients.js'
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
            <Clients/>
    </div>
  )
}

export default Home
