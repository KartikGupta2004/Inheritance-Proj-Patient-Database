import React from "react";

const BloodPressureForm = () => {
  return (
    <main className='flex mx-auto justify-center items-center max-w-screen-Login h-fit box-border'>
      <div className='flex justify-center items-center w-full h-1/2 box-border flex-col bg-stone-100'>
        <h1 className='block text-center w-5/6 text-5xl py-4 px-8 text-rose-400 box-border font-bold border-b-2 border-rose-400'>
          Blood Pressure
        </h1>
        <section className='p-6 text-4xl box-border mt-16 w-5/6 h-fit flex-grow'>
          <form
            action=''
            className='flex flex-col justify-center items-center mx-auto gap-2'
          >
            <div className='flex justify-center flex-row box-border bg-white rounded-lg w-4/5'>
              <span className='flex items-center justify-center flex-col border-r-2 border-stone-600 box-border flex-grow'>
                <label
                  htmlFor='systolic'
                  className='bg-stone-300 w-full text-center rounded-ss-lg '
                >
                  Systolic
                </label>
                <input
                  type='number'
                  name='systolic'
                  id='systolic'
                  className='form-input w-full border-0 bg-inherit text-center focus:ring-0'
                  min={40}
                  max={400}
                  defaultValue={40}
                />
              </span>
              <span className='flex items-center justify-center flex-col flex-grow'>
                <label
                  htmlFor='diastolic'
                  className='bg-stone-300 w-full text-center'
                >
                  Diastolic
                </label>
                <input
                  type='number'
                  name='diastolic'
                  id='diastolic'
                  className='form-input w-full border-none bg-inherit text-center focus:ring-0'
                  min={40}
                  max={400}
                  defaultValue={40}
                />
              </span>
              <span className='flex items-center justify-center flex-col border-l-2 border-stone-600 flex-grow'>
                <label
                  htmlFor='pulse'
                  className='bg-stone-300 w-full text-center rounded-se-lg '
                >
                  Pulse
                </label>
                <input
                  type='number'
                  name='pulse'
                  id='pulse'
                  className='form-input w-full border-none bg-inherit border-l-2 text-center focus:ring-0'
                  min={25}
                  max={250}
                  defaultValue={25}
                />
              </span>
            </div>
            <div className='flex flex-row justify-around items-center w-4/5 mt-4'>
              <span>
                <label htmlFor='date' className='block'>
                  Date:
                </label>
                <input
                  type='date'
                  name='date'
                  id='date'
                  className='form-input rounded-lg px-2'
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
                  className='form-input rounded-lg px-2'
                  required
                />
              </span>
            </div>
            <div className='w-4/5 flex flex-col justify-start p-6 mt-4'>
              <label htmlFor='note' className='block'>
                Note:
              </label>
              <textarea
                name='note'
                id='note'
                cols='30'
                rows='2'
                className='form-textarea rounded-lg grow resize-none'
              ></textarea>
            </div>
            <div className='flex justify-center my-4'>
              <button className='rounded-full font-bold text-3xl px-5 py-3 bg-rose-400 text-white'>
                Save Record
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default BloodPressureForm;
