import React from 'react';

const Authorization = () => {
  const handleAuthorize = () => {
    window.location.href = 'http://localhost:3000/authorize'; // Change to your backend URL
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Authorize with HubSpot</h2>
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
