import {React, useState} from "react";
import chooseFile from "../icons/add.png";
import doctor from "../icons/doctor.png";

const Examination = () => {
  const [syms, setSyms] = useState([]);
  const [diags, setDiags] = useState([]);
  let symptom="", diagnosis="";
  const handleAddSym = (e) => {
    e.preventDefault();
    if (!symptom) return;
    setSyms((curr) => [...curr, symptom]);
    document.getElementById("symptom").value = "";
  };
  const handleDeleteSym = (sym) => {
    setSyms((curr) => curr.splice(curr.indexOf(sym), 1));
  };
  const handleAddDiag = (e) => {
    e.preventDefault();
    if (!diagnosis) return;
    setDiags((curr) => [...curr, diagnosis]);
    document.getElementById("diagnosis").value = "";
  };
  const handleDeleteDiag = (diag) => {
    setDiags((curr) => curr.splice(curr.indexOf(diag), 1));
  };
  return (
    <div className='flex justify-center items-center h-full box-border'>
      <main className='flex justify-center items-center w-full h-fit box-border flex-col bg-stone-100'>
        <h1 className='block text-center w-5/6 text-xl py-4 px-8 text-rose-400 box-border font-bold border-b-2 border-rose-400'>
          Examination
        </h1>
        <section className='p-6 box-border h-fit'>
          <form
            action=''
            className='grid gap-2 sm:grid-cols-2 box-border place-content-evenly'
          >
            <span className='flex sm:col-span-2 justify-center'>
              <label
                htmlFor='file'
                className='w-fit flex flex-col items-center cursor-pointer bg-white rounded-lg p-4 border border-black'
              >
                <img src={chooseFile} alt='Choose File' className='w-8 h-8' />
                <p>Upload File</p>
                <input
                  type='file'
                  name='file'
                  id='file'
                  accept='image/* , .pdf , .docx , .doc'
                  className='hidden'
                  required
                />
              </label>
            </span>
            <span>
              <label htmlFor='temperature' className='block'>
                Temperature:
              </label>
              <input
                type='number'
                name='temperature'
                id='temperature'
                className='rounded-lg px-2'
                required
              />
            </span>
            <span>
              <label htmlFor='tempunit' className='block'>
                Unit:
              </label>
              <select
                name='tempunit'
                id='tempunit'
                className='rounded-lg px-8'
                required
              >
                <option value='c'>℃</option>
                <option value='f'>℉</option>
              </select>
            </span>
            <span>
              <label htmlFor='weight' className='block'>
                Weight:
              </label>
              <input
                type='number'
                name='weight'
                id='weight'
                className='rounded-lg px-2'
                required
              />
            </span>
            <span>
              <label htmlFor='weightunit' className='block'>
                Unit:
              </label>
              <select
                name='weightunit'
                id='weightunit'
                className='rounded-lg px-8'
                required
              >
                <option value='kg'>kg</option>
                <option value='lbs'>lbs</option>
              </select>
            </span>
            <span>
              <label htmlFor='height' className='block'>
                Height:
              </label>
              <input
                type='number'
                name='height'
                id='height'
                className='rounded-lg px-2'
                required
              />
            </span>
            <span>
              <label htmlFor='heightunit' className='block'>
                Unit:
              </label>
              <select
                name='heightunit'
                id='heightunit'
                className='rounded-lg px-8'
                required
              >
                <option value='ftin'>in</option>
                <option value='cm'>cm</option>
              </select>
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
                required
              />
            </span>
            <span className='flex flex-col sm:col-span-2'>
              <label htmlFor='symptom' className='block'>
                Symptoms:
              </label>
              <div className='flex flex-row gap-2 justify-evenly items-center py-2 box-border'>
                <input
                  type='text'
                  name='symptom'
                  id='symptom'
                  onChange={(e) => (symptom = e.target.value)}
                  className='bg-white rounded-lg form-input p-2 w-4/6'
                  required
                />
                <button
                  type='button'
                  onClick={handleAddSym}
                  className='text-white bg-rose-400 rounded-full px-4 h-full w-1/6'
                >
                  Add
                </button>
              </div>
              {syms.toString() && (
                <div className='bg-white rounded-lg px-2'>
                  <ul>
                    {syms.map((sym, id) => {
                      return (
                        <li key={id} className='flex flex-row justify-evenly'>
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
              <label htmlFor='diagnosis' className=''>
                Diagnoses:
              </label>
              <div className='flex flex-row gap-2 justify-evenly items-center py-2 box-border'>
                <input
                  type='text'
                  name='diagnosis'
                  id='diagnosis'
                  onChange={(e) => (diagnosis = e.target.value)}
                  className='bg-white rounded-lg form-input p-2 w-4/6'
                  required
                />
                <button
                  type='button'
                  onClick={handleAddDiag}
                  className='text-white bg-rose-400 rounded-full px-4 h-full w-1/6'
                >
                  Add
                </button>
              </div>
              {diags.toString() && (
                <div className='bg-white rounded-lg px-2'>
                  <ul>
                    {diags.map((diag, id) => {
                      return (
                        <li key={id} className='flex flex-row justify-evenly'>
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
              <label htmlFor='doctor' className='block'>
                Doctor:
              </label>
              <input
                type='text'
                name='doctor'
                id='doctor'
                className='form-text rounded-lg px-4 w-full'
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
                name='note'
                id='note'
                cols='43'
                rows='1'
                className='form-textarea rounded-lg px-2 resize-none box-border shrink w-full'
              />
            </span>
            <span className='flex justify-center sm:col-span-2'>
              <button className='rounded-full font-bold text-lg px-4 py-2 bg-rose-400 text-white'>
                Save Record
              </button>
            </span>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Examination;
