import { React, useState } from "react";
import chooseFile from "../icons/add.png";
import doctor from "../icons/doctor.png";
import { useAuthContext } from "../Hooks/useAuthContext";

const PrescriptionForm = () => {
  const [data, setData] = useState({
    drugs: [],
    file: null,
    date: "",
    doctor: "",
    rec_note: "",
  });
  const drugTrack = {
    drug: "",
    dose: "",
  };
  const { user } = useAuthContext();
  const saveData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/record/addrecord",
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
    } catch (error) {
      console.log(`Error: ${error.error}`);
    }
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleFileUpload = (e) => {
    setData({ ...data, file: e.target.files[0] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    saveData();
    console.log(data);
    setData({
      drugs: [],
      file: null,
      date: "",
      doctor: "",
      rec_note: "",
    });
  };
  const handleAdd = (e) => {
    if (drugTrack.dose === "" || drugTrack.drug === "") return;
    setData({ ...data, drugs: [...data.drugs, drugTrack] });
    document.getElementById("drug").value = "";
    document.getElementById("dose").value = "";
  };
  const handleDelete = (drugBox) => {
    const newDrugs = data.drugs.filter((d) => {
      return JSON.stringify(d) !== JSON.stringify(drugBox);
    });
    setData({ ...data, drugs: newDrugs });
  };
  return (
    <div className='flex justify-center items-center h-full w-full'>
      <main className='flex justify-center items-center w-full h-fit box-border flex-col bg-stone-100'>
        <h1 className='block text-center w-5/6 text-xl py-4 px-8 text-rose-400 box-border font-bold border-b-2 border-rose-400'>
          Add Prescription
        </h1>
        <section className='p-6 box-border h-fit'>
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
                <img src={chooseFile} alt='Choose File' className='w-8 h-8' />
                <p>{data.file ? "Change File" : "Upload Prescription"}</p>
                <input
                  type='file'
                  name='file'
                  id='file'
                  accept='image/* , .pdf , .docx , .doc'
                  className='hidden'
                  onChange={handleFileUpload}
                />
                {data.file && (
                  <p className='text-sm'> File: {data.file.name}</p>
                )}
              </label>
            </span>
            <span className='flex flex-col sm:col-span-2'>
              <div className='flex flex-col sm:flex-row gap-2 justify-around items-center p-2 box-border bg-stone-300 rounded-lg flex-auto'>
                <input
                  type='text'
                  name='drug'
                  id='drug'
                  placeholder='Drug'
                  onChange={(e) => (drugTrack.drug = e.target.value)}
                  className='bg-white rounded-lg form-input p-2 flex-auto'
                />
                <input
                  type='text'
                  name='dose'
                  id='dose'
                  placeholder='Dose'
                  onChange={(e) => (drugTrack.dose = e.target.value)}
                  className='bg-white rounded-lg form-input p-2 flex-auto'
                />
                <button
                  type='button'
                  onClick={handleAdd}
                  className='text-white bg-rose-400 rounded-full px-4 h-full flex-auto'
                >
                  Add
                </button>
              </div>
              {data.drugs.toString() && (
                <div className='bg-white rounded-lg'>
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
              <label htmlFor='date' className='block'>
                Date:
              </label>
              <input
                type='date'
                name='date'
                id='date'
                className='w-full rounded-lg px-2'
                onChange={handleChange}
                value={data.date}
                required
              />
            </span>
            <span>
              <label htmlFor='doctor' className='block'>
                Doctor:
              </label>
              <input
                type='text'
                name='doctor'
                id='doctor'
                className='form-text rounded-lg px-4 w-full'
                onChange={handleChange}
                value={data.doctor}
                required
              />
            </span>
            <span className='flex items-end justify-center sm:justify-start'>
              {/*Yaha pe Link kar de to add new doctor page @Kartik-Gupta-2004*/}
              <span className='p-2 bg-white rounded-lg border border-black'>
                <img src={doctor} alt='doctor' className='w-6 h-6' />
              </span>
            </span>
            <span className='sm:col-span-2'>
              <label htmlFor='note' className='block'>
                Note:
              </label>
              <textarea
                name='rec_note'
                id='note'
                cols='30'
                rows='1'
                onChange={handleChange}
                value={data.note}
                className='form-textarea rounded-lg px-2 resize-none box-border flex-auto w-full'
              />
            </span>
            <span className='flex justify-center sm:col-span-2'>
              <button
                type='submit'
                className='rounded-full font-bold text-lg px-4 py-2 bg-rose-400 text-white'
              >
                Save Record
              </button>
            </span>
          </form>
        </section>
      </main>
    </div>
  );
};

export default PrescriptionForm;
