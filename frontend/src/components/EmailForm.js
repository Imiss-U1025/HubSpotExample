import React, { useState } from "react";
import axios from "axios";

const EmailForm = () => {
  const [emailCampaignId, setEmailCampaignId] = useState("");
  const [newSubject, setNewSubject] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/send-to-non-openers",
        {
          emailCampaignId,
          newSubject,
        }
      );
      alert(response.data);
    } catch (error) {
      console.error("Error sending emails:", error.message);
      alert("Error sending emails");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-8 shadow-md rounded"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email Campaign ID:
        </label>
        <input
          type="text"
          value={emailCampaignId}
          onChange={(e) => setEmailCampaignId(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          New Subject:
        </label>
        <input
          type="text"
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Send to Non-Openers
      </button>
    </form>
  );
};

export default EmailForm;
