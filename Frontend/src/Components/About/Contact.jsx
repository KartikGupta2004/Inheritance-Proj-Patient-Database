import React from 'react'
import Lottie from "react-lottie";
import animationData from "../../Lotte/Contact.json";
function ContactUs() {
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
    <div className='bg-MedicalBg bg-cover'>
      <div className='flex justify-between'>
    <div className="mx-auto px-4 py-8 flex justify-center items-center md:py-40">
    <p class="block max-w-4xl shadow-lg p-6 bg-white border md:mr-20 border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="text-3xl md:text-5xl font-bold py-4 tracking-tight text-gray-900 dark:text-white">Contact Us</h5>
<p class="mb-4 text-2xl md:text-3xl font-normal text-gray-700 dark:text-gray-400">Welcome to our Contact Us page! We value your feedback and inquiries. Whether you have a question about our services, need assistance, or want to provide feedback, we're here to help. Feel free to reach out to us using the contact form below, and we'll get back to you as soon as possible. Thank you for reaching out to us!</p>
</p>
  </div>
  
  <div className='hidden 2200:flex justify-center items-center my-5 transform translate-x-[-250px]'>
              <Lottie options={defaultOptions} width={1000} height={1000}/>
          </div>
  </div>
  </div>
    </>
  )
}

export default ContactUs