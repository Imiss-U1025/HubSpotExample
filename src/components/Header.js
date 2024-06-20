import React from 'react';

const Header = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="relative flex items-center justify-center px-4 py-2 bg-darkb">
      <div className="absolute left-0 flex items-center space-x-4">
       <button className="text-white font-bold border-2 border-white rounded-md hover:bg-black hover:text-amber-600 min-w-[20%] ">Exit</button>
        <button className="text-white font-bold border-2 border-white rounded-md hover:bg-black hover:text-amber-600 min-w-[20%]">Save</button>
        <span className="underline text-white font-semibold min-w-[30%] ml-2">Last Saved </span><span className='text-semibold text-blue-300'>{currentDate}</span>
      </div>
      <h1 className="text-lg text-white font-bold">New Email</h1>
    </div>
  );
};

export default Header;
