import { React, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
const LabTestForm = () => {
  const [data, setData] = useState({
    date: "",
    doctor: "",
    imageURL: "",
    imageID: "",
    rec_note: "",
    tests: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [testCont, setTestCont] = useState({
    test: "",
    result: "",
    normal: "",
  });
  const [file, setFile] = useState(null);
  let imageData;
  const {user} = useAuthContext();
  const navigate = useNavigate();
  const handleAdd = (e) => {
    e.preventDefault();
    if (
      testCont.test === "" ||
      testCont.result === "" ||
      testCont.normal === ""
    )
      return;
    setData({ ...data, tests: [...data.tests, testCont] });
    setTestCont({
      test: "",
      result: "",
      normal: "",
    });
  };
  const handleDelete = (testBox) => {
    setData({
      ...data,
      tests: data.tests.filter(
        (test) => JSON.stringify(test) !== JSON.stringify(testBox)
      ),
    });
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    console.log(e.target.files[0].name);
  };
  const imageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      console.log(Object.fromEntries(formData.entries()));
      const upload = await fetch(
        "http://localhost:5000/api/lab_test/addimage",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            token: user.authToken,
          },
          body: formData,
        }
      );
      return upload.json();
    } catch (err) {
      console.log(`Error:${err}`);
      return err;
    }
  };
  const saveData = async () => {
    try {
      imageData = await imageUpload();
      console.log(imageData);
      console.log(data);
      console.log(imageData);
      const response = await fetch(
        "http://localhost:5000/api/lab_test/addtest",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            token: user.authToken,
          },
          body: JSON.stringify(data),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(data.tests.length === 0 || data.doctor ==="") return;
    console.log(data);
    setIsLoading(true);
    await saveData();
    setData({
      date: "",
      doctor: "",
      imageURL: "",
      imageID: "",
      rec_note: "",
      tests: [],
    });
    setFile(null);
    setIsLoading(false);
    navigate("/labtest", {
      state: { refreshTimestamp: Date.now() },
      replace: true,
    });
  };
  return (
    <>
      <div className='bg-fuchsia-50 h-fit mx-auto'>
        <div className='flex justify-center items-center w-full py-3 border-b-2 border-rose-400'>
          <Link exact to='/labtest'>
            <MdOutlineKeyboardArrowLeft className='text-4xl ml-1 md:ml-3 sm:6xl md:text-7xl text-black' />
          </Link>
          <h1 className='block text-center w-5/6 text-2xl sm:text-4xl lg:text-5xl py-4 px-8 text-rose-400 box-border font-bold '>
            Add Lab Test
          </h1>
        </div>
        <div className='flex justify-center items-center w-full'>
          <main className='flex justify-center items-center w-full box-border flex-col bg-stone-100'>
            <section className='p-6 text-2xl lg:text-4xl box-border mt-10 w-1/2 h-full'>
              <form
                action=''
                className='grid gap-2 sm:grid-cols-2 box-border place-content-center max-w-5/6'
                onSubmit={handleSubmit}
              >
                <span className='flex sm:col-span-2 justify-center'>
                  <label
                    htmlFor='file'
                    className='w-fit flex flex-col items-center cursor-pointer bg-white rounded-lg p-4 border border-black'
                  >
                    <img
                      src='Assets/add.png'
                      alt='Choose File'
                      className='w-8 h-8'
                    />
                    <p className='text-3xl mt-3 text-gray-500'>
                      {file ? "Change File" : "Upload Report"}
                    </p>
                    <input
                      type='file'
                      name='file'
                      id='file'
                      accept='image/*'
                      className='hidden'
                      onChange={handleFileUpload}
                      required
                    />
                    {file && <p className='text-sm'> File: {file.name}</p>}
                  </label>
                </span>
                <span className='sm:col-span-2'>
                  <label
                    htmlFor='date'
                    className='flex  text-gray-500 left-0 justify-start mt-10 mb-5'
                  >
                    Date:
                  </label>
                  <input
                    type='date'
                    name='date'
                    id='date'
                    className='w-full rounded-lg text-2xl p-5'
                    value={data.date}
                    onChange={handleChange}
                    required
                  />
                </span>
                <span className='flex flex-col sm:col-span-2'>
                  <div className='flex items-center justify-between mt-10 mb-5'>
                    <p className='text-gray-500  left-0'>
                      Tests<span className='text-red-600'>*</span>
                    </p>
                    <div className='flex w-28'>
                      <button
                        type='button'
                        onClick={handleAdd}
                        className='text-white bg-rose-400 rounded-full px-4 py-2 mb-2 flex-auto  right-0'
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </span>
                <span className='flex flex-col sm:col-span-2'>
                  <div className='flex flex-col lg:flex-row gap-2 justify-around items-center h-fit w-full p-2 box-border bg-stone-300 rounded-lg flex-auto'>
                    <input
                      type='text'
                      name='test'
                      id='test'
                      placeholder='Test'
                      onChange={(e) =>
                        setTestCont({ ...testCont, test: e.target.value })
                      }
                      value={testCont.test}
                      className='bg-white w-full rounded-lg form-input p-4 flex-auto text-2xl'
                    />
                    <input
                      type='text'
                      name='result'
                      id='result'
                      placeholder='Result'
                      onChange={(e) =>
                        setTestCont({ ...testCont, result: e.target.value })
                      }
                      value={testCont.result}
                      className='bg-white w-full rounded-lg form-input p-4 flex-auto text-2xl'
                    />
                    <input
                      type='text'
                      name='normal'
                      id='normal'
                      placeholder='Normal'
                      onChange={(e) =>
                        setTestCont({ ...testCont, normal: e.target.value })
                      }
                      value={testCont.normal}
                      className='bg-white w-full rounded-lg form-input p-4 flex-auto text-2xl'
                    />
                  </div>
                  {data.tests.toString() && (
                    <div className='bg-white rounded-lg  mt-3'>
                      <ul>
                        {data.tests.map((testBox, id) => {
                          return (
                            <li
                              key={id}
                              className='flex flex-row justify-evenly capitalize'
                            >
                              <span className='border-b-2 border-rose-400 w-1/4 text-center p-1'>
                                {testBox.test}
                              </span>
                              <span className='border-b-2 border-rose-400 w-1/4 text-center p-1'>
                                {testBox.result}
                              </span>
                              <span className='border-b-2 border-rose-400 w-1/4 text-center p-1'>
                                {testBox.normal}
                              </span>
                              <button
                                type='button'
                                className='text-red-600 w-1/4 p-1'
                                onClick={() => {
                                  handleDelete(testBox);
                                }}
                              >
                                Delete
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </span>
                <span>
                  <label
                    htmlFor='doctor'
                    className=' text-gray-500 flex left-0 justify-start mt-10 mb-5'
                  >
                    Doctor:
                  </label>
                  <input
                    type='text'
                    name='doctor'
                    id='doctor'
                    className='form-text rounded-lg text-2xl p-4 w-full mb-5'
                    value={data.doctor}
                    onChange={handleChange}
                    required
                  />
                </span>
                <span className='flex items-end justify-center sm:justify-end mb-5'>
                  <span className='p-2 bg-white rounded-lg border border-black'>
                    <Link to='/doctor'>
                      <img
                        src='Assets/doctor.png'
                        alt='doctor'
                        className='w-12 h-12'
                      />
                    </Link>
                  </span>
                </span>
                <span className='sm:col-span-2'>
                  <label
                    htmlFor='note'
                    className='flex  text-gray-500 left-0 justify-start my-2'
                  >
                    Note:
                  </label>
                  <input
                    type='text'
                    name='rec_note'
                    className='form-text rounded-lg text-2xl p-4 w-full mb-5'
                    value={data.rec_note}
                    onChange={handleChange}
                    required
                  />
                </span>
                <span className='flex justify-center sm:col-span-2'>
                <button
                    disabled={isLoading}
                    className='rounded-full font-bold  px-5 py-4 bg-rose-400 text-white mt-3 disabled:opacity-75'
                  >
                    Save Record
                  </button>
                </span>
              </form>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default LabTestForm;