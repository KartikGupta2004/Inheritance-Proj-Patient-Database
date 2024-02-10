import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../Hooks/useLogin";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
    Role: "user",
  });
  const { login, isLoading, error } = useLogin();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    await login(data);
    if (error) {
      console.log(error);
    } else {
      setData({
        email: "",
        password: "",
        Role: "",
      });
      navigate("/", { replace: true });
    }
  };
  const handleOptionClick = (option) => {
    setData({ ...data, Role: option });
  };
  return (
    <>
      <div className='flex justify-center border-white bg-LoginBg bg-cover'>
        <div className='flex flex-col justify-center items-center bg-white  sm:rounded-lg w-full sm:max-w-xl lg:rounded-none lg:rounded-l-lg lg:mr-0 lg:ml-0 lg:max-w-3xl md:my-40 Login:my-60'>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col justify-center items-center min-h-loginh'
          >
            <span className='flex font-bold mr-4 md:mr-0 text-3xl md:text-4xl mb-4'>
              Sign in To MedVault
            </span>
            <div className='flex  items-center cursor-pointer bg-blue-50 hover:bg-blue-100 border-2 border-gray-100 rounded-lg mt-3 mb-3 px-7 py-2 text-xl'>
              <img
                src='Assets/google.png'
                alt=''
                className='w-8 h-auto bg-white p-2 rounded-3xl mr-3'
              />
              <a href='www.google.com' className='no-underline text-black'>
                <span className='font-medium'>Sign in With Google</span>
              </a>
            </div>
            <span className='flex  text-gray-500 text-xl font-medium'>
              Or Sign in with your e-mail
            </span>
            <hr className='-mt-2' />
            <input
              type='email'
              placeholder='Email'
              id='email'
              name='email'
              autoComplete='on'
              onChange={handleChange}
              value={data.email}
              className='px-4 h-12 text-xl mt-10 mb-4 border border-1 outline-gray-200 border-gray-200 rounded-lg font-medium pl-6 bg-gray-100 flex items-center focus:bg-white'
            />
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              onChange={handleChange}
              value={data.password}
              className='flex px-4 text-xl h-12 mt-2 mb-4 py-3 border border-1 outline-gray-200 items-center  border-gray-200 rounded-lg font-medium pl-6 bg-gray-100 focus:bg-white'
            />
            {error && (
              <div className='mt-2 border-red-600 border-2 p-2 text-lg rounded-lg bg-red-100 text-red-600'>
                {error}
              </div>
            )}
            <div className='mt-8 mb-6 flex justify-center '>
              <button
                type='button'
                onClick={() => handleOptionClick("User")}
                className={`${
                  data.Role === "User" ? "bg-black text-white" : "text-black border-black border-2"
                } rounded-2xl py-3 px-3 text-xl mr-10 w-48 hover:cursor-pointer active:bg-black active:text-white`}
              >
                Patient
              </button>
              <button
                type='button'
                onClick={() => handleOptionClick("admin")}
                className={`${
                  data.Role === "admin" ? "bg-black text-white" : "text-black border-black border-2"
                } rounded-2xl py-3 px-3 text-xl mr-10 w-48 hover:cursor-pointer active:bg-black active:text-white`}
              >
                Doctor
              </button>
            </div>
            <button
              className='px-4 h-12 my-2 py-7 text-2xl rounded-lg mt-10 font-medium pl-6 flex text-white bg-blue-600 hover:bg-blue-800 justify-center w-56 items-center'
              type='submit'
              disabled={isLoading}
            >
              <img className='mr-2 h-8' src='Assets/login.svg' alt='' />
              Sign In
            </button>
            <span className='text-gray-600 decoration-gray-600 flex underline decoration-dotted text-xl my-4 cursor-pointer'>
              Forgot Password?
            </span>
            <span className='text-gray-500 font-medium text-xl flex mt-3'>
              Don't have an account?
              <Link
                exact
                to='/signup'
                className='no-underline text-gray-500 hover:text-black'
              >
                <span className='decoration-gray-500 hover:decoration-black ml-1 underline decoration-dotted cursor-pointer'>
                  Sign Up
                </span>
              </Link>
            </span>
          </form>
        </div>
        <div className='hidden Login:flex justify-center items-center bg-current py-42 rounded-r-xl my-60'>
          <img
            className='max-w-3xl min-h-loginh '
            src='Assets/MedicalRecord.jpg'
            alt=''
          />
        </div>
      </div>
    </>
  );
}

export default Login;