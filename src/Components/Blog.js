import React from 'react'
import shopee from '../img/clients/shopee.png';
import CardBlog from './CardBlog';


const Blog = () => {
  return (
    <section className='Blog pt-36 pb-36 bg-slate-100'>
        <div className='container'>
            <div className='w-full px-4 '>
              <div className='max-w-xl mx-auto text-center mb-16'>
                  <h4 className='font-semibold text-lg text-primary uppercase mb-2 '>Blog</h4>
                  <h2 className='font-bold text-3xl text-dark mb-4 sm:text-4xl lg:text-5xl'>Tulisan Terkini</h2>
                  <p className='font-medium text-md text-secondary md:text-lg'>lorem ipsum dollor sit amet lorem dolor ipsum sit amemt cuahrt keseni ritual adoasnd sajdsd
                      sdasdsad sdkuyyrter lorem ipsum dollor dedhfg shasid hdsbgsa hjasd
                  </p>
              </div>

              <CardBlog />
            </div>

        </div>
    </section>
  )
}

export default Blog
