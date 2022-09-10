import React from 'react'

const Form = () => {
  return (
    <form>
        <div className='w-full lg:w-2/3 lg:mx-auto'>  
            {/* nama */}
            <div className='w-full px-4 mb-8'>
                <label for="name" className='text-base text-primary font-bold uppercase'>nama</label>
                <input type="text" name="name" value="" className='w-full text-dark bg-slate-200 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary'/>
            </div>
            {/* email */}
            <div className='w-full px-4 mb-8'>
                <label for="email" className='text-base text-primary font-bold uppercase'>email</label>
                <input type="email" name="email" value="" className='w-full text-dark bg-slate-200 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary'/>
            </div>
            {/* textarea */}
            <div className='w-full px-4 mb-8'>
                <label for="message" className='text-base text-primary font-bold uppercase'>pesan</label>
                <textarea type="email" name="email" value="" className='w-full text-dark bg-slate-200 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary h-32'/>
            </div>
            {/* button */}
            <div className='w-full px-4'>
                <button type="" className='text-base font-semibold text-white bg-primary px-8 py-2 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500'>Kirim</button>
            </div>
        </div>
    </form>
  )
}

export default Form
