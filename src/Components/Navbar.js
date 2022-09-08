import React, { useState } from 'react';
import NavbarLarge from './NavbarLarge';
import NavbarMobile from './NavbarMobile';



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
              <NavbarLarge/>
           </div> 
          <NavbarMobile/>
        </div>
      </div>
    </header>
  )
}

export default Navbar
