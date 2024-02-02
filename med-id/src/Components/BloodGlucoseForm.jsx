import React,{useState} from "react";

const BloodGlucoseForm = () => {
  const [data, setData] = useState({
    result:0, 
    unit:"mg/dL",
    type:"",
    date:"",
    time:"",
    note:""
  })
  
  const handleChange = (e) =>{
    setData({...data, [e.target.name]:e.target.value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(data);
    setData({
      result:0, 
      unit:"mg/dL",
      type:"",
      date:"",
      time:"",
      note:""
    });
  }
  return (
    <main className='flex justify-center items-center w-screen h-full box-border'>
      <div className='flex justify-center items-center w-full h-fit box-border flex-col bg-stone-100'>
        <h1 className='block text-center w-5/6 text-xl py-4 px-8 text-rose-400 box-border font-bold border-b-2 border-rose-400'>
          Blood Glucose
        </h1>

        <section className='p-6 box-border h-fit'>
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
                className='rounded-lg px-2'
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
                className='rounded-lg px-6'
                required
                onChange={handleChange}
                value={data.unit}
              >
                <option value='mg/dL'>mg/dL</option>
                <option value='mmol/dL'>mmol/dL</option>
              </select>
            </span>
            <span className='sm:col-span-2'>
              <p className='block my-1'>
                Type:
              </p>
              <div className='flex justify-around flex-wrap '>
                <span className='bg-white rounded-lg py-2 px-4 m-2'>
                  <input
                    type='radio'
                    name='type'
                    id='fasting'
                    value='fasting'
                    className='form-radio mx-2 checked:bg-rose-400 checked:hover:bg-rose-400 checked:active:bg-rose-400 checked:focus:bg-rose-400 focus:bg-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400'
                    required
                    onChange={handleChange}
                  />
                  <label htmlFor='fasting'>Fasting</label>
                </span>
                <span className='bg-white rounded-lg py-2 px-4 m-2'>
                  <input
                    type='radio'
                    name='type'
                    id='postprandial'
                    value='postprandial'
                    className='form-radio mx-2 checked:bg-rose-400 checked:hover:bg-rose-400 checked:active:bg-rose-400 checked:focus:bg-rose-400 focus:bg-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400'
                    required
                    onChange={handleChange}
                  />
                  <label htmlFor='postprandial'>Post Prandial</label>
                </span>
                <span className='bg-white rounded-lg py-2 px-4 m-2'>
                  <input
                    type='radio'
                    name='type'
                    id='random'
                    value='random'
                    className='form-radio mx-2 checked:bg-rose-400 checked:hover:bg-rose-400 checked:active:bg-rose-400 checked:focus:bg-rose-400 focus:bg-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400'
                    required
                    onChange={handleChange}
                  />
                  <label htmlFor='random'>Random</label>
                </span>
              </div>
            </span>
            <span>
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
            <span>
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
            <span className='sm:col-span-2'>
              <label htmlFor='note' className='block'>
                Note:
              </label>
              <textarea
                name='note'
                id='note'
                cols='40'
                rows='1'
                className='form-textarea rounded-lg px-2 resize-none box-border shrink w-full'
                onChange={handleChange}
                value={data.note}
              ></textarea>
            </span>
            <span className='flex justify-center sm:col-span-2'>
              <button type='submit' className='rounded-full font-bold text-lg px-4 py-2 bg-rose-400 text-white'>
                Save Record
              </button>
            </span>
          </form>
        </section>
      </div>
    </main>
  );
};

export default BloodGlucoseForm;
