import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function SignUp() {
  const [selectedOption, setSelectedOption] = useState('NULL');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
    <div className='flex justify-center items-center text-lg h-screen bg-MedicalBg'>
      <div className='flex flex-col justify-center items-center h-full text-5xl max-w-screen-md bg-gray-700 my-10'>
      <label className=' text-5xl font-medium text-white'>Welcome Back!</label>
      <p className='mb-4 mt-7 text-3xl text-white'> To keep connected with us please login with your personal info</p>
      <Link to='/login'>
      <button className=' bg-black text-white rounded-2xl w-64 mt-6 px-5 py-5'>Sign In</button>
      </Link>
      </div>
            
            <div className='flex flex-col justify-center items-center h-full text-5xl bg-black px-16 max-w-3xl'>
            <label className='font-bold mb-2 text-white'>Create Account</label>
            <form action="">
              <input className="rounded-lg pl-7 py-3 block text-5xl border-0 mt-4" type="text" name="name1" placeholder='First Name'/>
              <input className="rounded-lg pl-7 py-3 block text-5xl border-0 mt-4" type="text" name="name2" placeholder='Last Name'/>
              <input type="email" placeholder='you@example.com' className="rounded-lg pl-7 py-3 text-5xl border-0 mt-4 block w-full px-3 bg-white border-slate-300 shadow-sm
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 peer"/>
<p id="emailError" class="hidden mt-2 invisible peer-invalid:visible peer-invalid:block text-red-600 text-5xl">
  Please provide a valid email address.
</p>
              <input className="rounded-lg pl-7 py-3 block text-5xl border-0 mt-4" type="tel" placeholder='Mobile No.'/>
              <input className="rounded-lg pl-7 py-3 block text-5xl border-0 mt-4" type="password" placeholder='Password'/>
              <input className="rounded-lg pl-7 py-3 block text-5xl border-0 mt-4" type="password" placeholder='Confirm Password'/>
              <div className='mt-8 mb-6 flex justify-center ' >
              <p
                onClick={() => handleOptionClick('Patient')}
                className={`${
                  selectedOption === 'Patient' ? 'bg-white text-black' : 'text-white'
                } rounded-2xl py-4 px-6 mr-10 w-48 hover:cursor-pointer active:bg-white active:text-black`}
              >
                Patient
              </p>
               <p
                onClick={() => handleOptionClick('Doctor')}
                className={`${
                  selectedOption === 'Doctor' ? 'bg-white text-black' : 'text-white'
                } rounded-2xl py-4 px-6 w-48 hover:cursor-pointer active:bg-white active:text-black`}
              >
                Doctor
              </p>
              </div>
              <button className=' bg-white rounded-2xl w-64 px-5 py-4'>Sign Up</button>
            </form>
            </div>
            </div>
    </>
  )
}

export default SignUp