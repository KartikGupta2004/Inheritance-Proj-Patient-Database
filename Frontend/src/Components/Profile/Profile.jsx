import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

function Profile() {
  const initialData = {
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    bloodgroup: '',
    age: ''
  };

  const [data, setData] = useState(initialData);

  useEffect(() => {
    const savedData = localStorage.getItem('profileData');
    setData(savedData ? JSON.parse(savedData) : initialData);
  }, []);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', data);
    localStorage.setItem('profileData', JSON.stringify(data));
  };

  const handleReset = () => {
    setData(initialData);
    localStorage.removeItem('profileData');
  };

  return (
    <>
      <div className='bg-fuchsia-50 h-fit mx-auto'>
        <div className="flex bg-fuchsia-50 justify-center items-center w-full border-b-2 border-rose-400">
          <Link to='/'>
            <MdOutlineKeyboardArrowLeft className='text-4xl ml-1 md:ml-3 sm:6xl md:text-7xl text-black'/>
          </Link>
          <h1 className='block text-center w-5/6 text-2xl sm:text-4xl lg:text-5xl py-4 px-8 text-rose-400 box-border font-bold '>
            Profile
          </h1>
        </div>
        <div className='flex justify-center items-center py-16 w-screen bg-[url("Assets/Profile.jpg")] bg-cover bg-center h-screen'>
          <form onSubmit={handleSubmit} className="mx-auto 2200:w-1/5">
            <input
              className='text-xl md:text-2xl lg:text-3xl rounded-lg pl-7 py-3 block w-full border-2 border-gray-300 bg-gray-100 text-black mb-4'
              type='text'
              name='firstname'
              placeholder='First Name'
              value={data.firstname}
              onChange={handleChange}
              required
            />
            <input
              className='text-xl md:text-2xl lg:text-3xl rounded-lg pl-7 py-3 block w-full border-2 border-gray-300 bg-gray-100 text-black mb-4'
              type='text'
              name='lastname'
              placeholder='Last Name'
              value={data.lastname}
              onChange={handleChange}
              required
            />
            <input
              type='email'
              placeholder='Email'
              className='text-xl md:text-2xl lg:text-3xl rounded-lg pl-7 py-3 block w-full border-2 bg-gray-100 text-black border-slate-300 shadow-sm mb-4'
              name='email'
              value={data.email}
              onChange={handleChange}
              autoComplete='on'
            />
            <input
              className='text-xl md:text-2xl lg:text-3xl rounded-lg pl-7 py-3 block w-full border-2 border-gray-300 bg-gray-100 text-black mb-4'
              type='tel'
              name='mobile'
              placeholder='Mobile No.'
              value={data.mobile}
              onChange={handleChange}
              required
            />
            <label className="flex flex-col mt-3 text-xl md:text-2xl lg:text-3xl md:flex-row text-black font-bold">Blood Group</label>
            <select
                className="w-full mt-3 border-2 border-gray-300 bg-gray-100 text-black p-3 text-xl md:text-2xl lg:text-3xl rounded-lg"
                name="bloodgroup"
                value={data.bloodtype}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="positive">+ve</option>
                <option value="negative">-ve</option>
              </select>
            <select
                className="w-full my-3 border-2 border-gray-300 bg-gray-100 text-black p-3 text-xl md:text-2xl lg:text-3xl rounded-lg"
                name="bloodgroup"
                value={data.bloodgroup}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
                <option value="O">O</option>
              </select>
            <input
              className='text-xl md:text-2xl lg:text-3xl rounded-lg pl-7 py-3 block w-full border-2 border-gray-300 bg-gray-100 text-black mb-4'
              type='number'
              name='age'
              placeholder='Age'
              value={data.age}
              onChange={handleChange}
            />
            <div className="flex justify-between">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white text-xl md:text-2xl lg:text-3xl font-bold py-3 px-7 rounded mr-2">Save</button>
              <button type="button" onClick={handleReset} className="bg-gray-400 hover:bg-gray-600 text-white text-xl md:text-2xl lg:text-3xl font-bold py-3 px-7 md:py-4 md:px-6 rounded ml-2">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;
