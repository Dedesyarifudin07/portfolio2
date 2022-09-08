import React from 'react'

const NavbarLarge = () => {
  return (
    <nav className='absolute py-2 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block  lg:static lg:bg-transparent lg:max-w-full'>
        <ul className='block '>
        <li className='group'>
            <a href="#/" className='text-base hover:text-teal-200 text-dark py-2 mx-8 flex group-hover:text-teal-400 no-underline'>Beranda</a>
        </li>
        <li className='group'>
            <a href="#/" className='text-base text-dark py-2 mx-8 flex group-hover:text-teal-400 no-underline'>Tentang saya</a>
        </li>
        <li className='group '>
            <a href="#/" className='text-base text-dark py-2 mx-8 flex group-hover:text-teal-400 no-underline'>Portfolio</a>
        </li>
        <li className='group'>
            <a href="#/" className='text-base text-dark py-2 mx-8 flex group-hover:text-teal-400 no-underline'>Blog</a>
        </li>
        <li className='group'>
            <a href="#/" className='text-base text-dark py-2 mx-8 flex group-hover:text-teal-400 no-underline'>Contact</a>
        </li>
        </ul>
    </nav> 
  )
}

export default NavbarLarge
