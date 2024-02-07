import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

function AddFamily() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    if (!data["family-member"] || !data["description"]) return;
    console.log(data);
    e.currentTarget.reset();
  };
  return (
    <>
      <div className="bg-fuchsia-50 h-fit mx-auto">
        <div className=" py-3 flex flex-wrap border-b-2 border-black items-center justify-start ">
          <Link exact to="/familyhistory">
            <MdOutlineKeyboardArrowLeft className="text-4xl ml-1 md:ml-3 sm:6xl md:text-7xl text-black" />
          </Link>
          <p className="text-2xl mb-0 sm:text-4xl lg:text-6xl lg:pl-40">
            Family Member
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="h-1/2 flex flex-col text-3xl sm:text-5xl text-start Login:ml-5 justify-center mx-auto"
        >
          <div className="mt-40 mb-20">
            <p className=" ml-3 text-gray-400 font-medium">
              Family Member<span className="text-red-600">*</span>
            </p>
            <input
              className="text-2xl sm:text-5xl my-5 ml-1 border-2  border-gray-200 rounded-lg max-w-7xl "
              type="text"
              name="family-member"
              id="family-member"
              required
            />
          </div>
          <div className="mb-40 mt-20">
            <p className=" ml-3 text-gray-400 font-medium">Description:</p>
            <input
              className="text-2xl sm:text-5xl my-5 ml-1 border-2  border-gray-200 rounded-lg max-w-7xl "
              type="text"
              name="description"
              id="description"
              required
            />
          </div>
          <div className='flex justify-center my-4 hover:cursor-pointer'>
              <button className='rounded-full font-bold px-5 py-3 bg-rose-400 text-white'onClick={() => document.getElementById("submit-button").click()}>
                Save Record
              </button>
            </div>
          <input type="submit" id="submit-button" hidden />
        </form>
      </div>
    </>
  );
}

export default AddFamily;
