import React from "react";
const Header = () => {
  // const currentDate = new Date().toLocaleDateString();

  return (
    <div className="relative flex items-center justify-between px-4 py-3 bg-[#253342] min-h-[60px] h-[60px]">
      <div className="flex items-center space-x-4">
        <img src="/icon.svg" className=" w-9 h-9" alt="Logo" />
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
          Send and Schedule
        </button>
      </div>
    </div>
  );
};

export default Header;
