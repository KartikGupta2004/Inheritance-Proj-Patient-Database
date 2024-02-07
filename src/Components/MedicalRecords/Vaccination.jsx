import React, { useState,useEffect } from 'react'
import { FaFilter } from "react-icons/fa";
import { TbArrowsSort } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuPlus } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { PiShareNetworkLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";

function Vaccine() {
  const [vaccine,setVaccine]= useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/api/vaccine/addvaccine')
    .then((response)=>response.json())
    .then((vaccine)=>setVisits(vaccine))
    .catch((error)=>console.error("Error fetching data:",error));
  },[])

  // const handleDelete =(vaccineId)=>{
  //   fetch("",//URL HERE
  //   {
  //     method:'DELETE',
  //   })
  //   .then(()=>{
  //     setVaccine(vaccine.filter((vaccine)=>vaccine.id !== vaccineid));
  //   })
  //   .catch((error)=>console.error("Error deleting data:",error));
  // }

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  return (
    <>
    <div className='bg-fuchsia-50 h-fit text-center mx-auto'>
    <div className="flex bg-fuchsia-50 justify-center items-center w-full border-b-2 border-rose-400">
      <Link exact to='/medicalrecords'>
    <MdOutlineKeyboardArrowLeft className='text-4xl ml-1 md:ml-3 sm:6xl md:text-7xl text-black'/>
    </Link>
        <h1 className='block text-center w-5/6 text-2xl sm:text-4xl lg:text-5xl py-4 px-8 text-rose-400 box-border font-bold '>
          Vaccine
        </h1>
    <div className='flex justify-end items-end ml-auto'>
    <div>
    <div className='flex text-3xl lg:text-5xl space-x-2 mr-10 lg:mr-0 lg:space-x-5'>
    <FaFilter className='hover:cursor-pointer'/>
    <TbArrowsSort  className='hover:cursor-pointer'/>
    <BsThreeDotsVertical  className='hover:cursor-pointer'/>
    </div>
    </div>
    </div>
    </div>
    <div className='flex justify-center items-center min-h-screen'>
    <div>
    <div className='flex flex-col justify-center items-center'>
      {vaccine.length === 0 ?(
    <div className='text-2xl sm:text-4xl lg:text-5xl space-y-2 '>
        <img className='w-40 lg:w-72 flex mx-auto justify-center' src="Medical page/vaccine.jpg" alt="" />
        <p className='font-bold'>No Data</p>
        <div className='text-gray-400'>
        <p >Click Add Button and</p>
        <p>Enter Vaccine Data</p>
        </div>
    </div>
      )
      :(vaccine.map((vaccine)=>(
    <div key={vaccine.id} className='flex justify-center items-center'>
    <div className='flex w-4/5 h-fit justify-between items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
      <div className='flex'>
      <img className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gray-200 lg:p-2 rounded-lg flex' src="Photos/vaccine.png" alt="" />
      <div className='flex items-center ml-6 no-underline'>
        <div className='mb-0 text-md md:text-2xl lg:text-3xl font-medium tracking-tight text-gray-900 dark:text-white'>
        <p className='mb-0'>{vaccine.title}</p>
        <p className='mb-0 text-gray-400'>{vaccine.date}</p>
        </div>
      </div>
      </div>
      <div className='ml-20 justify-end'>
        <div className='flex mt-2 mb-3 ml-7 text-gray-500 text-xl md:text-3xl'>
          <BsThreeDotsVertical
        className='hover:cursor-pointer'
        onClick={toggleDropdown}
      />
      {isDropdownVisible && (
        <div className=' text-black absolute shadow-sm bg-white mt-12 px-2 pt-3 m:w-40 transform translate-x-[-50px]'>
          <div className='hover:cursor-pointer'>
          <p className='flex'><span><MdOutlineModeEdit /></span> Edit</p>
          </div>
          <div className='hover:cursor-pointer'>
          <p className='flex'><span><PiShareNetworkLight /></span> Share</p>
          </div>
          <div className='hover:cursor-pointer'>
          <p className='flex text-red-600'><span><RiDeleteBin6Line /></span> Delete</p>
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
</div>
      )))}
</div>
</div>
</div>

    <div className=' flex justify-end items-end hover:cursor-pointer'>
    <div className='m-10 text-white bg-red-500 text-6xl w-16 lg:text-8xl lg:w-24 rounded-full'>
    <Link
      to="/addvaccine" className='text-white'
    >
    <LuPlus />
    </Link>
    </div>
    </div>    
    </div>
    </>
  )
}

export default Vaccine