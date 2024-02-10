import React,{useState,useEffect} from 'react'
import { FaFilter } from "react-icons/fa";
import { TbArrowsSort } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuPlus } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { PiShareNetworkLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useAuthContext } from "../Hooks/useAuthContext";

function Family() {
  const [family, setFamily] = useState([]);
  const { user } = useAuthContext();
  const initState = {};
  useEffect(() => {
    if (user) {
      getFamily();
    }
  }, [user]);

  const getFamily = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/family_history/fetchallfamily",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: user.authToken,
          },
        }
      );
      const responseData = await response.json();
      setFamily([...responseData]);
      for (let data of family) {
        initState[data._id] = false;
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const handleDelete = async (id) => {
    setFamily((curr) => curr.filter((data) => data._id !== id));
    try {
      const response = await fetch(
        `http://localhost:5000/api/family_history/deletefamily/${id}`,
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
    setDropdownVisible({
      ...isDropdownVisible,
      [id]: !isDropdownVisible[id],
    });
  };
  return (
    <>
    <div className='bg-fuchsia-50 h-fit text-center mx-auto'>
    <div className="flex bg-fuchsia-50 justify-center items-center w-full border-b-2 border-rose-400">
      <Link exact to='/medicalrecords'>
    <MdOutlineKeyboardArrowLeft className='text-4xl ml-1 md:ml-3 sm:6xl md:text-7xl text-black'/>
    </Link>
        <h1 className='block text-center w-5/6 text-2xl sm:text-4xl lg:text-5xl py-4 px-8 text-rose-400 box-border font-bold '>
          Family History
        </h1>
    <div className='flex justify-end items-end ml-auto'>
    <div>
    <div className='flex text-3xl lg:text-5xl space-x-2 mr-10 lg:mr-0 lg:space-x-5'>
    <FaFilter className='hover:cursor-pointer'/>
    <TbArrowsSort  className='hover:cursor-pointer'/>
    <BsThreeDotsVertical  className='hover:cursor-pointer'/>
    </div>
    </div>
    </div>
    </div>
    <div className='flex justify-center items-center min-h-screen p-4'>
    <div>
    <div className='flex flex-col justify-center items-center'>
    {family.length === 0 ? (
    <div className='text-2xl sm:text-4xl lg:text-5xl space-y-2 '>
        <img className='w-40 lg:w-72 flex mx-auto justify-center' src="Medical page/family.jpg" alt="" />
        <p className='font-bold'>No Data</p>
        <div className='text-gray-400'>
        <p >Click Add Button and</p>
        <p>Enter Family Member's Data</p>
        </div>
    </div>
    ) : (
      family.map((data) => (
    <div key={data.id} className='flex justify-center items-center'>
    <div className='flex w-4/5 h-fit justify-between items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
      <div className='flex'>
      <img className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gray-200 lg:p-2 rounded-lg flex' src="Photos/family.png" alt="" />
      <div className='flex items-center ml-6 no-underline'>
        <div className='mb-0 text-md md:text-2xl lg:text-3xl font-medium tracking-tight text-gray-900 dark:text-white'>
        <p className='mb-0'>{data.family_member}</p>
        <p className='mb-0 text-gray-400'>{data.descripation}</p>
        </div>
        {/* FETCH KARKE NAME DESCRIPATION LANA HAI */}
      </div>
      </div>
      <div className='sm:ml-20 justify-end'>
        <div className='flex mt-2 mb-3 ml-7 text-gray-500 text-xl md:text-3xl'>
          <BsThreeDotsVertical
        className='hover:cursor-pointer'
        onClick={() => toggleDropdown(data._id)}
      />
       {isDropdownVisible[data._id] && (
                          <div className=' text-black  absolute shadow-sm bg-white mt-12 px-2 pt-3 sm:w-40 transform translate-x-[-50px]'>
                            <div className='hover:cursor-pointer'>
                              <p className='flex'>
                                <span className='mr-3'>
                                  <MdOutlineModeEdit />
                                </span>{" "}
                                Edit
                              </p>
                            </div>
                            <div className='hover:cursor-pointer'>
                              <p className='flex'>
                                <span className='mr-3'>
                                  <PiShareNetworkLight />
                                </span>{" "}
                                Share
                              </p>
                            </div>
                            <div
                              className='hover:cursor-pointer'
                              onClick={() => handleDelete(data._id)}
                            >
                              <p className='flex text-red-600'>
                                <span className='mr-3'>
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
                </div>
              ))
            )}
</div>
</div>
</div>

    <div className=' flex justify-end items-end hover:cursor-pointer'>
    <div className='m-10 text-white bg-red-500 text-6xl w-16 lg:text-8xl lg:w-24 rounded-full'>
    <Link
      to="/addfamily" className='text-white' 
    >
    <LuPlus />
    </Link>
    </div>
    </div>    
    </div>
    </>
  )
}

export default Family