import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignUp } from "../Hooks/useSignUp";

function SignUp() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup, error, isLoading } = useSignUp();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    await signup({ ...data });
    if (error) return;
    setData({
      firstname: "",
      lastname: "",
      mobile: "",
      email: "",
      password: "",
    });
    setConfirmPassword("");
    navigate("/");
  };
  return (
    <>
      <div className='flex justify-center items-center text-lg h-screen bg-MedicalBg bg-no-repeat bg-cover'>
        <div className='hidden 1500:flex flex-col justify-center items-center h-full sm:text-5xl max-w-screen-md bg-gray-700 my-10'>
          <p className=' sm:text-5xl font-medium text-white'>Welcome Back!</p>
          <p className='mb-4 mt-7 text-3xl text-white'>
            {" "}
            To keep connected with us please login with your personal info
          </p>
          <Link to='/login'>
            <button className=' bg-black text-white rounded-2xl w-64 mt-6 px-7 py-4'>
              Sign In
            </button>
          </Link>
        </div>

        <div className='flex flex-col justify-center items-center text-center h-full w-full text-3xl sm:text-5xl bg-gray-300 sm:px-16 max-w-3xl gap-4'>
          <p className='font-bold mb-2'>Create Account</p>
          <form action='' onSubmit={handleSubmit}>
            <input
              className='rounded-lg pl-7 py-3 block sm:text-5xl mt-4 border-2  border-gray-300 bg-gray-100 text-black'
              type='text'
              name='firstname'
              placeholder='First Name'
              value={data.firstname}
              onChange={handleChange}
              required
            />
            <input
              className='rounded-lg pl-7 py-3 block sm:text-5xl mt-4 border-2 border-gray-300 bg-gray-100 text-black'
              type='text'
              name='lastname'
              placeholder='Last Name'
              value={data.lastname}
              onChange={handleChange}
              required
            />
            <input
              type='email'
              placeholder='you@example.com'
              className='rounded-lg pl-7 py-3 block sm:text-5xl mt-4 border-2 bg-gray-100 text-black border-slate-300 shadow-sm
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 peer'
              name='email'
              value={data.email}
              onChange={handleChange}
              autoComplete='on'
            />
            <p
              id='emailError'
              className='hidden mt-2 w-60 sm:w-auto peer-invalid:block text-red-600 sm:text-5xl'
            >
              Please provide a valid email address.
            </p>
            <input
              className='rounded-lg pl-7 py-3 block sm:text-5xl mt-4 border-2 border-gray-300 bg-gray-100 text-black'
              type='tel'
              name='mobile'
              placeholder='Mobile No.'
              value={data.mobile}
              onChange={handleChange}
              required
            />
            <input
              className='rounded-lg pl-7 py-3 block sm:text-5xl mt-4 border-2 border-gray-300 bg-gray-100 text-black'
              type='password'
              name='password'
              placeholder='Password'
              value={data.password}
              onChange={handleChange}
              required
            />
            <input
              className='rounded-lg pl-7 py-3 block sm:text-5xl mt-4 border-2 border-gray-300 bg-gray-100 text-black'
              type='password'
              name='confirmpassword'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {data.password === confirmPassword ? (
              ""
            ) : (
              <p className='text-red-600 sm:text-5xl'>Passwords do not match</p>
            )}
            <button
              type='submit'
              disabled={isLoading}
              className=' bg-blue-500 text-white rounded-full sm:w-64 py-2 px-7 sm:py-4 mt-10'
            >
              Sign Up
            </button>
          </form>
          {error && (
            <div className='p-2 bg-white rounded-lg text-red-600'>{error}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default SignUp;
