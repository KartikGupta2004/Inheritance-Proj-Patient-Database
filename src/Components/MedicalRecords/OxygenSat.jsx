import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { TbArrowsSort } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { PiShareNetworkLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useAuthContext } from "../Hooks/useAuthContext";

function OxygenSat() {
  const [os, setOs] = useState([]);
  const { user } = useAuthContext();
  const initState = {};

  useEffect(() => {
    if (user) {
      getOs();
    }
  }, [user]);

  const getOs = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/oxygen_saturation/fetchalloxygen",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: user.authToken,
          },
        }
      );
      const responseData = await response.json();
      setOs([...responseData]);
      for (let data of os) {
        initState[data._id] = false;
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const handleDelete = async (id) => {
    setOs((curr) => curr.filter((data) => data._id !== id));
    try {
      const response = await fetch(
        `http://localhost:5000/api/oxygen_saturation/deleteoxygen/${id}`,
        {
          method: "DELETE",
          headers: {
            token: user.authToken,
          },
        }
      );
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const [isDropdownVisible, setDropdownVisible] = useState({ ...initState });

  const toggleDropdown = (id) => {
    setDropdownVisible({ ...isDropdownVisible, [id]: !isDropdownVisible[id] });
  };
  return (
    <>
      <div className='bg-fuchsia-50 h-fit text-center mx-auto'>
        <div className='flex bg-fuchsia-50 justify-center items-center w-full border-b-2 border-rose-400'>
          <Link exact to='/medicalrecords'>
            <MdOutlineKeyboardArrowLeft className='text-4xl ml-1 md:ml-3 sm:4xl md:text-7xl text-black' />
          </Link>
          <h1 className='block text-center w-5/6 text-base sm:text-3xl lg:text-5xl py-4 px-8 text-rose-400 box-border font-bold mb-0 '>
            Oxygen Saturation(SpO2)
          </h1>
          <div className='flex justify-end items-end ml-auto'>
            <div>
              <div className='flex text-3xl lg:text-5xl space-x-2 mr-10 lg:mr-0 lg:space-x-5'>
                <FaFilter className='hover:cursor-pointer' />
                <TbArrowsSort className='hover:cursor-pointer' />
                <BsThreeDotsVertical className='hover:cursor-pointer' />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex justify-center min-h-screen w-full p-5 ${
            os.length === 0 ? "items-center" : "items-start"
          }`}
        >
          <div className='w-screen'>
            <div className='flex flex-col justify-center items-center w-full gap-3'>
              {os.length === 0 ? (
                <div className='text-2xl sm:text-4xl lg:text-5xl space-y-2 '>
                  <img
                    className='w-40 lg:w-72 flex mx-auto justify-center'
                    src='Medical page/oxygen-saturation.jpg'
                    alt=''
                  />
                  <p className='font-bold'>No Data</p>
                  <div className='text-gray-400 w-80 sm:w-auto'>
                    <p>Click Add Button and</p>
                    <p>Enter Oxygen Saturation Data</p>
                  </div>
                </div>
              ) : (
                os.map((os) => (
                  <div
                    key={os._id}
                    className='flex justify-center items-center sm:w-4/5'
                  >
                    <div className='w-4/5 h-fit p-3 md:p-4 sm:p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                      <div className='flex justify-between'>
                        <img
                          className='w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-gray-200 lg:p-2 rounded-lg flex'
                          src='Photos/oxygen-saturation.png'
                          alt=''
                        />
                        <div className='flex'>
                          <div className='flex items-center ml-6 no-underline'>
                            <div className='mb-0 text-lg md:text-2xl lg:text-3xl font-medium tracking-tight text-gray-900 dark:text-white'>
                              <table>
                                <tr>
                                  <td className='pr-1 sm:pr-3 md:pr-16'>
                                    Result
                                  </td>
                                  <td className='pl-1 sm:pl-3 md:pl-16'>
                                    Pulse
                                  </td>
                                </tr>
                                <tr>
                                  <td className='text-gray-400 border-r-2 border-yellow-500 sm:pt-2 pt-1 pr-2 sm:pr-16'>
                                    {os.result}
                                  </td>
                                  <td className='text-gray-400 pt-1 sm:pt-2 pl-2 sm:pl-16'>
                                    {os.pulse}
                                  </td>
                                </tr>
                              </table>
                              <div className='flex mt-2 '>
                                <p className='mb-0 mr-3'>{os.date}</p>
                                <p className='mb-0'>{os.time}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='lg:ml-20 justify-end'>
                          <div className='flex mt-2 mb-3 md:ml-7 text-gray-500 text-xl md:text-3xl'>
                            <BsThreeDotsVertical
                              className='hover:cursor-pointer'
                              onClick={() => toggleDropdown(os._id)}
                            />
                            {isDropdownVisible[os._id] && (
                              <div className=' text-black absolute shadow-sm bg-white mt-12 px-2 pt-3 transform w-32 md:w-44 1500:w-60 translate-x-[-60px]'>
                                <div className='hover:cursor-pointer'>
                                  <p className='flex'>
                                    <span>
                                      <MdOutlineModeEdit />
                                    </span>{" "}
                                    Edit
                                  </p>
                                </div>
                                <div className='hover:cursor-pointer'>
                                  <p className='flex'>
                                    <span>
                                      <PiShareNetworkLight />
                                    </span>{" "}
                                    Share
                                  </p>
                                </div>
                                <div
                                  className='hover:cursor-pointer'
                                  onClick={() => handleDelete(os._id)}
                                >
                                  <p className='flex text-red-600'>
                                    <span>
                                      <RiDeleteBin6Line />
                                    </span>{" "}
                                    Delete
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-start border-t-2 border-yellow-500 mb-0 mt-3 font-semibold text-md md:text-lg lg:text-2xl pt-2'>
                        Notes: {os.rec_note}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className=' flex justify-end items-end mx-auto'>
          <div className='m-10 text-white bg-red-500 text-6xl w-16 lg:text-8xl lg:w-24 rounded-full hover:cursor-pointer'>
            <Link to='/addoxygensat' className='text-white'>
              <LuPlus />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default OxygenSat;