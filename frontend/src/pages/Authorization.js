import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Authorization = () => {
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;
  const handleAuthorize = () => {
    console.log(`${apiUrl}/api/auth/authorize`);
    axios
      .get(`${apiUrl}/api/auth/authorize`)
      .then((response) => {
        window.location.href = response?.data?.redirect_url;
        if(response?.error?.data){
           if(response?.error?.status){
            console.log(response?.error?.status)
          }
          if(response?.error?.data){
            console.log(response?.error?.data)
          }
        }
        else if(response?.error?.config){
          console.log(response?.error?.config)
        }
       
        console.log(response);
      })
      .catch((error) => {
        
        console.log(error?.message);
      });
  };

  return (
    <div className="flex-1 flex items-center justify-center bg-gray-100">
      <div className="flex justify-center h-full items-center px-12">
        <h1 class="text-6xl font-bold">
          Welcome to Hubspot Follow Up Email Controller
        </h1>
      </div>
      <div className="flex justify-center h-full bg-[#FF7959] min-w-[30%] items-center border-2 border-white rounded-md">
        <button
          onClick={handleAuthorize}
          className="bg-white text-[#FF7959] p-3 px-12 ml-4 font-bold rounded-md hover:bg-[#d1d1d1]"
        >
          Authorize
        </button>
      </div>
    </div>
  );
};

export default Authorization;
