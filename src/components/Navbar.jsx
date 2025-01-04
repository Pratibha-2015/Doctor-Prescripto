import React, { PureComponent, useState } from 'react'
import{ assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
 const navigate = useNavigate();
//  to profile picture and dropdown usestate()
const[showMenu, setShowMenu] = useState(false);
const [token,setToken]= useState(true)
  return (
    <div className='flex item-center justify-between text-sm py-4 mb-5 border-b border-b-green '>
        <img className='w-44 crusor pointer' src={assets.logo} alt="" />
        <ul className='md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none  h-0.5 bg-primary w-3/5 m-auto hidden '/>
            </NavLink>
            <NavLink to='/Doctor'>
                <li className='py-1'> ALL DOCTORS</li>
                <hr className='border-none outline-none  h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/About'>
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none  h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/Contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
    <div className='flex item-center gap-4'>
        {/* ternary operator for token */}
     {
     token 
     ? <div className='flex item-flex gap-2 cursor-pointer group relative'>
        <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
        <img className='w-3' src={assets.dropdown_icon} alt="" />
     <div className='absolute top-0 right-0 pt-14  text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-1 p-3'>
            <p onClick={()=>navigate('my-Profile')} className='hover:text-black cursor-pointer' >My Profile</p>
            <p  onClick={()=>navigate('my-appoinment')}className='hover:text-black cursor-pointer'> My Appoinment</p>
            <p onClick={()=> setToken(false)} className='hover:text-black cursor-pointer'>Logout </p>
        </div>
     </div>
   </div>
     :<button onClick={()=>navigate('/Loginp')} className=' bg-primary text-white px-4 py-3 rounded-full font-light hidden md:block'>Create Account </button>
     }
        </div>
    </div>
  )
}

export default Navbar