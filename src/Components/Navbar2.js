import React from 'react'

const Navbar2 = () => {
  return (
            <nav className=' hidden lg:block  lg:static lg:bg-transparent lg:max-w-full'>
              <ul className='block lg:flex'>
                <li className='group'>
                  <a href="#/" className='text-base hover:text-teal-200 text-dark py-2 mx-8 flex group-hover:text-teal-400 no-underline'>Beranda</a>
                </li>
                <li className='group'>
                  <a href="#/" className='text-base text-dark py-2 mx-8 flex group-active:text-teal-400 no-underline'>Tentang saya</a>
                </li>
                <li className='group'>
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
  )
}

export default Navbar2
