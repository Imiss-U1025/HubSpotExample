
import React, { useState } from 'react';
import DropdownInput from './DropdownInput';
import HoverInfo from '../components/HoverInfo';

const SendSchedule = () => {

    const [radioValue,setRadioValue] = useState('option1');
    const radioChange = (value)=>{
      setRadioValue(value);
    }
  
    return(
    <div className='flex w-screen h-screen justify-between  '>
    <div className=' p-10 ml-20 mt-5'>
      <h1 className='text-2xl font-bold mb-5'>Recipients</h1>
       <div className='flex  items-center '>
      <h1 className='font-bold my-5'>Send to</h1>
      <HoverInfo text='Enter the Email-Address of people you want to send this'/>
      </div>
      <DropdownInput/>
     <div className='flex items-center'>
      <h1 className='font-bold my-5'>Don't Send to</h1>
      <HoverInfo className='border-2 border-red-700' text='Enter the Email-Address of people you do not want to send this'/>
      </div>
      <DropdownInput/>
  
      <label class="flex items-center my-5">
        <input
        type="checkbox"
        className="form-checkbox h-4 w-4 text-blue-500 border-blue-500 rounded focus:ring-blue-500 focus:border-blue-500"
        />
        <span className="ml-2 text-gray-700">Don't send to <span className='text-blue-500 font-bold'>unengaged contacts</span>.</span>
        <HoverInfo text='Contacts you are not actively in touch with'/>
      </label>
   
       <label class="flex items-center my-5">
        <input
        type="checkbox"
        className="form-checkbox h-4 w-4 text-blue-500 border-blue-500 rounded focus:ring-blue-500 focus:border-blue-500"
        />
        <span className="ml-2 text-gray-700">Don't send to non openers </span>
      </label>   
  
    </div>
  
    <div className=' bg-lightb min-w-[30%]'>
        <h1 className=' text-2xl font-bold m-5'>Sending Options</h1>
        <label className="inline-flex items-center m-5">
          <input
            type="radio"
            className="form-radio text-blue-500 border-blue-500"
            value="option1"
            checked={radioValue === "option1"}
            onChange={()=>radioChange("option1")}
          />
          <span className="ml-2 font-semibold text-lg">Send Now</span>
        </label>
        <label className="inline-flex items-center m-5">
          <input
            type="radio"
            className="form-radio text-blue-500 border-blue-500"
            value="option2"
            checked={radioValue==="option2"}
            onChange={()=>radioChange("option2")}
          />
          <span className="ml-2 font-semibold text-lg">Schedule for Later</span>
        </label>
  
        <hr className='border-b border-blue-700 my-4 w-full'/>
        <div className='flex flex-wrap m-5'>
        <h1 className='text-xl font-semibold'>Estimated recipients</h1>
        <HoverInfo text='People who are supposed to get this E-Mail'/>
        </div>
        <span className='m-5'>
          <span className="text-8xl font-bold">1</span>
          <span className="text-3xl"> out of </span>
          <span className="text-5xl">1</span>
        </span>
  
    </div>
    </div>
    );
  }

  export default SendSchedule;