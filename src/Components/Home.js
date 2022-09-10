import React from 'react'
import About from './About.js'
import Blog from './Blog.js'
import Clients from './Clients.js'
import Contact from './Contact.js'
import Footer from './Footer.js'
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
            <Blog/>
            <Contact/>
            <Footer/>
    </div>
  )
}

export default Home
