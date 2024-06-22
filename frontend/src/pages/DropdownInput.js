import React, { useState } from 'react';
import CustomizedHook from '../components/SendList';

const DropdownInput = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
        <CustomizedHook/>
      {isOpen && (
        <div className="absolute right-0 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg z-10">
          <ul className="py-1">
            {/* This list is empty as per your requirement */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownInput;





