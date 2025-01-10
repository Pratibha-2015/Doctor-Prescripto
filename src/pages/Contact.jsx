import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text- gray-500'> 
        <p>CONTACT  <span className='font-semibold'>US</span> </p>
        </div>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-5 mb-20 text-sm text-gray-700'>
          <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
            <p className='text-gray-500'> willson Station <br/> Navi Mumbai ,Maharashtra ,INDIA.</p>
            <p className='text-gray-500'> Tel: (+91) 0001122334 <br /> Email:Sample@gmail.com</p>
            <p className='font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</p>
            <p className='text-gray-500'>Learn more about our teams and job openings.</p>
            <button className=' border border-black px-8 py-4 text-sm hover:bg-black hover:text-white'>Explore Jobs</button>
          </div>
        </div>
    </div>
  )
}

export default Contact