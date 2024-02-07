import React,{useState} from "react";
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useAuthContext } from "../../Hooks/useAuthContext";
const BloodGlucoseForm = () => {
  const [data, setData] = useState({
    result:0, 
    unit:"mg/dL",
    type:"",
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
        "http://localhost:5000/api/blood_glucose/addbloodrec",
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
      result:0, 
      unit:"mg/dL",
      type:"",
      date:"",
      time:"",
      rec_note:""
    });
  }
  return (
    <>
    <div className='bg-fuchsia-50 h-fit mx-auto'>
    <div className="flex justify-center items-center w-full py-3 border-b-2 border-rose-400">
      <Link exact to='/bloodglucose'>
    <MdOutlineKeyboardArrowLeft className='text-4xl ml-1 md:ml-3 sm:6xl md:text-7xl text-black'/>
    </Link>
        <h1 className='block mb-0 text-center w-5/6 text-2xl sm:text-4xl lg:text-5xl py-4 px-8 text-rose-400 box-border font-bold '>
          Blood Glucose
        </h1>
        </div>
        <div className='flex justify-center items-center w-full'>
        <main className='flex justify-center items-center w-full box-border flex-col bg-stone-100'>
      <div className='flex justify-center items-center w-full h-fit box-border flex-col bg-stone-100'>
      <section className='p-6 text-2xl lg:text-4xl box-border mt-16  h-full'>
          <form
            action=''
            onSubmit={handleSubmit}
            className='grid grid-cols-1 sm:grid-cols-2 gap-2 box-border place-content-evenly'
          >
            <span>
              <label htmlFor='result' className='block'>
                Result:
              </label>
              <input
                type='number'
                name='result'
                id='result'
                className='rounded-lg px-2 text-2xl mt-1 w-40 md:w-auto'
                required
                onChange={handleChange}
                value={data.result}
              />
            </span>
            <span>
              <label htmlFor='unit' className='block'>
                Unit:
              </label>
              <select
                name='unit'
                id='unit'
                className='rounded-lg px-6 text-2xl mt-1'
                required
                onChange={handleChange}
                value={data.unit}
              >
                <option value='mg/dL'>mg/dL</option>
                <option value='mmol/dL'>mmol/dL</option>
              </select>
            </span>
            <span className='sm:col-span-2 mt-4'>
              <label htmlFor='type' className='block my-1'>
                Type:
              </label>
              <div className='flex justify-around flex-wrap mt-4 '>
                <span className='bg-white rounded-lg py-2 px-6 my-2 mx-4'>
                  <input
                    type='radio'
                    name='type'
                    id='fasting'
                    value='fasting'
                    className='form-radio mr-5 checked:bg-rose-400 checked:hover:bg-rose-400 checked:active:bg-rose-400 checked:focus:bg-rose-400 focus:bg-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400'
                    required
                    onChange={handleChange}
                  />
                  <label htmlFor='fasting'>Fasting</label>
                </span>
                <span className='bg-white rounded-lg py-2 px-6 m-2'>
                  <input
                    type='radio'
                    name='type'
                    id='postprandial'
                    value='postprandial'
                    className='form-radio mr-5 checked:bg-rose-400 checked:hover:bg-rose-400 checked:active:bg-rose-400 checked:focus:bg-rose-400 focus:bg-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400'
                    required
                    onChange={handleChange}
                  />
                  <label htmlFor='postprandial'>Post Prandial</label>
                </span>
                <span className='bg-white rounded-lg py-2 px-6 m-2'>
                  <input
                    type='radio'
                    name='type'
                    id='random'
                    value='random'
                    className='form-radio mr-5 checked:bg-rose-400 checked:hover:bg-rose-400 checked:active:bg-rose-400 checked:focus:bg-rose-400 focus:bg-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400'
                    required
                    onChange={handleChange}
                  />
                  <label htmlFor='random'>Random</label>
                </span>
              </div>
            </span>
            <span className="mt-5">
              <label htmlFor='date' className='block'>
                Date:
              </label>
              <input
                type='date'
                name='date'
                id='date'
                className='rounded-lg px-2'
                required
                onChange={handleChange}
                value={data.date}
              />
            </span>
            <span className="mt-5">
              <label htmlFor='time' className='block'>
                Time:
              </label>
              <input
                type='time'
                name='time'
                id='time'
                className='rounded-lg px-2'
                required
                onChange={handleChange}
                value={data.time}
              />
            </span>
            <span className='sm:col-span-2 mt-5'>
              <label htmlFor='note' className='block mb-4'>
                Note:
              </label>
              <textarea
                name='rec_note'
                id='note'
                cols='40'
                rows='1'
                className='form-textarea rounded-lg px-2 resize-none box-border shrink w-full pr-5'
                onChange={handleChange}
                value={data.rec_note}
              ></textarea>
            </span>
            <span className='flex justify-center sm:col-span-2'>
              <button className='block rounded-full font-bold text-3xl px-5 py-3 my-4 bg-rose-400 text-white'>
                Save Record
              </button>
            </span>
          </form>
        </section>
      </div>
    </main>
    </div>
    </div>
    </>
  );
};

export default BloodGlucoseForm;
