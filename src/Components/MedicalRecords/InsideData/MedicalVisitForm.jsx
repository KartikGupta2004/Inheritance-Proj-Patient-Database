import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useAuthContext } from "../../Hooks/useAuthContext";
const MedicalVisitForm = () => {
  const [data, setData] = useState({
    date: "",
    time: "",
    rec_type: "",
    doc_name: "",
    notes: "",
    name: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const { user } = useAuthContext();
  const formRef = useRef(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const saveData = async () => {
    if (!user || !user.authToken) {
      // Handle the case where user or authToken is null or undefined
      return;
    }
    try {
      const response = await fetch(
        "http://localhost:5000/api/medical_visits/addvisit",
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
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    await saveData();
    setIsSuccess(true);
    setData({
      date: "",
      time: "",
      rec_type: "",
      doctor: "",
      notes: "",
    });
    formRef.current.reset();
    navigate("/visit", {
      state: { refreshTimestamp: Date.now() },
      replace: true,
    });
  };

  return (
    <>
      <div className='flex bg-fuchsia-50 justify-center items-center w-full border-b-2 border-rose-400'>
        <Link exact to='/'>
          <MdOutlineKeyboardArrowLeft className='text-4xl ml-1 md:ml-3 sm:6xl md:text-7xl text-black' />
        </Link>
        <h1 className='block text-center w-5/6 text-2xl sm:text-4xl lg:text-5xl py-4 px-8 text-rose-400 box-border font-bold '>
          Appointment Booking
        </h1>
      </div>
      <div className='flex justify-center items-center w-full'>
        <main className='flex justify-center items-center w-full box-border flex-col bg-stone-100'>
          <section className='p-6 text-2xl lg:text-4xl box-border mt-5 w-1/2 h-full'>
            <form
              ref={formRef}
              action=''
              className='grid gap-2 sm:grid-cols-2 box-border place-content-center max-w-5/6'
              onSubmit={handleSubmit}
            >
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
              <span className='sm:col-span-2 mt-5'>
                <label
                  htmlFor='type'
                  className='flex text-3xl text-gray-500 left-0 justify-start mt-10 mb-5'
                >
                  Type:
                </label>
                <div className='flex justify-evenly items-center mt-4'>
                  <span className='bg-white w-full rounded-lg text-lg sm:text-3xl p-5'>
                    <input
                      type='radio'
                      className='form-radio h-6 w-6 text-rose-400 outline-black checked:bg-rose-400 checked:hover:bg-rose-400 checked:active:bg-rose-400 checked:focus:bg-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400 mx-2'
                      name='rec_type'
                      id='new'
                      value='new'
                      required
                      onChange={handleChange}
                    />
                    <label htmlFor='new' className=''>
                      New
                    </label>
                  </span>
                  <span className='bg-white w-full rounded-lg text-lg sm:text-3xl p-5 ml-5 sm:ml-10'>
                    <input
                      type='radio'
                      className='form-radio h-6 w-6 text-rose-400 outline-black checked:bg-rose-400 checked:hover:bg-rose-400 checked:active:bg-rose-400 checked:focus:bg-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400 mx-2'
                      name='rec_type'
                      id='followup'
                      value='followup'
                      required
                      onChange={handleChange}
                    />
                    <label htmlFor='followup'>Follow Up</label>
                  </span>
                </div>
              </span>
              <span>
                <label
                  htmlFor='doctor'
                  className='text-3xl text-gray-500 flex left-0 justify-start mt-10 mb-5'
                >
                  Doctor:
                </label>
                <input
                  type='text'
                  name='doc_name'
                  id='doctor'
                  className='form-text rounded-lg text-2xl p-4 w-full mb-5'
                  required
                  onChange={handleChange}
                />
              </span>
              <span className='flex items-end justify-center sm:justify-end mb-5'>
                <span className='p-2 bg-white rounded-lg border border-black'>
                  <Link to='/doctor'>
                    <img
                      src='Assets/doctor.png'
                      alt='doctor'
                      className='w-12 h-12'
                    />
                  </Link>
                </span>
              </span>
              <span className='sm:col-span-2'>
                <label
                  htmlFor='notes'
                  className='flex text-3xl text-gray-500 left-0 justify-start my-2'
                >
                  Note:
                </label>
                <input
                  type='text'
                  name='notes'
                  id='notes'
                  className='form-text rounded-lg text-2xl p-4 w-full mb-5'
                  required
                  onChange={handleChange}
                />
              </span>
              <span className='flex justify-center sm:col-span-2'>
                <button className='rounded-full font-bold text-3xl px-5 py-4 bg-rose-400 text-white mt-3'>
                  Book
                </button>
                {/* Success message */}
                {isSuccess && (
                  <div
                    id='alert-border-3'
                    style={{
                      position: "fixed",
                      top: "0",
                      left: "0",
                      width: "100%",
                      zIndex: "999",
                    }}
                    className='flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800'
                    role='alert'
                  >
                    <svg
                      className='flex-shrink-0 w-4 h-4 md:w-7 md:h-7'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
                    </svg>
                    <div className='ms-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium'>
                      Your Appointment is booked successfully.
                    </div>
                    <button
                      type='button'
                      onClick={() => setIsSuccess(false)}
                      className='ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700'
                      aria-label='Close'
                    >
                      <span className='sr-only'>Dismiss</span>
                      <svg
                        className='w-4 h-4 md:w-7 md:h-7'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 14 14'
                      >
                        <path
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </span>
            </form>
          </section>
        </main>
      </div>
    </>
  );
};

export default MedicalVisitForm;
