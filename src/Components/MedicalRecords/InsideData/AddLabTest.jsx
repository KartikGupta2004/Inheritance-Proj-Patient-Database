import { React, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const LabTestForm = () => {
  const [type, settype] = useState([]);
  const typeTrack = {
    test: "",
    result: "",
    normal: "",
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (typeTrack.test === "" || typeTrack.result === ""|| typeTrack.normal === "") return;
    settype((curr) => [...curr, typeTrack]);
    document.getElementById("test").value = "";
    document.getElementById("result").value = "";
    document.getElementById("normal").value = "";
  };
  const handleDelete = (typeBox) => {
    settype((curr) => curr.splice(curr.indexOf(typeBox), 1));
  };
  return (
    <>
        <div className='bg-fuchsia-50 h-fit mx-auto'>
    <div className="flex justify-center items-center w-full py-3 border-b-2 border-rose-400">
      <Link exact to='/labtest'>
    <MdOutlineKeyboardArrowLeft className='text-4xl ml-1 md:ml-3 sm:6xl md:text-7xl text-black'/>
    </Link>
        <h1 className='block text-center w-5/6 text-2xl sm:text-4xl lg:text-5xl py-4 px-8 text-rose-400 box-border font-bold '>
          Add Lab Test
        </h1>
        </div>
        <div className='flex justify-center items-center w-full'>
      <main className='flex justify-center items-center w-full box-border flex-col bg-stone-100'>
        <section className='p-6 text-2xl lg:text-4xl box-border mt-10 w-1/2 h-full'>
          <form
            action=''
            className='grid gap-2 sm:grid-cols-2 box-border place-content-center max-w-5/6'
          >
            <span className='flex sm:col-span-2 justify-center'>
              <label
                htmlFor='file'
                className='w-fit flex flex-col items-center cursor-pointer bg-white rounded-lg p-4 border border-black'
              >
                <img src="Assets/add.png" alt='Choose File' className='w-8 h-8' />
                <p className="text-3xl mt-3 text-gray-500">Upload Report</p>
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
            <span className='sm:col-span-2'>
              <label htmlFor='date' className='flex  text-gray-500 left-0 justify-start mt-10 mb-5'>
                Date:
              </label>
              <input
                type='date'
                name='date'
                id='date'
                className='w-full rounded-lg text-2xl p-5'
                required
              />
            </span>
            <span className='flex flex-col sm:col-span-2'>
              <div className="flex items-center justify-between mt-10 mb-5">
              <p className="text-gray-500  left-0">Type<span className="text-red-600">*</span></p>
              <div className="flex w-28">
              <button
                  type='button'
                  onClick={handleAdd}
                  className='text-white bg-rose-400 rounded-full px-4 py-2 mb-2 flex-auto  right-0'
                >
                  Add
                </button>
                </div>
              </div>
              </span>
            <span className='flex flex-col sm:col-span-2'>
              <div className='flex flex-col lg:flex-row gap-2 justify-around items-center h-fit w-full p-2 box-border bg-stone-300 rounded-lg flex-auto'>
                <input
                  type='text'
                  name='test'
                  id='test'
                  placeholder='Test'
                  onChange={(e) => (typeTrack.test = e.target.value)}
                  className='bg-white w-full rounded-lg form-input p-4 flex-auto text-2xl'
                  required
                />
                <input
                  type='text'
                  name='result'
                  id='result'
                  placeholder='Result'
                  onChange={(e) => (typeTrack.result = e.target.value)}
                  className='bg-white w-full rounded-lg form-input p-4 flex-auto text-2xl'
                  required
                />
                <input
                  type='text'
                  name='normal'
                  id='normal'
                  placeholder='Normal'
                  onChange={(e) => (typeTrack.normal = e.target.value)}
                  className='bg-white w-full rounded-lg form-input p-4 flex-auto text-2xl'
                  required
                />
              </div>
              {type.toString() && (
                <div className='bg-white rounded-lg  mt-3'>
                  <ul>
                    {type.map((typeBox, id) => {
                      return (
                        <li key={id} className='flex flex-row justify-evenly capitalize'>
                          <span className='border-b-2 border-rose-400 w-2/6 text-center'>
                            {typeBox.test}
                          </span>
                          <span className='border-b-2 border-rose-400 w-2/6 text-center'>
                            {typeBox.result}
                          </span>
                          <span className='border-b-2 border-rose-400 w-2/6 text-center'>
                            {typeBox.normal}
                          </span>
                          <button
                            type='button'
                            className='text-red-600 w-1/6'
                            onClick={() => {
                              handleDelete(typeBox);
                            }}
                          >
                            Delete
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </span>
            <span>
              <label htmlFor='doctor' className=' text-gray-500 flex left-0 justify-start mt-10 mb-5'>
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
              <span className='p-2 bg-white rounded-lg border border-black'>
                <Link to='/doctor'>
                <img src="Assets/doctor.png" alt='doctor' className='w-12 h-12' />
                </Link>
              </span>
            </span>
            <span className='sm:col-span-2'>
              <label htmlFor='note' className='flex  text-gray-500 left-0 justify-start my-2'>
                Note:
              </label>
              <input
                type='text'
                className='form-text rounded-lg text-2xl p-4 w-full mb-5'
                required
              />
            </span>
            <span className='flex justify-center sm:col-span-2'>
              <button className='rounded-full font-bold  px-5 py-4 bg-rose-400 text-white mt-3'>
                Save Record
              </button>
            </span>
          </form>
        </section>
      </main>
    </div>
    </div>
    </>
  );
};

export default LabTestForm;
