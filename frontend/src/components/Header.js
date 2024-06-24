import React from "react";
<<<<<<< HEAD
=======
import pencil from "../assets/icons8-pencil-80.png";
>>>>>>> fde0971cd445fc2f7e38a516107d57cac64eb301

const Header = () => {
  // const currentDate = new Date().toLocaleDateString();

  return (
    <div className="relative flex items-center justify-between px-4 py-3 bg-[#253342] min-h-[60px] h-[60px]">
      <div className="flex items-center space-x-4">
<<<<<<< HEAD
        <img src="/icon.svg" className=" w-9 h-9"/>
        {/* <button className="text-white p-1 px-3 border-[1px] border-white rounded-md hover:bg-gray-800 min-w-[20%]">
          Exit
        </button> */}
        {/* <button className="text-white p-1 px-3 border-[1px] border-white rounded-md hover:bg-gray-800 min-w-[20%]">
          Save
        </button> */}
        {/* <span className="underline text-white font-semibold min-w-[30%] ml-2">
          Last Saved{" "}
        </span>
        <span className="text-semibold text-blue-300">{currentDate}</span> */}
      </div>
      <div className="flex flex-wrap mr-16">
        <h1 className="text-xl text-white">Follow Up Email Controller</h1>
      </div>
      <div className="left-0 flex items-center space-x-4">
        <button className=" bg-[#FF7959] text-white py-2 px-3 font-bold border-white rounded-sm hover:bg-[#fc9379] min-w-[20%] ">
=======
        <button className="text-white p-2 border-2 border-white rounded-md hover:bg-gray-900 min-w-[20%]">
          Save
        </button>
        <span className="underline text-white font-semibold min-w-[30%] ml-2">
          Last Saved{" "}
        </span>
        <span className="text-semibold text-blue-300">{currentDate}</span>
      </div>
      <div className="flex flex-wrap mr-16">
        <h1 className="text-xl text-white">Follow-up Email</h1>
      </div>
      <div className="left-0 flex items-center space-x-4">
        <button className=" bg-[#FF7959] text-white p-2 ml-4 font-bold border-white rounded-sm hover:bg-[#ff8668] min-w-[20%] ">
>>>>>>> fde0971cd445fc2f7e38a516107d57cac64eb301
          Review and Send
        </button>
      </div>
    </div>
  );
};

export default Header;
