import React from "react";

import chooseFile from "D:/All Programs/Inheritance/med-id/src/icons/add.png";
const RecordForm = () => {
  return (
    <>
      <main className='flex justify-center items-center my-8 box-border flex-col '>
        <h1 className='block text-center bg-gray-200 rounded-lg mb-2 text-xl py-4 px-8 text-cyan-400 font-bold'>
          Record Type
        </h1>
        <section className='bg-gray-200 rounded-lg p-8 mx-12'>
          <form
            action=''
            onSubmit={(e) => e.preventDefault()}
            className='grid gap-8 sm:grid-cols-2'
          >
            <span>
              <label htmlFor='date' className='block'>
                Date:
              </label>
              <input
                type='date'
                name='date'
                id='date'
                className='rounded-lg px-2 border-teal-600 required:border-red-500'
                required
              />
            </span>
            <span>
              <label htmlFor='note' className='block'>
                Note:
              </label>
              <textarea
                name='note'
                id='note'
                cols='20'
                rows='1'
                className='rounded-lg px-4 resize-none'
              />
            </span>
            <span>
              <label htmlFor='doctor' className='block'>
                Doctor:
              </label>
              <input
                type='text'
                name='doctor'
                id='doctor'
                className='rounded-lg px-4 w-4/5 focus:border-teal-600  required:border-red-500'
                required
              />
            </span>
            <span>
              <label htmlFor='test-type' className='block'>
                Type:
              </label>
              <select
                name='test-type'
                id='test-type'
                className='rounded-lg px-2  required:border-red-500'
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
            <span className='flex sm:col-span-2 justify-center'>
              <label
                htmlFor='file'
                className='w-fit flex flex-col items-center cursor-pointer bg-white rounded-lg p-4 icon-shadow required:border-red-500'
              >
                <img src={chooseFile} alt='Choose File' className='w-12' />
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
              <button className='bg-white rounded-lg font-bold text-lg px-4 py-2'>
                SAVE
              </button>
            </span>
          </form>
        </section>
      </main>
    </>
  );
};

export default RecordForm;
