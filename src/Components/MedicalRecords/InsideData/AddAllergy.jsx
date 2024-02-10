import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useAuthContext } from "../../Hooks/useAuthContext";
function AddAllergy() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const currentDate = () => {
    const date = new Date().toJSON().slice(0, 10);
    return date;
  };

  const saveData = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/allergy/addallergy/",
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
      console.log(`Error: ${error}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    if (data.title === "") return;
    console.log(data);
    saveData(data);
    e.currentTarget.reset();
    navigate("/allergy", {
      state: { refreshTimestamp: Date.now() },
      replace: true,
    });
  };
  return (
    <>
      <div className='bg-fuchsia-50 h-fit mx-auto'>
        <div className='flex justify-center items-center w-full py-3 border-b-2 border-rose-400'>
          <Link exact to='/allergy'>
            <MdOutlineKeyboardArrowLeft className='text-4xl ml-1 md:ml-3 sm:6xl md:text-7xl text-black' />
          </Link>
          <h1 className='block mb-0 w-5/6 text-2xl sm:text-4xl lg:text-5xl py-4 px-8 text-rose-400 box-border font-bold '>
            Allergy
          </h1>
        </div>
        <form
          id='allergy'
          onSubmit={handleSubmit}
          className='h-1/2 flex flex-col text-3xl sm:text-5xl text-start Login:ml-5 mx-auto'
        >
          <div className='mt-40 mb-20 justify-center'>
            <p className=' ml-3 text-gray-400 font-medium'>
              Title<span className='text-red-600'>*</span>
            </p>
            <input
              className='text-2xl sm:text-5xl my-5 ml-1 border-2  border-gray-200 rounded-lg max-w-7xl '
              type='text'
              name='title'
              id='title'
              required
            />
          </div>
          <div className='mb-40 mt-20'>
            <p className=' ml-3 text-gray-400 font-medium'>Date:</p>
            <input
              className='form-input text-2xl sm:text-5xl my-5 ml-1 border-2  border-gray-200 rounded-lg max-w-7xl '
              type='date'
              name='date'
              id='date'
              defaultValue={currentDate()}
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
export default AddAllergy;