import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Notification from "../components/Notification";

const Authorization = () => {
  const location = useLocation();
  const [notification, setNotification] = useState("");

  const getQueryParams = (search) => {
    return new URLSearchParams(search);
  };

  useEffect(() => {
    const queryParams = getQueryParams(location.search);
    const accessToken = queryParams.get("accessToken");
    if (accessToken) {
      if (!localStorage.getItem("accessToken")) {
        setNotification("Authentication is successful.");
      } else if (localStorage.getItem("accessToken") !== accessToken) {
        setNotification("Authentication is successful.");
      }
      localStorage.setItem("accessToken", accessToken);
    }
  }, [location.search]);

  const apiUrl = process.env.REACT_APP_API_URL;

  const handleAuthorize = () => {
    axios
      .get(`${apiUrl}/api/auth/authorize`)
      .then((response) => {
        window.location.href = response?.data?.redirect_url;
      })
      .catch((error) => {
        setNotification(`Error: ${error?.message || "Unknown error occurred"}`);
      });
  };

  return (
    <div className="flex-1 flex items-center justify-center bg-gray-100">
      <div className="flex justify-center h-full items-center px-12">
        <h1 className="text-6xl font-bold leading-snug">
          Welcome to Hubspot Follow Up Email Controller
        </h1>
      </div>
      <div className="flex flex-col justify-center h-full bg-[#FF7959] min-w-[30%] items-center border-2 border-white rounded-md">
        <img src="/images/connect.png" className=" max-w-[200px] mb-7" alt="Connect" />
        <h2 className="font-400 text-white text-3xl px-5 mb-6 text-center">
          Click the button below to <br /> connect with Hubspot
        </h2>
        <button
          onClick={handleAuthorize}
          className="bg-white text-[#FF7959] p-3 px-12 ml-4 font-bold rounded-md hover:bg-[#d1d1d1]"
        >
          Authorize
        </button>
      </div>
      <Notification content={notification} />
    </div>
  );
};

export default Authorization;
