import React from 'react'

const Hero = () => {
  return (
    <div className='Hero pt-36'>
          <div className='flex flex-wrap'>
            <div className='w-full self-center px-4'>
              <h1 className='text-base font-semibold text-teal-500'>Halo Semua 🖐️ . Saya 
              <span className='block font-bold text-dark text-4xl  mt-1'>Dede <span className='text-teal-600'>sya</span>rifudin</span> 
               </h1>
              <h2 className='font-medium text-slate-500 text-lg mb-10'> Programmer & <span className='text-dark'> Pelajar</span> </h2>
              <p className='font-medium text-slate-400 text-lg mb-10 leading-relaxed'>Teknik Komputer dan jaringan adalah jurusan yang menyenangkan bukan.<span className='text-green-500'> bukan!</span></p>

              <p href='#' className='inline cursor-pointer text-base font-semibold text-white bg-teal-500 py-3 px-8 rounded-full hover:shadow-lg hover:bg-teal-400 hover:opacity-60 transition duration-300 ease-in-out'> Hubungi Saya</p>
              
            </div>
          </div>


      
    </div>
  )
}

export default Hero
