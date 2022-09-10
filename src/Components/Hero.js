import React from 'react'
import Jokowi from '../img/jokowi.png'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='Hero pt-36 container'>
          <div className='flex flex-wrap '>
            <div className='w-full self-center px-4 lg:w-1/2 '>
              <h1 className='text-base font-semibold text-teal-500 lg:text-2xl md:text-xl '>Halo Semua 🖐️ . Saya 
              <span className='block font-bold text-dark text-4xl  mt-1 lg:text-5xl' >Dede <span className=' text-teal-400 '>sya</span>rifudin</span> 
               </h1>
              <h2 className='font-medium text-slate-400 text-lg mb-10 lg:text-2xl ' > <Typed strings={['Programmer ','networking']} typeSpeed={120} backSpeed={130} loop/>  <span className='text-dark'> & Pelajar</span> </h2>
              <p className='font-medium text-slate-400 text-lg mb-10 leading-relaxed'>Teknik Komputer dan jaringan adalah jurusan yang menyenangkan bukan.<span className='text-green-500'> bukan!</span></p>

              <p href='#' className='inline cursor-pointer text-base font-semibold text-white bg-teal-500 py-3 px-8 rounded-full hover:shadow-lg hover:bg-teal-400 hover:opacity-60 transition duration-300 ease-in-out'> Hubungi Saya 💓</p>
              
            </div>
            <div className='w-full self-end px-4 lg:w-1/2'>
              <div className='relative mt-10 lg:mt-0 lg:right-0'>
                <img src={Jokowi} alt="" width="350" className='max-w-full mx-auto'/>
                <span className=' absolute  -bottom-[120px] -z-10 left-1/2 -translate-x-1/2 md:scale-125'>
                  <svg width='400' height='400' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#5EEAD4" d="M54.5,-61.5C70.7,-51.4,84,-34.3,86.8,-15.7C89.6,2.8,81.9,22.8,68,32.2C54.2,41.6,34.2,40.3,18.1,43.4C2,46.6,-10.2,54.1,-23.4,53.9C-36.6,53.6,-50.7,45.5,-56.3,33.5C-62,21.6,-59.2,5.8,-57.5,-11.2C-55.7,-28.2,-54.9,-46.3,-45.5,-57.7C-36.1,-69.1,-18.1,-73.6,0.6,-74.2C19.2,-74.9,38.3,-71.7,54.5,-61.5Z" transform="translate(100 100) scale(1.1) " />
                  </svg>
                  </span>
              </div>
            </div>
          </div>


      
    </div>
  )
}

export default Hero
