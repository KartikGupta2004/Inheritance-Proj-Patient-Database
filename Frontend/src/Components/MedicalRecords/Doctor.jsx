import React from 'react'
import { FaFilter } from "react-icons/fa";
import { TbArrowsSort } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { LiaLanguageSolid } from "react-icons/lia";
function Doctor() {
  return (
    <>
    <div className=' bg-[url("Assets/App.jpg")] bg-cover  h-fit text-center mx-auto'>
    <div className="flex bg-fuchsia-50 justify-center items-center w-full border-b-2 border-rose-400">
      <Link exact to='/medicalrecords'>
    <MdOutlineKeyboardArrowLeft className='text-4xl ml-1 md:ml-3 sm:6xl md:text-7xl text-black'/>
    </Link>
        <h1 className='block text-center w-5/6 text-2xl sm:text-4xl lg:text-5xl py-4 px-8 text-rose-400 box-border font-bold '>
          Doctor's List
        </h1>
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
    
    <div className=" items-center justify-center py-24 lg:my-6">
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mx-auto flex-wrap mt-6 max-w-screen-1576">

<div className="px-10 bg-white md:px-0 text-sm text-gray-700 font-medium lg:text-lg mt-4 w-full max-w-lg mx-auto">
    <div className='flex justify-center mt-5'>
        <img className="rounded-full" src="https://cdn.askapollo.com/live/images/doctors/defaultprofilepicbig.jpg" alt="" />
        </div>
    <div className="p-5 rounded-b-xl text-center ">
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Dr Aabha Nagral</h5>
            <p className="text-lime-700">Hepatology | 28 years exp</p>
        
        <p className="mb-3 font-normal flex text-gray-700 dark:text-gray-400"><span><CiLocationOn className="w-8 h-8 mr-2"/></span>Apollo Hospitals Navi Mumbai</p>
        <p className="mb-3 font-normal flex text-gray-700 dark:text-gray-400"><span><LiaLanguageSolid className="w-8 h-8 mr-2"/></span>English, ગુજરાતી, हिंदी, मराठी, ਪੰਜਾਬੀ</p>
        <p className="mb-3 font-normal flex text-gray-700 dark:text-gray-400"><img className='w-8 h-8 mr-2' src="https://www.askapollo.com/assets/images/qualification.svg" alt="" />MBBS, DNB(General Medicine), DNB (Gastroenterology) MRCP (SCE - Gastroenterology)</p>
        <div className='my-4'>
            <p className='font-bold text-2xl'>TUE & THU</p>
            <p className='text-blue-400 text-xl mt-3'>(11:00 AM - 04:00PM)</p>
        </div>
        <Link exact to="/booking">
        <p className="inline-flex items-center px-4  py-3 sm:px-4  sm:py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 no-underline md:text-2xl">
            Book an Appointment
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </p>
        </Link>
    </div>
</div>
<div className="px-10 bg-white md:px-0 text-sm text-gray-700 font-medium lg:text-lg mt-4 w-full max-w-lg mx-auto">
    <div className='flex justify-center mt-5'>
        <img className="rounded-full" src="https://cdn.askapollo.com/live/images/doctors/defaultprofilepicmale.jpg" alt="" />
        </div>
    <div className="p-5 rounded-b-xl text-center ">
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Dr Abhidha Shah</h5>
            <p className="text-lime-700">Neurosurgery | 20 years exp</p>
        
        <p className="mb-3 font-normal flex text-gray-700 dark:text-gray-400"><span><CiLocationOn className="w-8 h-8 mr-2"/></span>Apollo Hospitals Navi Mumbai</p>
        <p className="mb-3 font-normal flex text-gray-700 dark:text-gray-400"><span><LiaLanguageSolid className="w-8 h-8 mr-2"/></span>English, मराठी</p>
        <p className="mb-3 font-normal flex text-gray-700 dark:text-gray-400"><img className='w-8 h-8 mr-2' src="https://www.askapollo.com/assets/images/qualification.svg" alt="" />FNB PAEDIATRIC HAEMATOONCOLOGY AND BMT (APOLLO CHENNAI)-2013 MBBS, MS, MCh (Neurosurgery)</p>
        <div className='my-4'>
            <p className='font-bold text-2xl'>TUE & THU</p>
            <p className='text-blue-400 text-xl mt-3'>(04:00 PM-06:00 PM)</p>
        </div>
        <Link exact to="/booking">
        <p className="inline-flex items-center px-4  py-3 sm:px-4  sm:py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 no-underline md:text-2xl">
            Book an Appointment
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </p>
        </Link>
    </div>
</div>
<div className="px-10 bg-white md:px-0 text-sm text-gray-700 font-medium lg:text-lg mt-4 w-full max-w-lg mx-auto">
    <div className='flex justify-center mt-5'>
        <img className="rounded-full" src="https://cdn.askapollo.com/live/images/doctors/defaultprofilepicmale.jpg" alt="" />
        </div>
    <div className="p-5 rounded-b-xl text-center ">
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Dr Abhishek Hoshing</h5>
            <p className='text-lime-700'>Opthalmology | 8 years exp</p>
        
        <p className="mb-3 font-normal flex text-gray-700 dark:text-gray-400"><span><CiLocationOn className="w-8 h-8 mr-2"/></span>Apollo Hospitals Navi Mumbai</p>
        <p className="mb-3 font-normal flex text-gray-700 dark:text-gray-400"><span><LiaLanguageSolid className="w-8 h-8 mr-2"/></span>English, বাংলা, हिंदी, मराठी, தமிழ், తెలుగు</p>
        <p className="mb-3 font-normal flex text-gray-700 dark:text-gray-400"><img className='w-8 h-8 mr-2' src="https://www.askapollo.com/assets/images/qualification.svg" alt="" />MBBS, DNB , "Fellowship in Corneal Transplant surgeries, Refractive Surgery and Ocular Surface diseases"</p>
        <div className='my-4'>
            <p className='font-bold text-2xl'>MON- SAT</p>
            <p className='text-blue-400 text-xl mt-3'>(10:00 AM-04:00 PM)</p>
        </div>
        <Link exact to="/booking">
        <p className="inline-flex items-center px-4  py-3 sm:px-4  sm:py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 no-underline md:text-2xl">
            Book an Appointment
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </p>
        </Link>
    </div>
</div>
<div className="px-10 bg-white md:px-0 text-sm text-gray-700 font-medium lg:text-lg mt-4 w-full max-w-lg mx-auto">
    <div className='flex justify-center mt-5'>
        <img className="rounded-full" src="https://cdn.askapollo.com/live/images/doctors/defaultprofilepicmale.jpg" alt="" />
        </div>
    <div className="p-5 rounded-b-xl text-center ">
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Dr Abhay Challani</h5>
            <p className="text-lime-700">Orthopaedics | 16 years exp</p>
        
        <p className="mb-3 font-normal flex text-gray-700 dark:text-gray-400"><span><CiLocationOn className="w-8 h-8 mr-2"/></span>Apollo Hospitals Navi Mumbai</p>
        <p className="mb-3 font-normal flex text-gray-700 dark:text-gray-400"><span><LiaLanguageSolid className="w-8 h-8 mr-2"/></span>English</p>
        <p className="mb-3 font-normal flex text-gray-700 dark:text-gray-400"><img className='w-8 h-8 mr-2' src="https://www.askapollo.com/assets/images/qualification.svg" alt="" />M.S orthopaedics</p>
        <div className='my-4'>
            <p className='font-bold text-2xl'>TUE, THU, Fri</p>
            <p className='text-blue-400 text-xl mt-3'>(05:00 PM-06:00 PM)</p>
        </div>
        <Link exact to="/booking">
        <p className="inline-flex items-center px-4  py-3 sm:px-4  sm:py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 no-underline md:text-2xl">
            Book an Appointment
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </p>
        </Link>
    </div>
</div>
<div className="px-10 bg-white md:px-0 text-sm text-gray-700 font-medium lg:text-lg mt-4 w-full max-w-lg mx-auto">
    <div className='flex justify-center mt-5'>
        <img className="rounded-full" src="https://cdn.askapollo.com/live/images/doctors/defaultprofilepicmale.jpg" alt="" />
        </div>
    <div className="p-5 rounded-b-xl text-center ">
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Dr Abhay Uppe</h5>
            <p className="text-lime-700">Pulmonology | 17 years exp</p>
        
        <p className="mb-3 font-normal flex text-gray-700 dark:text-gray-400"><span><CiLocationOn className="w-8 h-8 mr-2"/></span>Apollo Hospitals Navi Mumbai</p>
        <p className="mb-3 font-normal flex text-gray-700 dark:text-gray-400"><span><LiaLanguageSolid className="w-8 h-8 mr-2"/></span>English, हिंदी, मराठी</p>
        <p className="mb-3 font-normal flex text-gray-700 dark:text-gray-400"><img className='w-8 h-8 mr-2' src="https://www.askapollo.com/assets/images/qualification.svg" alt="" />MBBS, MD</p>
        <div className='my-4'>
            <p className='font-bold text-2xl'>TUE, THU, SAT</p>
            <p className='text-blue-400 text-xl mt-3'>(08:00 AM-09:30 AM)</p>
        </div>
        <Link exact to="/booking">
        <p className="inline-flex items-center px-4  py-3 sm:px-4  sm:py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 no-underline md:text-2xl">
            Book an Appointment
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </p>
        </Link>
    </div>
</div>

<div className="px-10 bg-white md:px-0 text-sm text-gray-700 font-medium lg:text-lg mt-4 w-full max-w-lg mx-auto">
    <div className='flex justify-center mt-5'>
        <img className="rounded-full" src="https://cdn.askapollo.com/live/images/doctors/defaultprofilepicmale.jpg" alt="" />
        </div>
    <div className="p-5 rounded-b-xl text-center ">
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Dr Abhijit Bagde</h5>
            <p className="text-lime-700">Pediatrics | 9 years exp</p>
        
        <p className="mb-3 font-normal flex text-gray-700 dark:text-gray-400"><span><CiLocationOn className="w-8 h-8 mr-2"/></span>Apollo Hospitals Navi Mumbai</p>
        <p className="mb-3 font-normal flex text-gray-700 dark:text-gray-400"><span><LiaLanguageSolid className="w-8 h-8 mr-2"/></span>English, हिंदी, मराठी</p>
        <p className="mb-3 font-normal flex text-gray-700 dark:text-gray-400"><img className='w-8 h-8 mr-2' src="https://www.askapollo.com/assets/images/qualification.svg" alt="" />MBBS, DNB (Paed), FNB, MNAMS</p>
        <div className='my-4'>
            <p className='font-bold text-2xl'>MON- SAT</p>
            <p className='text-blue-400 text-xl mt-3'>(06:00 PM-08:30 PM)</p>
        </div>
        <Link exact to="/booking">
        <p className="inline-flex items-center px-4  py-3 sm:px-4  sm:py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 no-underline md:text-2xl">
            Book an Appointment
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </p>
        </Link>
    </div>
</div>
    </div>
  </div>   
    </div>
    </>
  )
}

export default Doctor