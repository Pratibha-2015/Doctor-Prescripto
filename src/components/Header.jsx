import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div >
        {/* left side...... */}
        <div>
            <p>Book Appoinment <br />With Trusted Doctors</p>
            <div>
                <img src={assets.group_profiles} alt="" />
                <p>Simply browse through our extensive list of trusted Doctors,I <br /> schedule your appoinment hassel-free.</p>
                </div>
                <a href=""> Book Appoinment <img src={assets.arrow_icon} alt="" /></a>
        </div>
        {/* write side....*/}
        <div>
            <img src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header