import React from 'react'
import Form from './Form'

const Contact = () => {
  return (
    <section className='pt-36 pb-32'>
        <div className='container'>
            <div className='w-full px-4 '>
                <div className='max-w-xl mx-auto text-center mb-16'>
                    <h4 className='font-semibold text-lg text-primary uppercase mb-2 '>Contact</h4>
                    <h2 className='font-bold text-3xl text-dark mb-4 sm:text-4xl lg:text-5xl'>Hubungi Kami</h2>
                    <p className='font-medium text-md text-secondary md:text-lg'>lorem ipsum dollor sit amet lorem dolor ipsum sit amemt cuahrt keseni ritual adoasnd sajdsd
                        sdasdsad 
                    </p>
                </div>

                 <Form/> 
            </div>
        </div>
    </section>
  )
}

export default Contact
