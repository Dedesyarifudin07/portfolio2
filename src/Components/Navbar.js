import React, { useState } from 'react';


const Navbar = () => {
  let Links =[
    {
      name :'Home',
      Link : '/'
    },
    {
      name :'About',
      Link : '/'
     
    },
    {
      name :'Contact',
      Link : '/'
     
    },
    {
      name :'Product',
      Link : '/'
    },
    {
      name :'Blog',
      Link : '/'
    }
  ];

  let [active ,setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  }

  return (
    <div className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10 sticky border-lime-100'>
      <div className='container'>
        <div className='flex items-center  justify-between relative'>
          <div className='px-4'>
            <a href="#home" className='font-bold text-lg text-teal-600 block py-6 no-underline'>Dede syarifudin</a>
            
          </div>
          <div onClick={(showMenu)} className='flex items-center px-4 pointer md:hidden absolute right-0'>
  
            <ion-icon name={active ? "close":"menu"} size='large'></ion-icon>
            
          </div>
          
         
           
           <ul className={active ? 'w-1/2 md:flex md:items-center md:relative md:top-0 md:bg-transparent absolute top-20 left-0 bg-transparant  bg-teal-400  ':"-top-30"}>
            {
              Links.map(Link => {
                 return(
                  <li className='md:mr-8  my-10'><a href={Link.Link} className="no-underline ">{Link.name}</a></li>
                 ) 
              })
            }
            </ul>
            
          
           
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
