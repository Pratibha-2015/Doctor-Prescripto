import React from 'react'
import {specialityData} from'../assets/assets.js'
import { Link } from 'react-router-dom'

const SpacialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
        <h1 className='text-3xl font-medium'>Find by Speciality</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appoinment hassel-free</p>
        <div className=' flex sm:justify-center gap-4 pt-5 w-full '>        
            {specialityData.map((item,index) =>(
                <Link className=' flex flex-col cursor:pointer' key={index} to={`/doctors/${item.speciality}`}>
                    <img className='w-16 mb-2 sm:w-24' src={item.image} alt="" />
                    <p>{item.speciality}</p>
                </Link>

            ))}
        </div>

    </div>
  )
}

export default SpacialityMenu