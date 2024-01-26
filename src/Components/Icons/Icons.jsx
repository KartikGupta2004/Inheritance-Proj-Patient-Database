import React from "react";

const Icon = (props) => {
  return (
    <span className='flex bg-white rounded-lg p-1 text-center items-center justify-center flex-col icon-shadow'>
      <img src={props.icon} alt={props.category} className='w-4/5 p-4' />
      <span className="block sm:text-sm">{props.category}</span>
    </span>
  );
};

export default Icon;