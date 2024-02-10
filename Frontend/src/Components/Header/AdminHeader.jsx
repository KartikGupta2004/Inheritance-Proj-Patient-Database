import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useLogOut } from "../Hooks/useLogOut";

export default function AdminHeader() {
  const { user } = useAuthContext();
  const { logout } = useLogOut();
  return (
    <header className='hidden lg:flex items-center decoration-0 bg-navbarcol justify-between text-4xl 1500:text-5xl shadow border-y-2 border-black z-100 p-0 m-0 h-32'>
      <div className='hidden 1500:flex items-center'>
        <img className='ml-6 w-20' src='Medical page/Logo.png' alt='' />
      </div>
      <div
        className='flex items-center'
        onClick={() => {
          if (user) {
            logout();
          }
        }}
      >
        <Link
          to='/login'
          className='text-white hover:bg-black focus:ring-4 font-medium rounded-xl px-4 md:px-5 py-2 md:py-2.5 mr-2 focus:outline-none no-underline'
        >
          {user ? <p>Logout</p> : <p>Login</p>}
        </Link>
        <Link>
          <img
            className='w-20 lg:rounded-full mr-4 ml-3'
            src='https://assets.leetcode.com/users/default_avatar.jpg'
          />
        </Link>
      </div>
    </header>
  );
}