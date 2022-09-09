import React from 'react'
import Google from '../img/clients/google.png';
import tokped from '../img/clients/images.png';
import shopee from '../img/clients/shopee.png';

const Clients = () => {
  return (
    <div className='pt-36 pb-32 bg-slate-700'>
        <div className='container'>
            <div className='w-full px-4'>
            <div className=' mx-auto text-center mb-16'>
                <h4 className='font-semibold text-lg text-primary uppercase mb-2 '>Clients</h4>
                <h2 className='font-bold text-3xl text-white mb-4 sm:text-4xl lg:text-5xl'>Yang Pernah Bekerja sama</h2>
                <p className='font-medium text-md text-secondary md:text-lg '>lorem ipsum dollor sit amet lorem dolor ipsum sit amemt cuahrt keseni ritual adoasnd sajdsd
                    sdasdsad sdkuyyrter dede syarifudin adaasnjdkad 
                </p>
            </div>
            </div>
            <div className='w-full p-4 flex flex-wrap items-center justify-center'>
                <a href="#" className='max-w-[120px] mx-4 my-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                    <img src={Google} alt=""/>
                </a>
                <a href="#"  className='max-w-[120px]  mx-4 my-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                    <img src={shopee} alt=""/>
                </a>
                <a href="#"  className='max-w-[120px]  mx-4 my-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8'>
                    <img src={tokped} alt=""/>
                </a>
            </div>
            
        </div>
    </div>
  )
}

export default Clients
