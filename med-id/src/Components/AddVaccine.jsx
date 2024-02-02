import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

function AddVaccine() {
    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        if(!data["title"] || !data["date"]) return;
        console.log(data);
        e.currentTarget.reset();
    }
    return (
        <>
            <div className='bg-fuchsia-50 h-fit mx-auto'>
                <div className=' py-3 flex flex-wrap border-b-2 border-black items-center justify-center '>
                    <Link exact to='/vaccine'>
                        <MdOutlineKeyboardArrowLeft className='text-4xl ml-1 md:ml-3 sm:6xl md:text-7xl' />
                    </Link>
                    <p className='text-2xl sm:text-4xl lg:text-6xl lg:pl-40'>Vaccine</p>
                    <div className='flex justify-end items-end ml-auto'>
                        <div>
                            <div className='flex text-3xl lg:text-5xl mr-10 lg:mr-0'>
                                <div className="flex mx-auto w-24 sm:w-auto text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full px-5 py-2.5 text-center mr-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                    <img className='hidden sm:flex w-10 sm:w-12 md:w-16 mr-4' src="Medical page/tick.png" alt="" />
                                    <p className='text-xl  sm:text-3xl md:text-4xl sm:mt-1 md:mt-3 justify center items-center' onClick={() => document.getElementById('submit-button').click()}>SAVE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='h-1/2 flex flex-col text-3xl sm:text-5xl text-start Login:ml-5 justify-center mx-auto'>
                    <div className='mt-40 mb-20'>
                        <p className=' ml-3 text-gray-400 font-medium'>Title<span className='text-red-600'>*</span></p>
                        <input className='text-2xl sm:text-5xl my-5 ml-1 border-2  border-gray-200 rounded-lg max-w-7xl ' type="text" name="title" id="title" required/>
                    </div>
                    <div className='mb-40 mt-20'>
                        <p className=' ml-3 text-gray-400 font-medium'>Date:</p>
                        <input className='text-2xl sm:text-4xl my-5 ml-1 border-2 p-6 border-gray-200 rounded-lg max-w-7xl ' type="date" name="date" id="date" required/>
                    </div>
                    <input type="submit" id='submit-button' hidden/>
                </form>
            </div>
        </>
    )
};
export default AddVaccine;