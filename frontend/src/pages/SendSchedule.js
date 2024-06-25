import React, { useState } from "react";
import HoverInfo from "../components/HoverInfo";
import CustomizedHook from "../components/SendList";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PersonIcon from '@mui/icons-material/Person';

const SendSchedule = () => {
  const [radioValue, setRadioValue] = useState("option1");
  const [title, Settitle] = useState("");
  const [nonOpeners, setNonOpeners] = useState(false);
  const handleCheckboxNonOpeners = (event) => {
    setNonOpeners(event.target.checked);
  };

  const radioChange = (value) => {
    setRadioValue(value);
  };
  const handleSetTitle = (e) => {
    Settitle(e.target.value);
  };
  return (
    <div className="flex justify-between flex-1">

      <div className=" p-10 pl-28 pr-20 flex-1 basis-auto">
        <h1 className="text-2xl font-bold mb-5">Recipients</h1>
        <div className="flex  items-center ">
          <h1 className="font-bold my-5">Send to</h1>
          <HoverInfo text="Enter the Email-Address of people you want to send this" />
        </div>
        <div className="relative inline-block text-left w-full">
          <CustomizedHook />
        </div>
        <div className="flex items-center">
          <h1 className="font-bold my-5">Don't Send to</h1>
          <HoverInfo
            className="border-2 border-red-700"
            text="Enter the Email-Address of people you don't want to send this"
          />
        </div>
        <div className="relative inline-block text-left w-full">
          <CustomizedHook />
        </div>
        <label className="flex items-center my-5">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-500 border-blue-500 rounded focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="ml-2 text-gray-700">
            Don't send to{" "}
            <span className="text-blue-500 font-bold">unengaged contacts</span>.
          </span>
          <HoverInfo text="Contacts you are not actively in touch with" />
        </label>

        <label className="flex items-center my-5">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-500 border-blue-500 rounded focus:ring-blue-500 focus:border-blue-500"
            onClick={handleCheckboxNonOpeners}
          />
          <span className="ml-2 text-gray-700">Send to non openers </span>
        </label>
        {nonOpeners && (
          <div>
            <span className="text-lg font-semibold">Subject Line</span>{" "}
            <span className="text-sm">
              (Recommended to choose a new Subject Line)*
            </span>
            <div className="flex flex-wrap my-2">
              <input
                type="text"
                value={title}
                onChange={handleSetTitle}
                className="px-4 border border-gray-400 border-opacity-40 w-[400px] h-[40px] rounded-sm text-sm font-semibold focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <button className=" text-[#4F6E91] flex justify-center items-center bg-[#EAF0F5] border border-[#93a8bf66] border-opacity-40  h-[40px] px-2 mx-3 rounded-sm text-sm font-semibold">
                <SentimentSatisfiedAltIcon/>
              </button>
              <button className="text-[#4F6E91] flex items-center border bg-[#EAF0F5] px-2 border-[#93a8bf66] border-opacity-40 h-[40px] rounded-sm text-sm font-semibold">
                <PersonIcon/>Personalize
              </button>
            </div>
            <div className="flex flex-wrap ">
              <span className="text-md  font-semibold mt-4">Resend after </span>
              <input
                type="number"
                className="block mx-4 px-2 mt-2 border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />

              <span className="text-md font-semibold mt-4"> hours</span>
            </div>
          </div>
        )}
      </div>

      <div className=" bg-[#F5F8FA] min-w-[35%]">
        <h1 className=" text-2xl font-bold m-5">Sending Options</h1>
        <label className="inline-flex items-center m-5">
          <input
            type="radio"
            className="form-radio text-blue-500 border-blue-500"
            value="option1"
            checked={radioValue === "option1"}
            onChange={() => radioChange("option1")}
          />
          <span className="ml-2 font-semibold text-lg">Send Now</span>
        </label>
        <label className="inline-flex items-center m-5">
          <input
            type="radio"
            className="form-radio text-blue-500 border-[blue-500]"
            value="option2"
            checked={radioValue === "option2"}
            onChange={() => radioChange("option2")}
          />
          <span className="ml-2 font-semibold text-lg">Schedule for Later</span>
        </label>

        <hr className="border-b border-blue-[#DFE3EB] my-4 w-full" />
        <div className="flex flex-wrap m-5">
          <h1 className="text-xl font-semibold">Estimated recipients</h1>
          <HoverInfo text="People who are supposed to get this E-Mail" />
        </div>
        <span className="m-5">
          <span className="text-5xl font-bold">1</span>
          <span className="text-3xl"> out of </span>
          <span className="text-4xl">1</span>
        </span>
      </div>
    </div>
  );
};

export default SendSchedule;
