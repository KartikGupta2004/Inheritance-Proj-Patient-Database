import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="hidden lg:flex items-center bg-navbarcol justify-between text-5xl shadow border-y-2 border-black z-50 p-0 m-0 h-32">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img className="ml-6 w-20" src="Medical page/Logo.png" alt="" />
        </Link>
      </div>

      <div className="text-white flex items-center">
        <ul className="flex flex-row font-medium space-x-8 mt-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-red-700" : "text-white"} lg:hover:bg-transparent lg:border-0 hover:text-red-700 `
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-red-700" : "text-white"} lg:hover:bg-transparent lg:border-0 hover:text-red-700 `
              }
            >
              AboutUs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/medicalrecords"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-red-700" : "text-white"} lg:hover:bg-transparent lg:border-0 hover:text-red-700 `
              }
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/appointment"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-red-700" : "text-white"} lg:hover:bg-transparent lg:border-0 hover:text-red-700 `
              }
            >
              Appointment
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex items-center">
        <Link
          to="/login"
          className="text-white hover:bg-black focus:ring-4 font-medium rounded-xl px-4 md:px-5 py-2 md:py-2.5 mr-2 focus:outline-none"
        >
          Log in
        </Link>
        <Link>
        <img className="w-20 lg:rounded-full mr-4 ml-3" src="https://assets.leetcode.com/users/default_avatar.jpg"/>
        </Link>
      </div>
    </header>
  );
}
