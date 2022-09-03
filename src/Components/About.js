import React from 'react'

const About = () => {
  return (
    <div className='About pt-36 pb-32'>
      <div className='container'> 
        <div className='flex flex-wrap' >
          <div className='w-full px-4 mb-10  lg:w-1/2'>
            <h4 className='mb-3 font-bold uppercase text-primary text-lg'>tentang saya</h4>
            <h2 className='font-bold text-dark text-3xl mb-5 max-w-md'>Yuk belajar web programming di wpu</h2>
            <p className='font-medium  text-base text-slate-500 max-w-xl lg:text-lg'> lorem ipsum dolor sitamet lorem ipsum dolor sit amet lorem dolor sit amet lorem ipsum dolor sit amet
              lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem solo rerwww dolor sit amet lorem 
              ipsum dolor sit amet
            </p>
          </div>
          <div className='w-full px-4 lg:w-1/2 '>
            <h3 className='font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10'>Mari Berteman</h3>
            <p className='font-medium text-base text-slate-500 mb-6 lg:text-lg' > lorem ipsum dolor sitamet lorem ipsum dolor sit amet lorem dolor sit amet lorem ipsum dolor sit amet
              lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem solo rerwww dolor sit amet lorem ipsum 
              dolor sit amet lorem dolor sit amet
            </p>
            <div className='flex items-center '>
              {/* Facebook */}
             <a href="https://www.facebook.com/cristianoronaldo" target='_blank' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white '> 
             <svg role="img" 
             viewBox="0 0 24 24" 
             className='fill-current'
             width='20' 
             xmlns="http://www.w3.org/2000/svg"><
              title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
              {/* akhir Facebook */}

              {/* Youtube */}
              <a href="https://www.youtube.com/sandhikagalih" className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-400 hover:border-primary hover:bg-primary hover:text-white'>
              <svg role="img"
               viewBox="0 0 24 24" 
               className='fill-current'
                width='20'
                 xmlns="http://www.w3.org/2000/svg">
                  <title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              
              {/* AKhir Youtube */}
                        
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
