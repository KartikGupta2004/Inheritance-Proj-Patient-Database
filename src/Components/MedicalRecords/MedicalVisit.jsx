import React, { useState, useEffect } from 'react';
import { FaFilter } from "react-icons/fa";
import { TbArrowsSort } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuPlus } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft, MdOutlineModeEdit, MdOutlineCancel } from "react-icons/md";
import { PiShareNetworkLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";

function MedicalVisit() {
  const [visits, setVisits] = useState([]);
  const [isFilterDropdownVisible, setFilterDropdownVisible] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [filteredVisits, setFilteredVisits] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [isSortDropdownVisible, setSortDropdownVisible] = useState(false);
  const [isOptionsDropdownVisible, setIsOptionsDropdownVisible] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:5000/api/medical_visit/addvisit')
      .then((response) => response.json())
      .then((data) => setVisits(data))
      .catch((error) => console.error('Error fetching visits:', error));
  };

  const handleSave = () => {
    filterVisits();
    setFilterDropdownVisible(false);

    if (selectedOption === 'ascending') {
      const sortedData = visits.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
      console.log(sortedData);
    } else if (selectedOption === 'descending') {
      const sortedData = visits.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
      console.log(sortedData);
    }

    setSortDropdownVisible(false);
    setSelectedOption('');
  };

  const filterVisits = () => {
    const filtered = visits.filter((visit) => {
      const visitDate = new Date(visit.date);
      const from = new Date(fromDate);
      const to = new Date(toDate);
      return visitDate >= from && visitDate <= to;
    });
    setFilteredVisits(filtered);
  };
  
  const resetValues = () => {
    setFromDate('');
    setToDate('');
    setFilteredVisits([]);
  };

  const toggleDropdown = (dropdown) => {
    if (dropdown === 'filter') {
      setFilterDropdownVisible(!isFilterDropdownVisible);
      setIsOptionsDropdownVisible(false);
      setSortDropdownVisible(false);
    } else if (dropdown === 'options') {
      setIsOptionsDropdownVisible(!isOptionsDropdownVisible);
      setFilterDropdownVisible(false);
      setSortDropdownVisible(false);
    } else if (dropdown === 'threedots') {
      setDropdownVisible(!isDropdownVisible);
    } else if (dropdown === 'sort') {
      setSortDropdownVisible(!isSortDropdownVisible);
      setIsOptionsDropdownVisible(false);
      setFilterDropdownVisible(false);
    }
  };

  const handleDelete = (visitId) => {
    fetch(`http://localhost:5000/api/medical_visit/${visitId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setVisits(visits.filter((visit) => visit.id !== visitId));
      })
      .catch((error) => console.error('Error deleting visit:', error));
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
    <div className='bg-fuchsia-50 h-fit text-center mx-auto'>
    <div className="flex bg-fuchsia-50 justify-center items-center w-full border-b-2 border-rose-400">
      <Link exact to='/medicalrecords'>
    <MdOutlineKeyboardArrowLeft className='text-4xl ml-1 md:ml-3 sm:6xl md:text-7xl text-black'/>
    </Link>
        <h1 className='block text-center w-5/6 text-2xl sm:text-4xl lg:text-5xl py-4 px-8 text-rose-400 box-border font-bold '>
          Medical Visit
        </h1>
        <div className='flex justify-end items-end ml-auto'>
  <div className='flex text-3xl lg:text-5xl space-x-2 mr-10 lg:mr-0 lg:space-x-5'>
    <div>
      <FaFilter className='hover:cursor-pointer' onClick={() => setFilterDropdownVisible(!isFilterDropdownVisible)} />
      {isFilterDropdownVisible && (
        <div className='absolute shadow-sm bg-white mt-12 px-2 pt-3 w-60 sm:w-80 transform translate-x-[-175px] '>
          <div className='flex justify-between'>
            <p className='text-2xl ml-1'>Filter</p>
            <MdOutlineCancel className='w-7 h-7 mr-3 hover:cursor-pointer' onClick={() => {
                  setFilterDropdownVisible(false);
                  resetValues(); 
                }} />
          </div>
          <div className='flex flex-col justify-start'>
            <p className='text-xl md:text-2xl flex justify-start my-2 text-gray-500'>From:</p>
            <input className='text-xl md:text-2xl' type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
            <p className='text-xl md:text-2xl flex justify-start my-2 text-gray-500'>To:</p>
            <input className='text-xl md:text-2xl' type="date" value={toDate} onChange={(e) => setToDate(e.target.value)}/>
            <div>
              <button className='text-2xl my-3 bg-red-500 text-white px-4 py-2 rounded-lg' onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    {filteredVisits.map((visit) => (
        <div key={visit.id}>
          {/* Display visit details */}
        </div>
      ))}
      {/* Display all visits if not filtered */}
      {!filteredVisits.length &&
        visits.map((visit) => (
          <div key={visit.id}>
            {/* Display visit details */}
          </div>
        ))}
    <div>
      <TbArrowsSort
        className='hover:cursor-pointer'
        onClick={() => setSortDropdownVisible(!isSortDropdownVisible)}
      />
      {isSortDropdownVisible && (
        <div className='absolute shadow-sm bg-white mt-12 px-2 pt-3 w-48 sm:w-60 transform translate-x-[-175px]'>
          <div className='flex justify-between'>
            <p className='text-3xl ml-1'>Sort By</p>
            <MdOutlineCancel
              className='w-7 h-7 mr-3 hover:cursor-pointer'
              onClick={() => {
                setSortDropdownVisible(false);
                setSelectedOption('');
              }}
            />
          </div>
          <div className='flex justify-between'>
            <label htmlFor='ascending' className='text-xl md:text-2xl flex justify-start my-2 text-gray-500'>
              Date Ascending
              <div className='flex items-center pl-3'>
              <input
                type='radio'
                id='ascending'
                name='sortOption'
                value='ascending'
                checked={selectedOption === 'ascending'}
                onChange={() => handleOptionChange('ascending')}
                className='form-radio h-6 w-6 text-rose-400 outline-black checked:bg-rose-400 checked:hover:bg-rose-400 checked:active:bg-rose-400 checked:focus:bg-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400'
              />
              </div>
            </label>
          </div>
          <div className='flex justify-between'>
            <label htmlFor='descending' className='text-xl md:text-2xl flex justify-start my-2 text-gray-500'>
              Date Descending
              <div className='flex items-center pl-3'>
              <input
                type='radio'
                id='descending'
                name='sortOption'
                value='descending'
                checked={selectedOption === 'descending'}
                onChange={() => handleOptionChange('descending')}
                className='form-radio h-6 w-6 text-rose-400 outline-black checked:bg-rose-400 checked:hover:bg-rose-400 checked:active:bg-rose-400 checked:focus:bg-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400'
              />
              </div>
            </label>
          </div>
          <div>
            <button
              className='text-2xl my-3 bg-red-500 text-white px-4 py-2 rounded-lg'
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
    <div>
      <BsThreeDotsVertical  className='hover:cursor-pointer' onClick={() => toggleDropdown('options')}/>
      {isOptionsDropdownVisible && (
        <div className='absolute shadow-sm bg-white mt-12 p-2  w-48 sm:w-60 transform translate-x-[-200px] '>
          <p className='text-2xl sm:text-4xl flex my-2 border-b-2 border-yellow-600 pb-2 hover:cursor-pointer'><img className='w-8 h-8 sm:w-10 sm:h-10 mr-3' src="Assets/printer.png" alt="" />Print</p>
          <p className='text-2xl sm:text-4xl flex my-2 hover:cursor-pointer'><img className='w-8 h-8 sm:w-10 sm:h-10 mr-3' src="Assets/pdf.png" alt="" />Pdf Share</p>
        </div>
      )}
    </div>
  </div>
</div>

    </div>
    <div className={`flex justify-center min-h-screen w-full p-5 ${visits.length === 0 ? "items-center":"items-start"}`}>
    <div>
    <div className='flex flex-col justify-center items-center'>
      {visits.length ===0 ?(
    <div className='text-2xl sm:text-4xl lg:text-5xl space-y-2 '>
        <img className='w-40 lg:w-72 flex mx-auto justify-center' src="Medical page/information.jpg" alt="" />
        <p className='font-bold mt-4'>No Data</p>
        <div className='text-gray-400 mt-3'>
        <p >Click Appointment Button and</p>
        <p className='mt-3'>Enter Data</p>
        </div>
    </div>
    )
    :(visits.map((visit)=>(
    <div key={visit.id} className='flex justify-center items-center'>
    <div className='w-4/5 h-fit p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
      <div className='flex justify-between'>
      <div className='flex items-center'>
      <img className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gray-200 lg:p-2 rounded-lg flex' src="Photos/stethoscope.png" alt="" />
      <div className='flex ml-6 no-underline'>
        <div className='mb-0 text-md md:text-lg lg:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>
          <div className='flex justify-start'>
        <p className='mb-0'>{visit.type}</p>
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
        onClick={toggleDropdown}
      />
      {isDropdownVisible && (
        <div className=' text-black absolute shadow-sm bg-white mt-12 px-2 pt-3 w-32 sm:w-40 transform translate-x-[-50px] '>
          <div className='hover:cursor-pointer'>
          <p className='flex'><span><MdOutlineModeEdit /></span> Edit</p>
          </div>
          <div className='hover:cursor-pointer'>
          <p className='flex'><span><PiShareNetworkLight /></span> Share</p>
          </div>
          <div className='hover:cursor-pointer'>
          <p className='flex text-red-600'><span><RiDeleteBin6Line /></span> Delete</p>
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
        Notes: {visit.notes}
        </div>
        </div>
        </div>
        )))}
        </div>
    </div>
    </div>
    {/* <div className=' flex justify-end items-end hover:cursor-pointer'>
    <div className='m-10 text-white bg-red-500 text-6xl w-16 lg:text-8xl lg:w-24 rounded-full'>
    <Link className=" text-white"
      to="/addvisit"
    >
    <LuPlus />
    </Link>
    </div>
    </div>     */}
    </div>
    </>
  )
}

export default MedicalVisit