import React, { useState } from 'react'

const Loginp = () => {

  const [state, setState] =useState("Sign Up")
  const[email,setEmail] = useState('')
  const[password , setPassword] = useState('')
  const[name,setName] = useState('')

  const onsubmitHandler = async (event) =>{
    event.preventDefault()
  }
  return (
    <form className="min-h-[80vh] flex items-center justify-center">

      <div className='flex flex-col gap-3 items-start p-8 min-w-[340px] sm: min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'> {state === "Sign Up" ? "Create Account" : "Login"}</p>
        <p> Please { state === 'Sign up'? "Sign up" : "log in"} to book appoinment</p>
 {
  state === "Sign Up" && <div className=' w-full'>
  <p> Full Name</p>
  <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text"  onChange= { (e) =>setName(e.target.value)} value={name}/>
 </div>
 }
 
 <div className=' w-full'>
  <p> Email</p>
  <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email"  onChange= { (e) =>setEmail(e.target.name)} value={email}/>
 </div>
 <div className=' w-full'>
  <p> Password</p>
  <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password"  onChange= { (e) =>setPassword(e.target.name)} value={password}/>
 </div>
 <button className=' bg-primary text-white w-full py-2 rounded-md'> {state === "Sign Up" ? "Create Account" : "Login"}</button>
 {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-blue-500 cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-blue-500 cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>

    </form>
  )
}

export default Loginp