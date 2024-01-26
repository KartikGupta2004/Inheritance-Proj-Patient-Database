import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const MedicalVisitForm = () => {
  return (
    <>
    <div className=' py-3 flex flex-wrap border-b-2 border-black items-center justify-center '>
    <Link exact to='/visit'>
    <MdOutlineKeyboardArrowLeft className='text-4xl ml-1 md:ml-3 sm:6xl md:text-7xl'/>
    </Link>
    <p className='text-2xl sm:text-4xl lg:text-6xl lg:pl-40'>Medical Visit</p>
    <div className='flex justify-end items-end ml-auto'>
    <div>
    <div className='flex text-3xl lg:text-5xl mr-10 lg:mr-0'>
    <div class="flex mx-auto w-24 sm:w-auto text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full px-5 py-2.5 text-center mr-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
    <img className='hidden sm:flex w-10 sm:w-12 md:w-16 mr-4' src="Medical page/tick.png" alt="" />
    <p className='text-xl  sm:text-3xl md:text-4xl sm:mt-1 md:mt-3 justify center items-center hover:cursor-pointer'>SAVE</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className='flex justify-center items-center box-border'>
      <main className='flex justify-center items-center h-fit box-border flex-col bg-stone-100'>
        <section className='p-6 box-border text-3xl mt-4 h-fit'>
          <form
            action=''
            className='grid gap-2 sm:grid-cols-2 box-border place-content-evenly'
          >
            <span>
              <label htmlFor='date' className='block'>
                Date:
              </label>
              <input
                type='date'
                name='date'
                id='date'
                className='form-date rounded-lg px-2'
                required
              />
            </span>
            <span>
              <label htmlFor='time' className='block'>
                Time:
              </label>
              <input
                type='time'
                name='time'
                id='time'
                className='form-time rounded-lg px-2'
              />
            </span>
            <span className='sm:col-span-2 mt-5'>
              <label htmlFor='type' className='block'>
                Type:
              </label>
              <div className='flex justify-evenly mt-4'>
                <span className='bg-white rounded-lg py-2 px-4 m-2'>
                  <input
                    type='radio'
                    className='form-radio mx-2 checked:bg-rose-400 checked:hover:bg-rose-400 checked:active:bg-rose-400 checked:focus:bg-rose-400 focus:bg-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400'
                    name='type'
                    id='new'
                    value='new'
                    required
                  />
                  <label htmlFor='new' className=''>
                    New
                  </label>
                </span>
                <span className='bg-white rounded-lg py-2 px-4 m-2'>
                  <input
                    type='radio'
                    className='form-radio mx-2 checked:bg-rose-400 checked:hover:bg-rose-400 checked:active:bg-rose-400 checked:focus:bg-rose-400 focus:bg-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400'
                    name='type'
                    id='followup'
                    value='followup'
                    required
                  />
                  <label htmlFor='followup'>Follow Up</label>
                </span>
              </div>
            </span>
            <span className="mt-4">
              <label htmlFor='doctor' className='block'>
                Doctor:
              </label>
              <input
                type='text'
                name='doctor'
                id='doctor'
                className='form-text rounded-lg px-4 w-full'
                required
              />
            </span>
            <span className='flex items-end justify-around'>
              {/*Yaha pe Link kar de to add new doctor page @Kartik-Gupta-2004*/}
              <span className="p-2 bg-white rounded-lg border-2">
                <Link to='/doctor'>
                <img src="Assets/doctor.png" alt='doctor' className='w-12 h-12 hover:cursor-pointer'/>
                </Link>
              </span>
            </span>
            <span className='sm:col-span-2 mt-4'>
              <label htmlFor='note' className='block'>
                Note:
              </label>
              <textarea
                name='note'
                id='note'
                cols='43'
                rows='1'
                className='form-textarea rounded-lg px-2 resize-none box-border shrink'
              />
            </span>
          </form>
        </section>
      </main>
    </div>
    </>
  );
};

export default MedicalVisitForm;
