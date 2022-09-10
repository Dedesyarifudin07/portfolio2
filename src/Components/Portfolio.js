import React from 'react'
import { dataPortfolio } from './Data/dataPortfolio'


const Portfolio = () => {
  return (
    <div className='pt-36 pb-16 bg-slate-100 '>
        <div className='container'>
            <div className='max-w-xl mx-auto text-center mb-16'>
                <h4 className='font-semibold text-lg text-primary uppercase mb-2 '>Portfolio</h4>
                <h2 className='font-bold text-3xl text-dark mb-4 sm:text-4xl lg:text-5xl'>Project Terbaru</h2>
                <p className='font-medium text-md text-secondary md:text-lg'>lorem ipsum dollor sit amet lorem dolor ipsum sit amemt cuahrt keseni ritual adoasnd sajdsd
                    sdasdsad sdkuyyrter dede syarifudin adaasnjdkad jdsasd dedhfg shasid hdsbgsa hjasd
                </p>
            </div>

            <div className='w-full px-4 flex flex-wrap justify-center  xl:w-10/12 xl:mx-auto'>
                {
                     dataPortfolio.map((data) => {
                        return(  
                        <div className='mb-12 p-4 md:w-1/2'>
                            <div className='rounded-md shadow-md overflow-hidden'>
                            <img src={data.img} alt="" width='w-full'/> 
                            </div>
                            <h3 className='font-semibold text-xl  text-dark mt-5 mb-3'>    {data.title}</h3>
                            <p className='font-medium text-md text-secondary'>{data.deskripsi}
                            </p>
                        </div>)
                     })

                }
              
               
           
            </div>
        </div>
    </div>
  )
}

export default Portfolio
