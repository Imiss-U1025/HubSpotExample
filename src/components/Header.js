import React from 'react';

const Header = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="relative flex items-center justify-center px-4 py-2 bg-darkb">
      <div className="absolute left-0 flex items-center space-x-4">
        <button className="text-white font-bold">Exit</button>
        <button className="text-white font-bold">Save</button>
        <div className="underline text-white">Last Saved {currentDate}</div>
      </div>
      <h1 className="text-lg text-white font-bold">New Email</h1>
    </div>
  );
};

export default Header;
