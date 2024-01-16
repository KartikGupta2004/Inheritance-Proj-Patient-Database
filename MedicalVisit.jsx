import React from 'react'
import { FaFilter } from "react-icons/fa";
import { TbArrowsSort } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuPlus } from "react-icons/lu";

function MedicalVisit() {
  return (
    <>
    <div className='bg-gray-200 h-screen text-center mx-auto'>
    <div className=' py-3 flex md:justify-between flex-wrap border-b-2 border-black mx-auto'>
    <p className='text-4xl lg:text-5xl lg:pl-40'>Medical Visit</p>
    <div className='flex text-3xl lg:text-5xl ml-auto justify-between mx-auto'>
    <FaFilter/>
    <TbArrowsSort />
    <BsThreeDotsVertical />
    </div>
    </div>
    <div className='flex justify-center items-center'>
    <div className='mx-auto flex justify-center items-center'>
    <div className='text-2xl sm:text-4xl lg:text-5xl space-y-2'>
        <img className='w-16 md:w-32 flex mx-auto justify-center' src="Medical page/information.png" alt="" />
        <p>No Data</p>
        <p>Click Add Button and</p>
        <p>Enter Medical Visit Data</p>
    </div>
    </div>
    <div className='mr-16 py-4 place-content-end '>
    <div className='text-white bg-red-500 text-6xl w-16 lg:text-8xl lg:w-24 rounded-full'>
    <LuPlus />
    </div>
    </div>    
    </div>
    </div>
    </>
  )
}

export default MedicalVisit