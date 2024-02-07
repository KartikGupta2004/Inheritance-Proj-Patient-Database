import React, {useState} from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useAuthContext } from "../../Hooks/useAuthContext";
const OxygenSat = () => {
  const [data, setData] = useState({
    result:98,
    pulse:80,
    date:"",
    time:"",
    rec_note:""
  })
  const { user } = useAuthContext();
  const handleChange = (e) =>{
    setData({...data, [e.target.name]:e.target.value});
  }
  const saveData = async () => {
    try {
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
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(data);
    saveData();
    setData({
      result:98,
      pulse:80,
      date:"",
      time:"",
      rec_note:""
    });
  }
  return (
    <>
    <div className='bg-fuchsia-50 h-fit mx-auto'>
    <div className="flex justify-center items-center w-full py-3 border-b-2 border-rose-400">
      <Link exact to='/oxygensat'>
    <MdOutlineKeyboardArrowLeft className='text-4xl ml-1 md:ml-3 sm:6xl md:text-7xl text-black'/>
    </Link>
        <h1 className='block text-center w-5/6 text-2xl sm:text-4xl lg:text-5xl py-4 px-8 text-rose-400 box-border font-bold mb-0 '>
          Oxygen Saturation(SPO2)
        </h1>
        </div>
        <div className='flex justify-center items-center w-full'>
        <main className='flex justify-center items-center w-full box-border flex-col bg-stone-100'>
        <section className='md:p-6 text-2xl lg:text-4xl box-border mt-16 w-5/6 h-full'>
          <form
            action=''
            onSubmit={handleSubmit}
            className='flex flex-col justify-center md:items-center gap-2'
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
                  required
                  value={data.time}
                  onChange={handleChange}
                />
              </span>
            </div>
            <div className='w-4/5 flex flex-col justify-start p-6 mt-4'>
              <label htmlFor='note' className='block mb-4'>
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
            <div className='flex justify-center my-4'>
              <button className='rounded-full font-bold text-3xl px-5 py-3 bg-rose-400 text-white'>
                Save Record
              </button>
            </div>
          </form>
        </section>
    </main>
    </div>
    </div>
    </>
  );
};

export default OxygenSat;
