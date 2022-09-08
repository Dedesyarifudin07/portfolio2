import React from 'react'
import Laptop from '../img/laptop.jpeg';
import pc from '../img/rakitpc.jpeg';
import dede from '../img/dede.png';
import mikrotik from '../img/mikrotik.jpg';
import parabolic from '../img/parabolic.jpg';
import Typed from 'react-typed';

const Portfolio = () => {
  return (
    <div className='pt-36 pb-16 bg-slate-100 '>
        <div className='container'>
            <div className='max-w-xl mx-auto text-center mb-16'>
                <h4 className='font-semibold text-lg text-primary uppercase mb-2 '>Portfolio</h4>
                <h2 className='font-bold text-3xl text-dark mb-4'>Project Terbaru</h2>
                <p className='font-medium text-md text-secondary'>lorem ipsum dollor sit amet lorem dolor ipsum sit amemt cuahrt keseni ritual adoasnd sajdsd
                    sdasdsad sdkuyyrter dede syarifudin adaasnjdkad jdsasd dedhfg shasid hdsbgsa hjasd
                </p>
            </div>

            <div className='w-full px-4 flex flex-wrap justify-center  xl:w-10/12 xl:mx-auto'>
                <div className='mb-12 p-4 md:w-1/2'>
                    <div className='rounded-md shadow-md overflow-hidden'>
                       <img src={Laptop} alt="" width='w-full'/> 
                    </div>
                    <h3 className='font-semibold text-xl  text-dark mt-5 mb-3'>     Service Laptop</h3>
                    <p className='font-medium text-md text-secondary'>lorem ipsum dollor sit amet lorem dolor elit elus lusto eliquam
                    </p>
                </div>
                <div className='mb-12 p-4 md:w-1/2'>
                    <div className='rounded-md shadow-md overflow-hidden'>
                       <img src={dede} alt="" width='w-full'/> 
                    </div>
                    <h3 className='font-semibold  text-xl text-dark mt-5 mb-3'> LANDING PAGE Dede syarifudin</h3>
                    <p className='font-medium text-md text-secondary'>lorem ipsum dollor sit amet lorem dolor elit elus lusto eliquam
                    </p>
                </div>
                <div className='mb-12 p-4 md:w-1/2'>
                    <div className='rounded-md shadow-md overflow-hidden'>
                       <img src={mikrotik} alt="" width='w-full' height='450'/> 
                    </div>
                    <h3 className='font-semibold text-xl  text-dark mt-5 mb-3'> mikrotik</h3>
                    <p className='font-medium text-md text-secondary'>lorem ipsum dollor sit amet lorem dolor elit elus lusto eliquam
                    </p>
                </div>
                <div className='mb-12 p-4 md:w-1/2'>
                    <div className='rounded-md shadow-md overflow-hidden'>
                       <img src={parabolic} alt="" width='w-full'/> 
                    </div>
                    <h3 className='font-semibold  text-xl text-dark mt-5 mb-3'>membuat wajan parabolic </h3>
                    <p className='font-medium text-md text-secondary'>lorem ipsum dollor sit amet lorem dolor elit elus lusto eliquam
                    </p>
                </div>
           
            </div>
        </div>
    </div>
  )
}

export default Portfolio
