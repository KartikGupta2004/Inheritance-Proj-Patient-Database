import React, { useState } from "react";
import { useAuthContext } from "../Hooks/useAuthContext";

const OxygenSat = () => {
  const [data, setData] = useState({
    result: 98,
    pulse: 80,
    date: "",
    time: "",
    rec_note: "",
  });
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const saveData = async () => {
    try {
      console.log(user.authToken);
      const response = await fetch(
        "http://localhost:5000/api/oxygen_saturation/addoxygen",
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
    if (!user) {
      setError("Please login first");
      return;
    }
    console.log(user.authToken);
    saveData();
    console.log(data);
    setData({
      result: 98,
      pulse: 80,
      date: "",
      time: "",
      rec_note: "",
    });
  };
  return (
    <main className='flex justify-center items-center w-full h-full box-border'>
      <div className='flex justify-center items-center w-full h-fit box-border flex-col bg-stone-100'>
        <h1 className='block text-center w-5/6 text-xl py-4 px-8 text-rose-400 box-border font-bold border-b-2 border-rose-400'>
          Oxygen Saturation(SpO2)
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
                  htmlFor='result'
                  className='bg-stone-300 w-full text-center rounded-ss-lg '
                >
                  Result
                </label>
                <input
                  type='number'
                  name='result'
                  id='result'
                  className='form-input w-full border-0 bg-inherit text-center focus:ring-0'
                  min={90}
                  max={100}
                  onChange={handleChange}
                  value={data.result}
                  onKeyDown={() => false}
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
                  onChange={handleChange}
                  value={data.pulse}
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
                  value={data.date}
                  onChange={handleChange}
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
                  value={data.time}
                  onChange={handleChange}
                  required
                />
              </span>
            </div>
            <div className='w-4/5 flex flex-col justify-start p-4'>
              <label htmlFor='note' className='block'>
                Note:
              </label>
              <textarea
                name='rec_note'
                id='note'
                cols='30'
                rows='2'
                className='form-textarea rounded-lg grow resize-none'
                value={data.rec_note}
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
            {error && (
              <div className=' p-2 border-2 text-red-600 border-red-600 rounded-lg'>
                {error}
              </div>
            )}
          </form>
        </section>
      </div>
    </main>
  );
};

export default OxygenSat;
