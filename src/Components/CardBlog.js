import React from 'react'
import { dataBlog } from './Data/dataBlog'

const CardBlog = () => {
  return (
    <div className='flex flex-wrap '>       
        {
            dataBlog.map((data) => {
                return(
                    <div className='w-full px-4 xl:w-1/3  lg:w-1/2 '>
                        <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
                            <img src={data.gambar}alt="" className='w-full'/>
                            <div className='py-8 px-6'>
                            <h3 className=' hover:text-primary'>
                                <a href="#" className='block mb-3 font-semibold text-3xl text-dark no-underline truncate'>{data.title}</a>
                            </h3>
                            <p className='font-medium text-base text-secondary mb-4'>{data.Deskripsi}
                            </p>
                            <a href="#" className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg no-underline hover:opacity-80'> Baca selengkapnya</a>
                            </div>
                        </div>
                
                    </div> 
                )
              
            })
       
        }   
    </div>
  )
}

export default CardBlog
