import React from 'react'

import { featureList } from "./RecordList.jsx";
import Icon from "./Icon.jsx";

function Features() {
  return (
    <main className='flex justify-center items-center header py-5'>
      <section className='w-4/5 bg-stone-300 p-6 rounded-lg box-border'>
        <div
          className='bg-white mb-4 rounded-lg px-4 flex justify-center items-center sm:justify-start flex-wrap hover:-translate-y-px hover:shadow-md transition-transform
          box-border'
        >
          <img src="Photos/history.png" alt='' className='w-8 py-4' />
          <span className='flex-col ml-2 lg:p-4 text-xl md:text-4xl'>History List</span>
        </div>
        <div className='grid grid-cols-2 gap-4 1576:grid-cols-5 box-border'>
          {featureList.map((icon) => {
            return <Icon {...icon} key={icon.id} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default Features