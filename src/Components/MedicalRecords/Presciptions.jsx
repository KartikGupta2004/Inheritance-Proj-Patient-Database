import React, { useState,useEffect } from 'react'
import { FaFilter } from "react-icons/fa";
import { TbArrowsSort } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuPlus } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { GoTriangleUp } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";
import { GoPaperclip } from "react-icons/go";
import { MdOutlineModeEdit } from "react-icons/md";
import { PiShareNetworkLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
function Presciptions() {
  const [prescription,setPrescription]= useState([]);

  useEffect(() => {
    // Fetch data from the backend here
    // Example fetch call
    fetch('http://localhost:5000/api/prescription/addprescription')
      .then((response) => response.json())
      .then((data) => setprescription(data))
      .catch((error) => console.error('Error fetching details:', error));
  }, []);

  const handleDelete = (prescriptionId) => {
    // Implement delete functionality here
    // Example delete call
    fetch(`http://localhost:5000/api/prescription/addprescription/${prescriptionId}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Update visits state after successful delete
        setPrescription(prescription.filter((prescription) => prescription.id !== prescriptionId));
      })
      .catch((error) => console.error('Error deleting data:', error));
  };
  const [selectedOption, setSelectedOption] = useState('NULL');

  const handleOptionClick = (option) => {
    setSelectedOption((prevOption) =>
      prevOption === option ? 'NULL' : option
    );
  };
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
          Prescriptions
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
      {prescription.length === 0 ?(
    <div className='text-2xl sm:text-4xl lg:text-5xl space-y-2 '>
        <img className='w-40 lg:w-72 flex mx-auto justify-center' src="Medical page/prescription.jpg" alt="" />
        <p className='font-bold mt-10'>No Data</p>
        <div className='text-gray-400'>
        <p >Click Add Button and</p>
        <p>Enter Prescriptions Data</p>
        </div>
    </div>
      ):(
    prescription.map((prescription)=>(
    <div key={prescription.id} className='flex justify-center items-center'>
  <div className='w-4/5 text-center '>
    <div className='flex h-fit justify-between items-center p-3 md:p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
      <div className='flex'>
      <img className='w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-gray-200 lg:p-2 rounded-lg flex' src="Photos/prescription.png" alt="" />
      <div className='flex items-center ml-6 no-underline'>
      <div className='mb-0 text-md md:text-2xl lg:text-3xl font-medium tracking-tight text-gray-900 dark:text-white'>
        <p className='mb-0'>Prescriptions</p>
        <p className='mb-0 text-gray-400'>{prescription.date}</p>
        </div>
      </div>
      </div>
      <div className='lg:ml-20 justify-end'>
        <div className='flex mb-3 ml-7 text-gray-500 text-xl md:text-3xl'>
          <GoPaperclip className='mr-4 sm:mr-6'/>
          <BsThreeDotsVertical
        className='hover:cursor-pointer'
        onClick={toggleDropdown}
      />
      {isDropdownVisible && (
        <div className=' text-black absolute shadow-sm bg-white mt-12 px-2 pt-3 w-32 sm:w-44 transform translate-x-[-60px]'>
          <p className='flex'><span><MdOutlineModeEdit /></span> Edit</p>
          <p className='flex'><span><PiShareNetworkLight /></span> Share</p>
          <p className='flex text-red-600'><span><RiDeleteBin6Line /></span> Delete</p>
        </div>
      )}
        </div>
        <button
          className='flex text-md md:text-2xl items-center bg-gray-200 rounded-full w-fit px-3 py-2 sm:px-4 md:px-5 md:py-2 no-underline text-gray-500'
          onClick={() => handleOptionClick('Details')}
        >
          Details{' '}
          {selectedOption === 'Details' ? (
            <GoTriangleDown className='w-5 h-5 md:w-8 md:h-8 text-black' />
          ) : (
            <GoTriangleUp className='w-5 h-5 md:w-8 md:h-8 text-black' />
          )}
        </button>
      </div>
    </div>

    {selectedOption === 'Details' && (
      <div className='block bg-gray-100 border-t-2 border-y-yellow-100 pt-5  text-2xl rounded-lg'>
        <div className='flex flex-col justify-center items-center'>
        <p className='text-gray-500'>Drug: <span className='text-black'>{prescription.drug}</span> </p>
        <p className='text-gray-500'>Dose: <span className='text-black'>{prescription.dose}</span></p>
        <p className='flex ml-4 justify-start text-gray-500'>Doctor:<span className='ml-3 text-black'>{prescription.doctor}</span></p>
        <p className='flex justify-start text-gray-500'>Notes:<span className='ml-3 text-black'>{prescription.notes}</span></p>
      </div>
      </div>
    )}
  </div>
</div>
      )))}
      </div>
    </div>
    </div>


    <div className=' flex justify-end items-end mx-auto'>
    <div className='m-10 text-white bg-red-500 text-6xl w-16 lg:text-8xl lg:w-24 rounded-full hover: cursor-pointer'>
    <Link
      to="/addprescriptions" className='text-white'
    >
    <LuPlus />
    </Link>
    </div>
    </div>    
    </div>
    </>
  )
}

export default Presciptions