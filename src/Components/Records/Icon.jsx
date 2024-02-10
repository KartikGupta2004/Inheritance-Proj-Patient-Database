import React from "react";
import { Link } from "react-router-dom";

const Icon = (props) => {
  return (
    <Link to={ '/' + props.id} className="no-underline text-black hover:text-black hover:opacity-85">
    <span className='flex bg-white rounded-lg p-1 text-center items-center justify-center flex-col icon-shadow lg:flex-grow'>
      <img src={props.icon} alt={props.category} className='w-40 md:w-80 1576::w-4/5 p-2' />
      <span className="block text-sm sm:text-2xl md:text-3xl">{props.category}</span>
    </span>
    </Link>
  );
};

export default Icon;