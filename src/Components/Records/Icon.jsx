import React from "react";
import { Link } from "react-router-dom";

const Icon = (props) => {
  return (
    <Link to={ '/' + props.id}>
    <span className='flex bg-white rounded-lg p-1 text-center items-center justify-center flex-col icon-shadow'>
      <img src={props.icon} alt={props.category} className='w-4/5 p-4' />
      <span className="block sm:text-sm lg:text-3xl">{props.category}</span>
    </span>
    </Link>
  );
};

export default Icon;