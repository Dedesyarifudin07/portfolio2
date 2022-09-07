import React, { useState } from 'react';
import Navbar2 from './Navbar2';



const Navbar = () => {

  // untuk mobile menu
  let [active,setActive] = useState(false);
  let showActive = () => {
    setActive(!active);
  }
  //change nav collor when scrooling
  let [color,setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 20){
        setColor(true)
    }else{
      setColor(false)
    }
  }

  window.addEventListener('scroll',changeColor);



return(
    <header className={color ? 'bg-transparent absolute top-0 left-0 w-full flex items-center z-10 navbar-fixed' :'bg-transparent absolute top-0 left-0 w-full flex items-center z-10 '}>
      <div className='container'>
        <div className='flex items-center justify-between relative'>
          <div className='px-4'>
            <a href="#" className='font-bold text-lg text-primary no-underline block py-6'>Dedesyarifudin</a>
          </div> 

          <div  onClick={() => showActive()} className='flex items-center px-4 absolute right-0 lg:hidden'>
            <ion-icon name={active ? 'close':'menu'} size="large"></ion-icon>
          </div>  

           <div className={active ? '' :'hidden'}>
            <nav className='absolute py-2 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block  lg:static lg:bg-transparent lg:max-w-full'>
              <ul className='block '>
                <li className='group'>
                  <a href="#/" className='text-base hover:text-teal-200 text-dark py-2 mx-8 flex group-hover:text-teal-400 no-underline'>Beranda</a>
                </li>
                <li className='group'>
                  <a href="#/" className='text-base text-dark py-2 mx-8 flex group-active:text-teal-400 no-underline'>Tentang saya</a>
                </li>
                <li className='group '>
                  <a href="#/" className='text-base text-dark py-2 mx-8 flex group-active:text-teal-400 no-underline'>Portfolio</a>
                </li>
                <li className='group'>
                  <a href="#/" className='text-base text-dark py-2 mx-8 flex group-active:text-teal-400 no-underline'>Blog</a>
                </li>
                <li className='group'>
                  <a href="#/" className='text-base text-dark py-2 mx-8 flex group-active:text-teal-400 no-underline'>Contact</a>
                </li>
              </ul>
            </nav> 
           </div> 
          <Navbar2/>
        </div>
      </div>
    </header>
  )
}

export default Navbar
