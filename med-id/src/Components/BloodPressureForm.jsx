import React, { useState } from "react";

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

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const saveData = async () => {
    try {
      const authToken = localStorage.getItem("auth-token");
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
    saveData();
    setData({
      systolic: 120,
      diastolic: 80,
      pulse: 80,
      date: "",
      time: "",
      rec_note: "",
    });
  };
  return (
    <main className='flex justify-center items-center w-screen h-full box-border'>
      <div className='flex justify-center items-center w-full h-fit box-border flex-col bg-stone-100'>
        <h1 className='block text-center w-5/6 text-xl py-4 px-8 text-rose-400 box-border font-bold border-b-2 border-rose-400'>
          Blood Pressure
        </h1>
        <section className='p-6 box-border w-5/6 h-fit flex-grow'>
          <form
            action=''
            onSubmit={handleSubmit}
            className='flex flex-col justify-center items-center gap-2'
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
                  defaultValue={120}
                  onChange={handleChange}
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
                  defaultValue={80}
                  onChange={handleChange}
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
                  defaultValue={80}
                  onChange={handleChange}
                />
              </span>
            </div>
            <div className='flex flex-row justify-around items-center w-4/5'>
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </span>
            </div>
            <div className='w-4/5 flex flex-col justify-start p-6'>
              <label htmlFor='note' className='block'>
                Note:
              </label>
              <textarea
                name='rec_note'
                id='note'
                cols='30'
                rows='2'
                className='form-textarea rounded-lg grow resize-none'
                onChange={handleChange}
              ></textarea>
            </div>
            <div className='flex justify-center'>
              <button
                type='submit'
                className='rounded-full font-bold text-lg px-4 py-2 bg-rose-400 text-white'
              >
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
