import React from 'react'
import { FaFilter } from "react-icons/fa";
import { TbArrowsSort } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuPlus } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

function BloodGlucose() {
  return (
    <>
    <div className='bg-fuchsia-50 h-fit text-center mx-auto'>
    <div className=' py-3 flex flex-wrap border-b-2 border-black '>
    <Link exact to='/medicalrecords'>
    <MdOutlineKeyboardArrowLeft className='text-4xl ml-3 lg:text-5xl'/>
    </Link>
    <p className='text-3xl sm:text-4xl lg:text-5xl lg:pl-40'>Blood Glucose</p>
    <div className='flex justify-end items-end ml-auto'>
    <div>
    <div className='flex text-3xl lg:text-5xl space-x-2 mr-10 lg:mr-0 lg:space-x-4'>
    <FaFilter/>
    <TbArrowsSort />
    <BsThreeDotsVertical />
    </div>
    </div>
    </div>
    </div>
    <div className='flex justify-center items-center min-h-screen'>
    <div>
    <div className='flex flex-col justify-center items-center'>
    <div className='text-2xl sm:text-4xl lg:text-5xl space-y-2 '>
        <img className='w-40 lg:w-72 flex mx-auto justify-center' src="Medical page/glucose-meter.jpg" alt="" />
        <p className='font-bold'>No Data</p>
        <div className='text-gray-400'>
        <p >Click Add Button and</p>
        <p>Enter Blood Glucose Data</p>
        </div>
    </div>
    </div>
    </div>
    </div>
    <div className=' flex justify-end items-end mx-auto'>
    <div className='m-10 text-white bg-red-500 text-6xl w-16 lg:text-8xl lg:w-24 rounded-full hover:cursor-pointer'>
    <Link
      to="/addbloodglucose"
    >
    <LuPlus />
    </Link>
    </div>
    </div>    
    </div>
    </>
  )
}

export default BloodGlucose