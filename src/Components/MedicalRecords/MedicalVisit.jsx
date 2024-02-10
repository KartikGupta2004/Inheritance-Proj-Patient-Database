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
import { MdOutlineCancel } from "react-icons/md";
import { useAuthContext } from "../Hooks/useAuthContext";
function MedicalVisit() {

  //Sab functions me changes hai

  const [data, setData] = useState([]);
  const { user } = useAuthContext();

  const initDrop = {};
  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user, data]);

  const getData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/medical_visit/fetchallvisits",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: user.authToken,
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      setData([...responseData]);
      for (let val of data) {
        initDrop[val._id] = false;
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  // const handleDelete = async (id) => {
  //   setData((curr) => curr.filter((data) => data._id !== id));
  //   try {
  //     const response = await fetch(
  //       `http://localhost:5000/api/medical_visit/deletevaccine/${id}`,
  //       {
  //         method: "DELETE",
  //         headers: {
  //           token: user.authToken,
  //         },
  //       }
  //     );
  //   } catch (error) {
  //     console.log(`Error: ${error}`);
  //   }
  // };
  const [isDropdownVisible, setDropdownVisible] = useState(initDrop);

  const toggleDropdown = (id) => {
    setDropdownVisible({ ...isDropdownVisible, [id]: !isDropdownVisible[id] });
  };
  return (
    <>
      <div className='bg-fuchsia-50 h-fit text-center mx-auto'>
        <div className='flex bg-fuchsia-50 justify-center items-center w-full border-b-2 border-rose-400'>
          <Link exact to='/medicalrecords'>
            <MdOutlineKeyboardArrowLeft className='text-4xl ml-1 md:ml-3 sm:6xl md:text-7xl text-black' />
          </Link>
          <h1 className='block text-center w-5/6 text-2xl sm:text-4xl lg:text-5xl py-4 px-8 text-rose-400 box-border font-bold '>
            Medical Visit
          </h1>
          <div className='flex justify-end items-end ml-auto'>
            <div>
              <div className='flex text-3xl lg:text-5xl space-x-2 mr-10 lg:mr-0 lg:space-x-5'>
                <FaFilter
                  className='hover:cursor-pointer'
                  onClick={toggleDropdown}
                />
                {isDropdownVisible && (
                  <div className='hidden'>
                    <div className='flex justify-between'>
                      <p className='text-2xl'>Filter</p>
                      <MdOutlineCancel />
                    </div>
                    <p className='text-xl text-gray-500'>From</p>
                    <input type='date' name='' id='' />
                    <p className='text-xl text-gray-500'>To</p>
                    <input type='date' name='' id='' />
                    <div>
                      <div>
                        <button className='text-2xl text-white px-4 py-2 rounded-lg'>
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                <TbArrowsSort
                  className='hover:cursor-pointer'
                  onClick={toggleDropdown}
                />
                <BsThreeDotsVertical
                  className='hover:cursor-pointer'
                  onClick={toggleDropdown}
                />
                <div>
                  <p className='text-4xl'>
                    <img
                      className='w-10 h-10'
                      src='Assets/printer.png'
                      alt=''
                    />
                    Print
                  </p>
                  <p className='text-4xl'>
                    <img className='w-10 h-10' src='Assets/pdf.png' alt='' />
                    Pdf Share
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Yaha pe changes hai */}
        <div className={`flex justify-center min-h-screen w-full p-5 ${data.length === 0 ? "items-center":"items-start"}`}>
          <div className="w-screen">
            <div className='flex flex-col justify-center items-center gap-3 w-full'>
              {data.length === 0 ? (
                <div className='text-2xl sm:text-4xl lg:text-5xl space-y-2 '>
                  <img
                    className='w-40 lg:w-72 flex mx-auto justify-center'
                    src='Medical page/information.jpg'
                    alt=''
                  />
                  <p className='font-bold mt-4'>No Data</p>
                  <div className='text-gray-400 mt-3'>
                    <p>Click Add Button and</p>
                    <p>Enter Medical Visit Data</p>
                  </div>
                </div>
              ) : (
                data.map((visit) => (
                  <div
                    key={visit._id}
                    className='flex justify-center items-center'
                  >
                    <div className='w-4/5 h-fit p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                      <div className='flex justify-between'>
                        <div className='flex items-center'>
                          <img
                            className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gray-200 lg:p-2 rounded-lg flex'
                            src='Photos/stethoscope.png'
                            alt=''
                          />
                          <div className='flex ml-6 no-underline'>
                            <div className='mb-0 text-md md:text-lg lg:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                              <div className='flex justify-start'>
                                <p className='mb-0'>{visit.rec_type}</p>
                              </div>
                              <div className='flex flex-col md:flex-row '>
                                <p className='mb-0 md:mr-3'>{visit.date}</p>
                                <p className='mb-0'>{visit.time}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='sm:ml-20 justify-end'>
                          <div className='flex mt-2 mb-3 ml-7 text-gray-500 text-xl md:text-3xl'>
                            <BsThreeDotsVertical
                              className='hover:cursor-pointer'
                              onClick={() => toggleDropdown(visit._id)}
                            />
                            {isDropdownVisible[visit._id] && (
                              <div className=' text-black absolute shadow-sm bg-white mt-12 px-2 pt-3 w-32 sm:w-40 transform translate-x-[-50px] '>
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
                                <div className='hover:cursor-pointer' onClick={() => handleDelete(visit._id)}>
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
                        Doctor: {visit.doctor}
                      </div>
                      <div className='flex justify-start border-t-2 border-yellow-500 mb-0 mt-3 font-semibold text-md md:text-lg lg:text-2xl pt-2'>
                        Notes: {visit.rec_note}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <div className=' flex justify-end items-end hover:cursor-pointer'>
          <div className='m-10 text-white bg-red-500 text-6xl w-16 lg:text-8xl lg:w-24 rounded-full'>
            <Link className=' text-white' to='/addvisit'>
              <LuPlus />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MedicalVisit;
