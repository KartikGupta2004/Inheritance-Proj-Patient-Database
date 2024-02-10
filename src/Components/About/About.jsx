import React from 'react'
import Lottie from "react-lottie";
import animationData from "../../Lotte/About.json";
export default function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
    return (
        <>
        <div className=" items-center justify-center py-24 mx-auto lg:my-6 bg-MedicalBg flex">
          <div className=''>
    <div className="flex justify-center items-center flex-col flex-wrap text-center">
      <span className=" text-black text-3xl md:text-4xl lg:text-6xl font-black  tracking-wide smd:font-extrabold">
      Features
      </span>
      <span className=" w-72 sm:w-96 lg:w-fit font-semibold md:px-0 text-xl text-gray-700 md:text-2xl lg:text-3xl mt-4 1500:w-fit max-w-lg md:max-w-7xl mx-auto">
      Empower yourself with comprehensive healthcare tools, from managing medical records and symptom assessment via chatbot to finding nearby pharmacies and staying updated with daily medical news.
      </span>
    </div>
    <div className="flex justify-center items-center flex-col mx-auto md:flex-row flex-wrap mt-6 max-w-7xl">
        <div className="flex flex-grow flex-col max-w-md p-6 mt-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:ml-4">
    <img className='w-16 h-16 m-2' src="Assets/medical-history.png" alt="" />
    <a >
      <h5 className="mb-2 text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white pr-10 ">
        Maintenance of medical record
      </h5>
    </a>
    <p className="mb-3 text-xl md:text-2xl font-normal text-gray-500 dark:text-gray-400 pr-10 sm:pr-0">
    Our website provides a way to securely store your data and make it easily accessible whenever and wherever you require.The records are maintained in our robust database system.
    </p>
      </div>
      <div className="flex flex-grow flex-col max-w-md mt-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:ml-4">
      <img className='w-16 h-16 m-2' src="Assets/Chatbot.png" alt="" />
    <a >
      <h5 className="mb-2 text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white pr-10 ">
      Symptom Assessment via Chatbot
      </h5>
    </a>
    <p className="mb-3 text-xl md:text-2xl font-normal text-gray-500 dark:text-gray-400 pr-10 sm:pr-0">
    Our website provides an innovative symptom assessment service via a interactive health chatbot which can assess and answer queries related to your symptoms quicky and with accuracy
    </p>
      </div>
      <div className="flex flex-grow flex-col max-w-md p-6 mt-4  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:ml-4">
      <img className='w-16 h-16 m-2' src="Assets/newspaper.png" alt="" />
    <a >
      <h5 className="mb-2 text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white pr-10 ">
      Daily Medical News
      </h5>
    </a>
    <p className="mb-3 text-xl md:text-2xl font-normal text-gray-500 dark:text-gray-400">
    Our website provides daily medical news which is regularly updated and is easily accessible.
It will give you information about medicine, general health and wellbeing, any diseases to look out for and the most recent innovations in medicine and healthcare, at your fingertips.
    </p>
      </div>
      <div className="flex flex-grow flex-col max-w-md p-6 mt-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:ml-4">
      <img className='w-16 h-16 m-2' src="Assets/Nearby.png" alt="" />
    <a >
      <h5 className="mb-2 text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white pr-10 ">
      Nearby Pharmacy Finder
      </h5>
    </a>
    <p className="mb-3 text-xl md:text-2xl font-normal text-gray-500 dark:text-gray-400">
    Locate nearby pharmacies effortlessly, ensuring prompt access to prescription refills and over-the-counter medications whenever you need them, offering convenience when seeking urgent or routine healthcare needs
    </p>
      </div>
    </div>
    </div>
    <div className='hidden 2200:flex justify-end mx-auto'>
              <Lottie options={defaultOptions} width={1200} height={1200}/>
          </div>
  </div>      
        </>
    );
}