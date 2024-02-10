import React from 'react'
import Lottie from "react-lottie";
import animationData from "../Lotte/Privacy.json";
function PP_TC() {
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
    <div className="mx-auto px-4 py-8 flex flex-col md:py-40">
    <p class="block max-w-4xl shadow-lg p-6 bg-white border md:mr-20 border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="text-3xl md:text-5xl font-bold py-4 tracking-tight text-gray-900 dark:text-white">Privacy Policy</h5>
<p class="mb-4 text-2xl md:text-3xl font-normal text-gray-700 dark:text-gray-400">We collect data for appointments and inquiries, using it for communication and internal analytics. We maintain security measures and may use third-party services. We may disclose information as required by law. We reserve the right to update our policy. Contact us with questions.</p>
</p>
    <p class="block max-w-4xl mt-10 shadow-lg p-6 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="text-3xl md:text-5xl font-bold py-4 tracking-tight text-gray-900 dark:text-white">Terms and Conditions</h5>
<p class="mb-4 text-2xl md:text-3xl font-normal text-gray-700 dark:text-gray-400">By using our website, users agree to adhere to these terms. We own the content on our site and users must not use, copy, or distribute it without permission. Users agree to indemnify us against any claims or losses resulting from their use of the site.</p>
</p>
  </div>
  
  <div className='hidden 2200:flex justify-center items-center transform translate-x-[-250px]'>
              <Lottie options={defaultOptions} width={1000} height={1000}/>
          </div>
  </div>
  </div>
    </>
  )
}

export default PP_TC