import React, { useState } from "react";
import HoverInfo from "../components/HoverInfo";
const EmailList = () => {
  return (
    <div className="flex justify-between bg-gray-300">
      <div className=" bg-white p-10 pl-20 pr-20 flex-1 basis-auto border-r-2 border-solid border-r-gray-100">
        <h1 className="text-2xl font-bold mb-5">Recipients</h1>
        <div className="flex  items-center ">
          <h1 className="font-bold my-5">Send to</h1>
        </div>
      </div>
      <div className=" bg-[#ffffff] min-w-[50%]">
        <h1 className=" text-2xl font-bold m-5">Sending Options</h1>
        <div className="flex flex-wrap m-5">
          <h1 className="text-xl font-semibold">Estimated recipients</h1>
          <HoverInfo text="People who are supposed to get this E-Mail" />
        </div>
      </div>
    </div>
  );
};

export default EmailList;
