import React,{useState,useRef} from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useAuthContext } from "../../Hooks/useAuthContext";
const MedicalVisitForm = () => {
  const [data, setData] = useState({
    date:"",
    time:"",
    type:"",
    doctor:"",
    rec_note:""
  })

  const { user } = useAuthContext();
const formRef = useRef(null);
  const handleChange = (e) =>{
    setData({...data, [e.target.name]:e.target.value});
  }
  const saveData = async () => {
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
    } catch (error) {
      console.log(`Error: ${error.error}`);
    }
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(data);
    saveData();
    setData({
      date:"",
      time:"",
      type:"",
      doctor:"",
      rec_note: ""
    });
    formRef.current.reset();
  }
  return (
    <>
    <div className="flex bg-fuchsia-50 justify-center items-center w-full border-b-2 border-rose-400">
      <Link exact to='/visit'>
    <MdOutlineKeyboardArrowLeft className='text-4xl ml-1 md:ml-3 sm:6xl md:text-7xl text-black'/>
    </Link>
        <h1 className='block text-center w-5/6 text-2xl sm:text-4xl lg:text-5xl py-4 px-8 text-rose-400 box-border font-bold '>
          Medical Visit
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
              <label htmlFor='date' className='flex text-3xl text-gray-500 left-0 justify-start mt-10 mb-5'>
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
              <label htmlFor='time' className='flex text-3xl text-gray-500 left-0 justify-start mt-10 mb-5'>
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
              <label htmlFor='type' className='flex text-3xl text-gray-500 left-0 justify-start mt-10 mb-5'>
                Type:
              </label>
              <div className='flex justify-evenly items-center mt-4'>
                <span className='bg-white w-full rounded-lg text-lg sm:text-3xl p-5'>
                  <input
                    type='radio'
                    className='form-radio mx-2 checked:bg-rose-400 checked:hover:bg-rose-400 checked:active:bg-rose-400 checked:focus:bg-rose-400 focus:bg-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400'
                    name='type'
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
                    className='form-radio mx-2 checked:bg-rose-400 checked:hover:bg-rose-400 checked:active:bg-rose-400 checked:focus:bg-rose-400 focus:bg-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400'
                    name='type'
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
              <label htmlFor='doctor' className='text-3xl text-gray-500 flex left-0 justify-start mt-10 mb-5'>
                Doctor:
              </label>
              <input
                type='text'
                name='doctor'
                id='doctor'
                className='form-text rounded-lg text-2xl p-4 w-full mb-5'
                required
                onChange={handleChange}
              />
            </span>
            <span className='flex items-end justify-center sm:justify-end mb-5'>
              <span className='p-2 bg-white rounded-lg border border-black'>
                <Link to='/doctor'>
                <img src="Assets/doctor.png" alt='doctor' className='w-12 h-12' />
                </Link>
              </span>
            </span>
            <span className='sm:col-span-2'>
              <label htmlFor='note' className='flex text-3xl text-gray-500 left-0 justify-start my-2'>
                Note:
              </label>
              <input
                type='text'
                name="rec_note"
                className='form-text rounded-lg text-2xl p-4 w-full mb-5'
                required
                onChange={handleChange}
              />
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

export default MedicalVisitForm;
