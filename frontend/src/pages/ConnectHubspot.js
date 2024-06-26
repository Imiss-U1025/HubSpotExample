import React from "react";

const ConnectHubspot = () => {
  const handleAuthorize = () => {};

  return (
    <div className="flex-1 flex items-center justify-center bg-gray-100">
      <div>
        <h1 className="text-6xl font-bold">
          Welcome to Hubspot Follow Up Email Controller
        </h1>
      </div>
      <div>
        <button
          onClick={handleAuthorize}
          className="bg-[#FF7959] text-white p-3 px-12 ml-4 font-bold border-white rounded-md hover:bg-[#e98e78]"
        >
          Authorize
        </button>
      </div>
    </div>
  );
};

export default ConnectHubspot;
