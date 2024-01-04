import React from 'react'

import { featureList } from "./RecordsList.jsx";
import Icon from "./Icon.jsx";
import history from "D:/All Programs/Inheritance/med-id/src/icons/history.png";

const Features = (props) => {
  return (
    <main className='flex justify-center items-center mt-6'>
      <section className='w-4/5 bg-stone-300 p-6 rounded-lg'>
        <div
          className='bg-white mb-4 rounded-lg px-4 flex justify-center sm:justify-start flex-wrap hover:-translate-y-px hover:shadow-md transition-transform'
          onClick={() => console.log("hewwo")}
        >
          <img src={history} alt='' className='w-8 py-4' />
          <span className='flex-col p-4'>History List</span>
        </div>
        <div className='grid grid-cols-2 gap-4  md:grid-cols-5'>
          {featureList.map((icon) => {
            return <Icon {...icon} key={icon.id} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Features