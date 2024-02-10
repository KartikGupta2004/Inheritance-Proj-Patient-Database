import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useAuthContext } from "../../Hooks/useAuthContext";

function AddVaccine() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const saveData = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/vaccine/addvaccine",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            token: user.authToken,
          },
          body: JSON.stringify(data),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log(`Error: ${error.error}`);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    saveData(data);
    e.currentTarget.reset();
    navigate("/vaccine", {
      state: { refreshTimestamp: Date.now() },
      replace: true,
    });
  };
  return (
    <>
      <div className='bg-fuchsia-50 h-fit mx-auto'>
        <div className='flex justify-start items-center w-full py-3 border-b-2 border-rose-400'>
          <Link exact to='/vaccine'>
            <MdOutlineKeyboardArrowLeft className='text-4xl ml-1 md:ml-3 sm:6xl md:text-7xl text-black' />
          </Link>
          <p className='text-2xl sm:text-4xl lg:text-6xl lg:pl-40 mb-0'>
            Vaccine
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className='h-1/2 flex flex-col text-3xl sm:text-5xl text-start Login:ml-5 justify-center mx-auto'
        >
          <div className='mt-40 mb-20'>
            <label htmlFor='title' className=' ml-3 text-gray-400 font-medium'>
              Title<span className='text-red-600'>*</span>
            </label>
            <input
              className='text-2xl sm:text-5xl my-5 ml-1 border-2  border-gray-200 rounded-lg max-w-7xl '
              type='text'
              name='title'
              id='title'
              required
            />
          </div>
          <div className='mb-40 mt-20'>
            <label htmlFor='date' className=' ml-3 text-gray-400 font-medium'>
              Date:
            </label>
            <input
              className='text-2xl sm:text-4xl my-5 ml-1 border-2 p-6 border-gray-200 rounded-lg max-w-7xl '
              type='date'
              name='date'
              id='date'
              required
            />
          </div>
          <div className='flex justify-center my-4 hover:cursor-pointer'>
            <button
              className='rounded-full font-bold px-5 py-3 bg-rose-400 text-white'
              onClick={() => document.getElementById("submit-button").click()}
            >
              Save Record
            </button>
          </div>
          <input type='submit' id='submit-button' hidden />
        </form>
      </div>
    </>
  );
}
export default AddVaccine;
