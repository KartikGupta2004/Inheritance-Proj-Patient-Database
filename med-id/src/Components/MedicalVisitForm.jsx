import React from "react";
import doctor from '../icons/doctor.png';
const MedicalVisitForm = () => {
  return (
    <div className='flex justify-center items-center h-screen box-border'>
      <main className='flex justify-center items-center w-full h-fit box-border flex-col bg-stone-100'>
        <h1 className='block text-center w-5/6 text-xl py-4 px-8 text-rose-400 box-border font-bold border-b-2 border-rose-400'>
          Add Medical Visit
        </h1>
        <section className='p-6 box-border h-fit'>
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
            <span className='sm:col-span-2'>
              <label htmlFor='type' className='block'>
                Type:
              </label>
              <div className='flex justify-evenly'>
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
            <span>
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
                <img src={doctor} alt='doctor' className='w-8 h-8'/>
              </span>
            </span>
            <span className='sm:col-span-2'>
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
            <span className='flex justify-center sm:col-span-2'>
              <button className='rounded-full font-bold text-lg px-4 py-2 bg-rose-400 text-white'>
                Save Record
              </button>
            </span>
          </form>
        </section>
      </main>
    </div>
  );
};

export default MedicalVisitForm;
