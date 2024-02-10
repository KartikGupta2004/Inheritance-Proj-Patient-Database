import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const BloodPressureForm = () => {
  const [data, setData] = useState({
    systolic: 120,
    diastolic: 80,
    pulse: 80,
    date: "",
    time: "",
    rec_note: "",
  });
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const saveData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/blood_pressure/addpressurerec/",
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
    } catch (err) {
      console.log(`Error: ${err.error}`);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    if (data.date === "" || data.time === "") return;
    saveData();
    setData({
      systolic: 120,
      diastolic: 80,
      pulse: 80,
      date: "",
      time: "",
      rec_note: "",
    });
    navigate("/bloodpressure", {
      state: { refreshTimestamp: Date.now() },
      replace: true,
    });
  };
  return (
    <>
      <div className='bg-fuchsia-50 h-fit mx-auto'>
        <div className='flex justify-center items-center w-full py-3 border-b-2 border-rose-400'>
          <Link exact to='/bloodpressure'>
            <MdOutlineKeyboardArrowLeft className='text-4xl ml-1 md:ml-3 sm:6xl md:text-7xl text-black' />
          </Link>
          <h1 className='block text-center w-5/6 text-2xl sm:text-4xl lg:text-5xl py-4 px-8 text-rose-400 box-border font-bold mb-0 '>
            Blood Pressure
          </h1>
        </div>
        <div className='flex justify-center items-center w-full'>
          <main className='flex justify-center items-center w-full box-border flex-col bg-stone-100'>
            <section className='p-6 text-2xl lg:text-4xl box-border mt-5 md:w-1/2 h-full'>
              <form
                action=''
                onSubmit={handleSubmit}
                className='grid gap-2 grid-cols-1 box-border place-content-center max-w-5/6'
              >
                <div className='flex box-border rounded-lg'>
                  <div className='w-650 flex flex-col md:flex-row mx-auto'>
                    <span className='flex flex-col md:border-r-2 border-stone-600 box-border flex-grow'>
                      <label
                        htmlFor='systolic'
                        className='bg-stone-300 w-full text-center rounded-t-lg md:rounded-tr-none p-2 '
                      >
                        Systolic
                      </label>
                      <input
                        type='number'
                        name='systolic'
                        id='systolic'
                        className='form-input text-2xl md:text-3xl w-full border-0 bg-inherit text-center focus:ring-0 bg-white md:rounded-bl-lg'
                        min={40}
                        max={400}
                        defaultValue={40}
                        onChange={handleChange}
                      />
                    </span>
                    <span className='flex items-center justify-center flex-col flex-grow'>
                      <label
                        htmlFor='diastolic'
                        className='bg-stone-300 w-full text-center p-2'
                      >
                        Diastolic
                      </label>
                      <input
                        type='number'
                        name='diastolic'
                        id='diastolic'
                        className='form-input text-2xl md:text-3xl w-full border-none bg-inherit text-center focus:ring-0 bg-white'
                        min={40}
                        max={400}
                        defaultValue={40}
                        onChange={handleChange}
                      />
                    </span>
                    <span className='flex items-center justify-center flex-col md:border-l-2 border-stone-600 flex-grow'>
                      <label
                        htmlFor='pulse'
                        className='bg-stone-300 p-2 w-full text-center md:rounded-se-lg '
                      >
                        Pulse
                      </label>
                      <input
                        type='number'
                        name='pulse'
                        id='pulse'
                        className='form-input text-2xl md:text-3xl w-full border-none bg-inherit border-l-2 text-center focus:ring-0 rounded-b-lg bg-white'
                        min={25}
                        max={250}
                        defaultValue={25}
                        onChange={handleChange}
                      />
                    </span>
                  </div>
                </div>
                <span className='sm:col-span-2'>
                  <label
                    htmlFor='date'
                    className='flex text-3xl text-gray-500 left-0 justify-start mt-10 mb-5'
                  >
                    Date:
                  </label>
                  <input
                    type='date'
                    name='date'
                    id='date'
                    className='w-full rounded-lg text-2xl p-5'
                    required
                    onChange={handleChange}
                  />
                  <label
                    htmlFor='time'
                    className='flex text-3xl text-gray-500 left-0 justify-start mt-10 mb-5'
                  >
                    Time:
                  </label>
                  <input
                    type='time'
                    name='time'
                    id='time'
                    className='form-time w-full rounded-lg text-2xl p-5'
                    onChange={handleChange}
                  />
                </span>
                <span className='sm:col-span-2'>
                  <label
                    htmlFor='note'
                    className='flex text-3xl text-gray-500 left-0 justify-start mb-2 mt-4'
                  >
                    Note:
                  </label>
                  <input
                    type='text'
                    name='rec_note'
                    className='form-text rounded-lg text-2xl p-4 w-full mb-5'
                    required
                    onChange={handleChange}
                  />
                </span>
                <span className='flex justify-center sm:col-span-2'>
                  <button className='block rounded-full font-bold text-3xl px-5 py-3 my-4 bg-rose-400 text-white'>
                    Save Record
                  </button>
                </span>
              </form>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default BloodPressureForm;
