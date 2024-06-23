import React from 'react';

const Authorization = () => {
  const handleAuthorize = () => {
    window.location.href = 'http://localhost:3000/authorize'; // Change to your backend URL
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={handleAuthorize}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Authorize
      </button>
    </div>
  );
};

export default Authorization;
