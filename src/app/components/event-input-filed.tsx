"use client";

import React from 'react';

type TypePageProps = {
    placeholder: string;
    label: string;
    required : boolean;
    name: string;
    value: string;
    handleChange : (event:React.ChangeEvent<HTMLInputElement>) => void;
    error : boolean;
    errorContactNumber : boolean;
    errorEmail : boolean;
    type: string;
}

const EventInputField:React.FC<TypePageProps> = ({errorContactNumber, errorEmail, placeholder, label, required, name, value, handleChange, error, type}) => {


  const validateFields = () =>{
    return (name!=="instagramId" && error && (( name==="name" && !value) || (name==="contactNumber" && errorContactNumber) || (name==="emailId" && errorEmail)))
  }


  return (
    <div className={`relative border-1 ${(validateFields() ? "border-red-600"  : "border-black")}   rounded-xl w-full mt-8 mb-8`}>
      <div className='bg-white pl-2 pr-2 absolute translate-y-[-50%] left-2 flex'>

       <p className={`${validateFields() ?  "text-red-500"  : "text-gray-500"}`}>{label}</p>
       {required && <span className="text-red-500 text-lg">*</span>}

      </div>
      <input  onChange={handleChange} name={name} value={value}  className="bg-transparent text-black border-none outline-none focus:outline-none h-[8vh] w-full pt-2 pb-2 pl-4 pr-4" type={type} placeholder={placeholder}/>
    </div>
  )
}

export default EventInputField
