import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useAuthContext } from "../../Hooks/useAuthContext";
const Examination = () => {
  const [data, setData] = useState({
    symptoms: [],
    diagnoses: [],
    imageURL: "",
    imageID: "",
    temperature: "",
    tempunit: "c",
    weight: "",
    weightunit: "kg",
    height: "",
    heightunit: "in",
    date: "",
    doctor: "",
    rec_note: "",
  });

  let imageData;

  const [isLoading, setIsLoading] = useState(false);

  const [file, setFile] = useState(null);

  const { user } = useAuthContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (imageData && imageData.imageURL && imageData.imageID) {
      console.log("USE EFFECT RAN");
      setData((data) => {
        return {
          ...data,
          imageURL: imageData.imageURL,
          imageID: imageData.imageID,
        };
      });
    }
  }, [imageData]);

  let symptom = "",
    diagnosis = "";
  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    console.log(e.target.files[0].name);
  };
  const handleAddSym = (e) => {
    if (!symptom) return;
    setData({ ...data, symptoms: [...data.symptoms, symptom] });
    document.getElementById("symptom").value = "";
  };
  const handleDeleteSym = (sym) => {
    const newSymp = data.symptoms.filter((s) => s !== sym);
    setData({ ...data, symptoms: newSymp });
  };
  const handleAddDiag = (e) => {
    if (!diagnosis) return;
    setData({ ...data, diagnoses: [...data.diagnoses, diagnosis] });
    document.getElementById("diagnosis").value = "";
  };
  const handleDeleteDiag = (diag) => {
    const newDiags = data.diagnoses.filter((d) => d !== diag);
    setData({ ...data, diagnoses: newDiags });
  };
  const handleChange = (e) => {
    if (
      e.target.name === "tempunit" ||
      e.target.name === "weightunit" ||
      e.target.name === "heightunit"
    ) {
      setData({ ...data, [e.target.name]: e.target.value });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const imageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      console.log(Object.fromEntries(formData.entries()));
      const upload = await fetch(
        "http://localhost:5000/api/examination/addimage",
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
        "http://localhost:5000/api/examination/addexam",
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
    console.log(data);
    if (data.symptoms.length === 0 || data.diagnoses.length === 0) return;
    setIsLoading(true);
    await saveData();
    setData({
      symptoms: [],
      diagnoses: [],
      imageURL: "",
      temperature: "",
      tempunit: "f",
      weight: "",
      weightunit: "kg",
      height: "",
      heightunit: "in",
      date: "",
      doctor: "",
      rec_note: "",
    });
    setFile(null);
    setIsLoading(false);
    navigate("/examination", {
      state: { refreshTimestamp: Date.now() },
      replace: true,
    });
  };
  return (
    <>
      <div className='bg-fuchsia-50 h-fit mx-auto'>
        <div className='flex justify-center items-center w-full py-3 border-b-2 border-rose-400'>
          <Link exact to='/examination'>
            <MdOutlineKeyboardArrowLeft className='text-4xl ml-1 md:ml-3 sm:6xl md:text-7xl text-black' />
          </Link>
          <h1 className='block text-center w-5/6 text-2xl sm:text-4xl lg:text-5xl py-4 px-8 text-rose-400 box-border font-bold '>
            Examination
          </h1>
        </div>
        <div className='flex justify-center items-center w-full'>
          <main className='flex justify-center items-center w-full box-border flex-col bg-stone-100'>
            <section className='p-6 text-2xl lg:text-4xl box-border mt-10 w-1/2 h-full'>
              <form
                action=''
                onSubmit={handleSubmit}
                className='grid gap-2 sm:grid-cols-2 box-border place-content-evenly'
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
                    <p className='mt-4'>
                      {file ? "Change File" : "Upload File"}
                    </p>
                    <input
                      type='file'
                      name='file'
                      id='file'
                      accept='image/*'
                      className='hidden '
                      onChange={(e) => handleFileUpload(e)}
                      required
                    />
                    {file && <p className='text-sm'> File: {file.name}</p>}
                  </label>
                </span>
                <span>
                  <label
                    htmlFor='temperature'
                    className='flex  text-gray-500 left-0 justify-start mt-10 mb-5'
                  >
                    Temperature:
                  </label>
                  <input
                    type='number'
                    name='temperature'
                    id='temperature'
                    className='w-full rounded-lg text-3xl p-4 mb-3'
                    required
                    value={data.temperature}
                    onChange={handleChange}
                  />
                </span>
                <span>
                  <label
                    htmlFor='tempunit'
                    className='flex  text-gray-500 right-0 justify-end mt-10 mb-5'
                  >
                    Unit:
                  </label>
                  <select
                    name='tempunit'
                    id='tempunit'
                    className='w-full rounded-lg text-3xl p-4 mb-3 text-gray-500'
                    required
                    onChange={handleChange}
                    value={data.tempunit}
                  >
                    <option value='c'>℃</option>
                    <option value='f'>℉</option>
                  </select>
                </span>
                <span>
                  <label
                    htmlFor='weight'
                    className='flex  text-gray-500 left-0 justify-start mt-10 mb-5'
                  >
                    Weight:
                  </label>
                  <input
                    type='number'
                    name='weight'
                    id='weight'
                    className='w-full rounded-lg text-3xl p-4 mb-3'
                    required
                    onChange={handleChange}
                    value={data.weight}
                  />
                </span>
                <span>
                  <label
                    htmlFor='weightunit'
                    className='flex  text-gray-500 right-0 justify-end mt-10 mb-5'
                  >
                    Unit:
                  </label>
                  <select
                    name='weightunit'
                    id='weightunit'
                    className='w-full rounded-lg text-3xl p-4 mb-3 text-gray-500'
                    required
                    onChange={handleChange}
                    value={data.weightunit}
                  >
                    <option value='kg'>kg</option>
                    <option value='lbs'>lbs</option>
                  </select>
                </span>
                <span>
                  <label
                    htmlFor='height'
                    className='flex  text-gray-500 left-0 justify-start mt-10 mb-5'
                  >
                    Height:
                  </label>
                  <input
                    type='number'
                    name='height'
                    id='height'
                    className='w-full rounded-lg text-3xl p-4 px-8 mb-3'
                    required
                    onChange={handleChange}
                    value={data.height}
                  />
                </span>
                <span>
                  <label
                    htmlFor='heightunit'
                    className='flex  text-gray-500 right-0 justify-end mt-10 mb-5'
                  >
                    Unit:
                  </label>
                  <select
                    name='heightunit'
                    id='heightunit'
                    className='w-full rounded-lg text-3xl p-4 mb-3 px-8 text-gray-500'
                    required
                    onChange={handleChange}
                    value={data.heightunit}
                  >
                    <option value='in'>in</option>
                    <option value='cm'>cm</option>
                  </select>
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
                    className='w-full rounded-lg text-2xl p-5 mb-5'
                    required
                    onChange={handleChange}
                    value={data.date}
                  />
                </span>
                <span className='flex flex-col sm:col-span-2'>
                  <label
                    htmlFor='symptom'
                    className='flex  text-gray-500 left-0 justify-start mt-10 mb-5'
                  >
                    Symptoms:
                  </label>
                  <div className='flex flex-row gap-2 justify-evenly items-center py-2 box-border'>
                    <input
                      type='text'
                      name='symptom'
                      id='symptom'
                      onChange={(e) => (symptom = e.target.value)}
                      className='bg-white w-4/6 rounded-lg text-3xl p-4 '
                    />
                    <button
                      type='button'
                      onClick={handleAddSym}
                      className='text-white bg-rose-400 rounded-full px-4 w-40 h-20'
                    >
                      Add
                    </button>
                  </div>
                  {data.symptoms.toString() && (
                    <div className='bg-white w-full rounded-lg text-2xl p-4 my-3'>
                      <ul>
                        {data.symptoms.map((sym, id) => {
                          return (
                            <li
                              key={id}
                              className='flex flex-row justify-evenly text-gray-500'
                            >
                              <span className='border-b-2 border-rose-400 w-4/6 text-center'>
                                {sym}
                              </span>
                              <button
                                type='button'
                                className='text-red-600 w-2/6 text-center'
                                onClick={() => {
                                  handleDeleteSym(sym);
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
                <span className='flex flex-col sm:col-span-2'>
                  <label
                    htmlFor='diagnosis'
                    className='flex  text-gray-500 left-0 justify-start mt-10 mb-5'
                  >
                    Diagnoses:
                  </label>
                  <div className='flex flex-row gap-2 justify-evenly items-center py-2 box-border'>
                    <input
                      type='text'
                      name='diagnosis'
                      id='diagnosis'
                      onChange={(e) => (diagnosis = e.target.value)}
                      className='bg-white rounded-lg text-3xl p-4  w-4/6'
                    />
                    <button
                      type='button'
                      onClick={handleAddDiag}
                      className='text-white bg-rose-400 rounded-full px-4  w-40 h-20'
                    >
                      Add
                    </button>
                  </div>
                  {data.diagnoses.toString() && (
                    <div className='bg-white w-full rounded-lg text-2xl p-4 my-3'>
                      <ul>
                        {data.diagnoses.map((diag, id) => {
                          return (
                            <li
                              key={id}
                              className='flex flex-row justify-evenly text-gray-500'
                            >
                              <span className='border-b-2 border-rose-400 w-4/6 text-center'>
                                {diag}
                              </span>
                              <button
                                type='button'
                                className='text-red-600 w-1/6 text-center'
                                onClick={() => {
                                  handleDeleteDiag(diag);
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
                    className='flex  text-gray-500 left-0 justify-start mt-10 mb-5'
                  >
                    Doctor:
                  </label>
                  <input
                    type='text'
                    name='doctor'
                    id='doctor'
                    className='form-text rounded-lg text-2xl p-4 w-full mb-5'
                    required
                    onChange={handleChange}
                    value={data.doctor}
                  />
                </span>
                <span className='flex items-end justify-center sm:justify-end mb-5'>
                  {/*Yaha pe Link kar de to add new doctor page @Kartik-Gupta-2004*/}
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
                    className='flex  text-gray-500 left-0 justify-start mt-10 mb-5'
                  >
                    Note:
                  </label>
                  <textarea
                    name='rec_note'
                    id='note'
                    cols='30'
                    rows='1'
                    className='form-input text-xl rounded-lg p-4 resize-none box-border w-full'
                    onChange={handleChange}
                    value={data.rec_note}
                  />
                </span>
                <span className='flex justify-center sm:col-span-2'>
                  <button
                    disabled={isLoading}
                    className='rounded-full font-bold text-3xl px-5 py-4 bg-rose-400 text-white mt-3 disabled:opacity-75'
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

export default Examination;
