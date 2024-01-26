import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <div className="flex justify-center border-white bg-MedicalBg">
    <div className="flex flex-col justify-center items-center bg-white  sm:rounded-lg w-full sm:max-w-xl lg:rounded-none lg:rounded-l-lg lg:mr-0 lg:ml-0 lg:max-w-3xl my-60">
      <div className='flex flex-col justify-center items-center min-h-loginh'>
      <span className="flex font-bold text-4xl mb-4">
        Sign In to MedVault
      </span>
      <div className="flex  items-center cursor-pointer bg-blue-50 hover:bg-blue-100 border-2 border-gray-100 rounded-lg mt-3 mb-3 px-7 py-2 text-xl">
        <img
          src="Assets/google.png"
          alt=""
          className="w-8 h-auto bg-white p-2 rounded-3xl mr-3"
        />
        <a href="www.google.com">
          <span className="font-medium">Sign in With Google</span>
        </a>
      </div>
      <span className="flex  text-gray-500 text-xl font-medium">
        Or Sign in with your e-mail
      </span>
      <hr className="-mt-2" />
      <input
        type="email"
        placeholder="Email"
        className="px-4 h-12 text-xl my-2 border border-1 outline-gray-200 border-gray-200 rounded-lg mt-10 font-medium pl-6 bg-gray-100 flex items-center focus:bg-white"
      />
      <input
        type="password"
        placeholder="Password"
        className="flex px-4 text-xl h-12 my-2 py-3 border border-1 outline-gray-200 items-center  border-gray-200 rounded-lg font-medium pl-6 bg-gray-100 focus:bg-white"
      />
      <button className="px-4 h-12 my-2 py-7 text-3xl rounded-lg mt-10 font-medium pl-6 flex text-white bg-blue-600 hover:bg-blue-800 justify-center w-56 items-center">
        <img className="mr-2" src="Assets/login.svg" alt="" />
        Sign In
      </button>
      <span className="text-gray-600 decoration-gray-600 flex underline decoration-dotted text-xl my-4 cursor-pointer">
        Forgot Password?
      </span>
      <span className="text-gray-500 font-medium text-xl flex mt-3">
        Don't have an account?
        <Link exact to='signup'>
        <span className="decoration-gray-500 ml-1 underline decoration-dotted cursor-pointer">
          Sign Up
        </span>
        </Link>
      </span>
    </div>
    </div>
    <div className="hidden Login:flex justify-center items-center bg-current py-42 rounded-r-xl my-60">
      <img
        className="max-w-3xl min-h-loginh "
        src="Assets/MedicalRecord.jpg"
        alt=""
      />
    </div>
  </div>
    </>
  )
}

export default Login