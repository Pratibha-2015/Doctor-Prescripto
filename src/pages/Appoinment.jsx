import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appoinment = () => {
  const {docId} = useParams()
  const {doctors} = useContext(AppContext)
  const [docInfo , setdocInfo] = useState(null)

  const fetchDocInfo = async() => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setdocInfo(docInfo)
    console.log(docInfo)

  }
  useEffect( ()=>{
 fetchDocInfo()
  },[doctors,docId])
  return docInfo && (
    <div>
{/* ---doctors details--- */}
<div className='flex flex-col sm:flex-row gap-4'>
  <div>
    <img className='bg-primary rounded-lg  w-full sm:max-w-72'  src={docInfo.image} alt="" />
  </div>
  <div className=' flex-1 border border-gray-600 rounded-lg p-8 py-7 bg-white mx-2 sm: mx-0 mt-[-80px] sm:mt-0'>
    {/* ---- dock info--- */}
    <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'> {docInfo.name} <img className='w-5' src={assets.verified_icon} /></p> 
         <div className='flex item-center gap-2 mt-1 text-sm text-gray-500'>
          <p>{docInfo.degree} - {docInfo.speciality}</p>
          <button className='py-0.5 px-2  border text-sm rounded-full'>{docInfo.experience}</button>
         </div >
         {/* ----doctore about-- */}
         <div>
          <p className='flex item-center gap-2'>
            About <img src={assets.info_icon}/>  </p>
            <p>{docInfo.about}</p>
         </div>
         <p> Appoinment fee: <span>{docInfo.fees}</span></p>

           </div>
</div>
    </div>
  )
}

export default Appoinment