import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSignUp } from "../Hooks/useSignUp";

function SignUp() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
    role: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup, error, isLoading } = useSignUp();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleOptionClick = (option) => {
    setData({ ...data, role: option });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    await signup({ ...data });
    if(error) return;
    setData({
      firstname: "",
      lastname: "",
      mobile: "",
      email: "",
      password: "",
      role: "",
    });
    setConfirmPassword("");
  };
  return (
    <>
      <div className='flex justify-center items-center text-lg h-screen bg-MedicalBg'>
        <div className='flex flex-col justify-center items-center h-full text-5xl max-w-screen-md bg-gray-700 my-10'>
          <p className=' text-5xl font-medium text-white'>Welcome Back!</p>
          <p className='mb-4 mt-7 text-3xl text-white'>
            {" "}
            To keep connected with us please login with your personal info
          </p>
          <Link to='/login'>
            <button className=' bg-black text-white rounded-2xl w-64 mt-6 px-5 py-5'>
              Sign In
            </button>
          </Link>
        </div>

        <div className='flex flex-col justify-center items-center h-full text-5xl bg-black px-16 max-w-3xl gap-4'>
          <p className='font-bold mb-2 text-white'>Create Account</p>
          <form action='' onSubmit={handleSubmit}>
            <input
              className='rounded-lg pl-7 py-3 block text-5xl border-0 mt-4'
              type='text'
              name='firstname'
              placeholder='First Name'
              value={data.firstname}
              onChange={handleChange}
              required
            />
            <input
              className='rounded-lg pl-7 py-3 block text-5xl border-0 mt-4'
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
              className='rounded-lg pl-7 py-3 text-5xl border-0 mt-4 block w-full px-3 bg-white border-slate-300 shadow-sm
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 peer'
              name='email'
              value={data.email}
              onChange={handleChange}
              autoComplete='true'
            />
            <p
              id='emailError'
              className='hidden mt-2 invisible peer-invalid:visible peer-invalid:block text-red-600 text-5xl'
            >
              Please provide a valid email address.
            </p>
            <input
              className='rounded-lg pl-7 py-3 block text-5xl border-0 mt-4'
              type='tel'
              name='mobile'
              placeholder='Mobile No.'
              value={data.mobile}
              onChange={handleChange}
              required
            />
            <input
              className='rounded-lg pl-7 py-3 block text-5xl border-0 mt-4'
              type='password'
              name='password'
              placeholder='Password'
              value={data.password}
              onChange={handleChange}
              required
            />
            <input
              className='rounded-lg pl-7 py-3 block text-5xl border-0 mt-4'
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
              <p className='text-red-600 text-5xl'>Passwords do not match</p>
            )}
            <div className='mt-8 mb-6 flex justify-center '>
              <button
                type='button'
                onClick={() => handleOptionClick("Patient")}
                className={`${
                  data.role === "Patient" ? "bg-white text-black" : "text-white"
                } rounded-2xl py-4 px-6 mr-10 w-48 hover:cursor-pointer active:bg-white active:text-black`}
              >
                Patient
              </button>
              <button
                type='button'
                onClick={() => handleOptionClick("Doctor")}
                className={`${
                  data.role === "Doctor" ? "bg-white text-black" : "text-white"
                } rounded-2xl py-4 px-6 w-48 hover:cursor-pointer active:bg-white active:text-black`}
              >
                Doctor
              </button>
            </div>
            <button
              type='submit'
              disabled={isLoading}
              className=' bg-white rounded-2xl w-64 px-5 py-4'
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
