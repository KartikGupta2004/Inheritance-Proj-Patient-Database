import React from 'react';
import chooseFile from "../icons/add.png";

const PrescriptionForm = () =>{
    return (
      <span className='flex sm:col-span-2 justify-center'>
        <label
          htmlFor='file'
          className='w-fit flex flex-col items-center cursor-pointer bg-white rounded-lg p-4 icon-shadow required:border-red-500'
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
    );
}

export default PrescriptionForm;