import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=' md: mx-10'>
           <div className='flex flex -col  gap-14 my-10 mt-30 text-sm '>
             {/* ----left--- */}
             <div>
            <img className='mb=-5 w-40' src={assets.logo}alt="" />
            <p className='w-full md:w-2/3 text-gray-700 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos possimus, aspernatur aut, corporis in minima dignissimos corrupti ut earum eveniet, placeat repudiandae alias sit dolore?</p>
        </div>
        
            {/* ----center--- */}
        <div>
            <p className='text-xl font:medium mb-4'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-900'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        
            {/* ----right--- */}
            <div>
                <p className='text-xl font:medium mb-4'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-900'>
                    <li>+1-22-456-7890</li>
                    <li>pratibha.waghmare211@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            {/* -----Copiright text----- */}
            <hr />
            <p className=' py-4 text-sm text-center font-sm'>Copyright 2025@ Prescripto - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer