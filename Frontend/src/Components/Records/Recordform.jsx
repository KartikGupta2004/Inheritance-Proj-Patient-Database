import React from "react";
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const RecordForm = () => {
  return (
    <>
    <div className="flex bg-fuchsia-50 justify-center items-center w-full border-b-2 border-rose-400">
      <Link exact to='/'>
    <MdOutlineKeyboardArrowLeft className='text-black text-4xl ml-1 md:ml-3 sm:6xl md:text-7xl'/>
    </Link>
        <h1 className='block text-center w-5/6 text-2xl sm:text-4xl lg:text-5xl py-4 px-8 text-rose-400 box-border font-bold '>
          Record Form
        </h1>
        </div>
        <div className='flex justify-center h-fit items-center w-full'>
      <main className='flex justify-center items-center w-full box-border flex-col bg-stone-100'>
        <section className='p-6 text-2xl lg:text-4xl box-border mt-5 w-1/2 h-full'>
          <form
            action=''
            onSubmit={(e) => e.preventDefault()}
            className=''
          >
            <span className='sm:col-span-2'>
              <label htmlFor='date' className='flex  text-gray-500 left-0 justify-start mt-10 mb-5'>
                Date:
              </label>
              <input
                type='date'
                name='date'
                id='date'
                className='w-full rounded-lg  p-5'
                required
              />
            </span>
            <div className="grid gap-2 sm:grid-cols-2 box-border place-content-center ">
            <span>
              <label htmlFor='doctor' className=' text-gray-500 flex  mt-10 mb-5'>
                Doctor:
              </label>
              <input
                type='text'
                name='doctor'
                id='doctor'
                className='form-text rounded-lg text-2xl p-4 w-full mb-5'
                required
              />
            </span>
            <span className='flex items-end justify-center sm:justify-end mb-5'>
              {/*Yaha pe Link kar de to add new doctor page @Kartik-Gupta-2004*/}
              <span className='p-2 bg-white rounded-lg border border-black'>
                <Link to='/doctor'>
                <img src="Assets/doctor.png" alt='doctor' className='w-12 h-12' />
                </Link>
              </span>
            </span>
            </div>
            <span>
              <label htmlFor='test-type' className='flex text-gray-500 left-0 justify-start mt-7 mb-4'>
                Type:
              </label>
              <select
                name='test-type'
                id='test-type'
                className='rounded-lg text-2xl p-4 w-full mb-5 px-2  required:border-red-500'
                required
              >
                <option value='' disabled selected>
                  --Please Select an Option--
                </option>
                <option value='ct-scan'>CT Scan</option>
                <option value='blood-report'>Blood Report</option>
                <option value='urine-study'>Urine Study</option>
              </select>
            </span>
            <span className='flex sm:col-span-2 justify-center my-4'>
              <label
                htmlFor='file'
                className='w-fit flex flex-col items-center cursor-pointer bg-white rounded-lg p-4 icon-shadow required:border-red-500'
              >
                <img src="Photos/add.png" alt='Choose File' className='w-12' />
                <p>Upload File</p>
                <input
                  type='file'
                  name='file'
                  id='file'
                  accept='image/* , .pdf , .docx , .doc'
                  className='hidden'
                  required
                />
              </label>
            </span>
            <span className='flex justify-center sm:col-span-2'>
              <button className='rounded-full font-bold text-3xl px-5 py-4 bg-rose-400 text-white mt-3'>
                Save Record
              </button>
            </span>
          </form>
        </section>
      </main>
      </div>
    </>
  );
};

export default RecordForm;