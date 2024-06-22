import React from 'react';

const Header = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="relative flex items-center justify-between px-4 py-3 bg-[#253342]">
      <div className="flex items-center space-x-4">
       <button className="text-white p-2 ml-4 font-bold border-2 border-white rounded-md hover:bg-gray-900 min-w-[20%] ">Exit</button>
        <button className="text-white p-2 border-2 border-white rounded-md hover:bg-gray-900 min-w-[20%]">Save</button>
        <span className="underline text-white font-semibold min-w-[30%] ml-2">Last Saved </span><span className='text-semibold text-blue-300'>{currentDate}</span>
      </div>
      <h1 className="text-xl text-white">New Email</h1>
      <div className="left-0 flex items-center space-x-4">
       <button className=" bg-[#FF7959] text-white p-2 ml-4 font-bold border-white rounded-sm hover:bg-[#ff8668] min-w-[20%] ">Review and Send</button>
      </div>
    </div>
  );
};

export default Header;