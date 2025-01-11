import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData ,setUserData] = useState({
    name: "Aman Agrawall",
    image: assets.profile_pic,
    email: "amanagawall@gmail.com",
    phone: "(+91) 444322123",
    address:{
      line1: "Narayn peth ,Gurugram",
      line2: "Circle church, New Delhi"
    },
    gender: "Male",
    dob: "01-01-1990"
  })
const[isEdit, setIsEdit]= useState(false)
const handleNameChange = (e) =>{
  const { value } = e.target;
    setUserData((prev) => ({ ...prev,name:value }));
  };

  return (
    <div>
      <img src={userData.image} alt="" />
      {

isEdit ? 
<input type='text' value={userData.name} onChange={handleNameChange} />
   :<p> {userData.name}</p>  
   }
   <hr />
   <div>
    <p> CONTACT INFORMATION</p>
    <div>
      <p>Email Id:</p>
      <p>{userData.email}</p>
      <p>Phone:</p>
      {

isEdit ? 
<input type='text' value={userData.phone} onChange={ e => setUserData(prev => ({...prev,phone:e.target.value}))} />
   :<p> {userData.phone}</p>  
   }
   <p>Address</p>
   {
    isEdit ?
    <p> 
      <input type="text" value={userData.address} onChange={e =>
    setUserData(prev => ({
      ...prev,
      address: {
        ...prev.address,
        line1: e.target.value,
      },
    }))
  } />
      <br />
      <input type="text" value={userData.address}
      onChange={e =>
        setUserData(prev => ({
          ...prev,
          address: {
            ...prev.address,
            line2: e.target.value,
          },
        }))
      }
     /> </p>
: <p>
  {userData.address.line1}
  <br />
  {userData.address.line2}
</p>
   }

    </div>
    </div>
    <div>
      <p> Basic Information</p>
      <div>
        <p>Gender</p>
        {
          isEdit ?
          <select onChange={(e) => setUserData(prev => ({...prev,gender:e.target.value}))} value={userData.gender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          : <p>{userData.gender}</p>
        }
        <p> Birthday:</p>
        {
          isEdit ?
          <input type='date' onChange={(e) => setUserData(prev => ({...prev,dob:e.target.value}))} value={userData.dob} />
          : <p>{userData.dob}</p>
        }
      </div>
    </div>
    <div>
      {
        isEdit ?
        <button onClick={() => setIsEdit(false) }>Save Information </button>
        : <button onClick={() => setIsEdit(true) }> Edit</button>
      }
    </div>

    </div>
  )
}

export default MyProfile