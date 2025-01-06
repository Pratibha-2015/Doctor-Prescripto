import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        {/* left side...... */}
        <div >
            <p className='text-3xl md:text-4xl m-auto text-white m-auto mt-6'>Book Appoinment <br />With Trusted Doctors</p>
            <div className='flex flex-col md:flex-row item-center gap-3 text-white font-light text-sm  mt-4 md:mt-8'>
                <img className='w-32' src={assets.group_profiles} alt="" />
                <p>Simply browse through our extensive list of trusted Doctors,I <br /> schedule your appoinment hassel-free.</p>
                </div>
                <a href="#speciality" className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-full mt-6 hover:scale-105 text-gray-600 text-sm ml-3 w-fit">
               Book Appointment 
                   <img className="w-3.5" src={assets.arrow_icon} alt="Arrow icon" />
                </a>

        </div>
        {/* write side....*/}
        <div>
            <img src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header