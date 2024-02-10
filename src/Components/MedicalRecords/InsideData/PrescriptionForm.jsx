import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useAuthContext } from "../../Hooks/useAuthContext";
const PrescriptionForm = () => {
  const [data, setData] = useState({
    drugs: [],
    date: "",
    doctor: "",
    rec_note: "",
    imageURL: "",
    imageID: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const [drugTrack, setDrugTrack] = useState({
    drug: "",
    dose: "",
  });
  const { user } = useAuthContext();
  const imageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch(
        "http://localhost:5000/api/record/addimage",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            token: user.authToken,
          },
          body: formData,
        }
      );
      return response.json();
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
  const saveData = async () => {
    try {
      const imageData = await imageUpload();
      console.log(imageData);
      setData((data) => {
        const newData = { ...data };
        newData["imageURL"] = imageData.imageURL;
        newData["imageID"] = imageData.imageID;
        return newData;
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log(`Error: ${error.error}`);
    }
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    if (data.drugs.length === 0) return;
    setIsLoading(true);
    await saveData();
    setData({
      drugs: [],
      date: "",
      doctor: "",
      rec_note: "",
      imageID: "",
      imageURL: "",
    });
    setDrugTrack({ drug: "", dose: "" });
    setFile(null);
    setIsLoading(false);
    navigate("/prescriptions", {
      state: { refreshTimestamp: Date.now() },
      replace: true,
    });
  };

  const handleAdd = (e) => {
    if (drugTrack.dose === "" || drugTrack.drug === "") return;
    setData({ ...data, drugs: [...data.drugs, drugTrack] });
    setDrugTrack({ drug: "", dose: "" });
  };
  const handleDelete = (drugBox) => {
    const newDrugs = data.drugs.filter((d) => {
      return JSON.stringify(d) !== JSON.stringify(drugBox);
    });
    setData({ ...data, drugs: newDrugs });
  };
  return (
    <>
      <div className='bg-fuchsia-50 h-fit mx-auto'>
        <div className='flex justify-center items-center w-full py-3 border-b-2 border-rose-400'>
        <Link exact='true' to='/prescriptions'>
            <MdOutlineKeyboardArrowLeft className='text-4xl ml-1 md:ml-3 sm:6xl md:text-7xl text-black' />
          </Link>
          <h1 className='block text-center w-5/6 text-2xl sm:text-4xl lg:text-5xl py-4 px-8 text-rose-400 box-border font-bold mb-0 '>
            Prescriptions
          </h1>
        </div>
        <div className='flex justify-center items-center w-full'>
          <main className='flex justify-center items-center w-full box-border flex-col bg-stone-100'>
            <section className='p-6 text-2xl lg:text-4xl box-border mt-10 w-1/2 h-full'>
              <form
                action=''
                onSubmit={handleSubmit}
                className='grid gap-2 sm:grid-cols-2 box-border place-content-center max-w-5/6'
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
                    <p className='text-3xl mt-4 text-gray-500'>
                    {file ? "Change File" : "Upload Prescription"}
                    </p>
                    <input
                      type='file'
                      name='file'
                      id='file'
                      accept='image/*'
                      className='hidden'
                      onChange={handleFileUpload}
                    />
                    {file && <p className='text-sm'> File: {file.name}</p>}
                  </label>
                </span>
                <span className='flex flex-col sm:col-span-2'>
                  <div className='flex items-center justify-between mt-10 mb-5'>
                    <p className='text-gray-500 text-2xl lg:text-4xl left-0'>
                      Drug Dose<span className='text-red-600'>*</span>
                    </p>
                    <div className='flex w-28'>
                      <button
                        type='button'
                        onClick={handleAdd}
                        className='text-white bg-rose-400 rounded-full px-5 py-4 mb-2 flex-auto text-2xl lg:text-4xl right-0'
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <div className='flex flex-col lg:flex-row gap-2 justify-around items-center h-fit p-2 w-full box-border bg-stone-300 rounded-lg flex-auto'>
                    <input
                      type='text'
                      name='drug'
                      id='drug'
                      placeholder='Drug'
                      value={drugTrack.drug}
                      onChange={(e) =>
                        setDrugTrack({ ...drugTrack, drug: e.target.value })
                      }
                      className='bg-white w-full rounded-lg form-input p-4 flex-auto text-2xl'
                    />
                    <input
                      type='text'
                      name='dose'
                      id='dose'
                      placeholder='Dose'
                      value={drugTrack.dose}
                      onChange={(e) =>
                        setDrugTrack({ ...drugTrack, dose: e.target.value })
                      }
                      className='bg-white w-full rounded-lg form-input p-4 flex-auto text-2xl'
                    />
                  </div>
                  {data.drugs.toString() && (
                    <div className='bg-white rounded-lg text-2xl mt-3'>
                      <ul>
                        {data.drugs.map((drugBox, id) => {
                          return (
                            <li
                              key={id}
                              className='flex flex-row justify-evenly capitalize'
                            >
                              <span className='border-b-2 border-rose-400 w-2/6 text-center'>
                                {drugBox.drug}
                              </span>
                              <span className='border-b-2 border-rose-400 w-2/6 text-center'>
                                {drugBox.dose}
                              </span>
                              <button
                                type='button'
                                className='text-red-600 w-1/6'
                                onClick={() => {
                                  handleDelete(drugBox);
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
                <span className='sm:col-span-2'>
                  <label
                    htmlFor='date'
                    className='flex text-2xl lg:text-4xl text-gray-500 left-0 justify-start mt-10 mb-5'
                  >
                    Date:
                  </label>
                  <input
                    type='date'
                    name='date'
                    id='date'
                    className='w-full rounded-lg text-2xl p-5'
                    onChange={handleChange}
                    value={data.date}
                    required
                  />
                </span>
                <span>
                  <label
                    htmlFor='doctor'
                    className='text-2xl lg:text-4xl text-gray-500 flex left-0 justify-start mt-10 mb-5'
                  >
                    Doctor:
                  </label>
                  <input
                    type='text'
                    name='doctor'
                    id='doctor'
                    className='form-text rounded-lg text-2xl p-4 w-full mb-5'
                    onChange={handleChange}
                    value={data.doctor}
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
                    className='flex text-2xl lg:text-4xl text-gray-500 left-0 justify-start my-2'
                  >
                    Note:
                  </label>
                  <textarea
                    name='rec_note'
                    id='note'
                    onChange={handleChange}
                    value={data.rec_note}
                    className='form-textarea rounded-lg px-2 resize-none box-border flex-auto w-full'
                  />
                </span>
                <span className='flex justify-center sm:col-span-2'>
                <button
                    disabled={isLoading}
                    className='rounded-full font-bold text-2xl lg:text-4xl px-5 py-4 bg-rose-400 text-white mt-3 disabled:opacity-75'
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

export default PrescriptionForm;