import React from 'react';
import { Link } from 'react-router-dom';

const Guide = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6">How to Use the App</h1>
      <div className="bg-white p-8 shadow-md rounded w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Step-by-Step Guide</h2>
        
        <h3 className="text-xl font-semibold mb-2">Step 1: Authorize with HubSpot</h3>
        <p className="mb-4">
          Click on the "Authorize" button on the home page to authorize the application with your HubSpot account. This allows the app to access your HubSpot data.
        </p>

        <h3 className="text-xl font-semibold mb-2">Step 2: Send Emails to Non-Openers</h3>
        <p className="mb-4">
          After authorization, go to the success page where you can fill in the details of your email campaign. Enter the email campaign ID and the new subject for the follow-up email, then click "Send to Non-Openers".
        </p>

        <h3 className="text-xl font-semibold mb-2">Step 3: Monitor the Results</h3>
        <p className="mb-4">
          Check your HubSpot account to monitor the results of the follow-up emails sent to non-openers.
        </p>

        <div className="mt-8">
          <Link to="/" className="bg-[#273343] hover:bg-[#19212c] text-white font-bold py-2 px-4 rounded mr-4">
            Back to Home
          </Link>
          <Link to="/success" className="bg-[#f67854] hover:bg-[#ca5b40] text-white font-bold py-2 px-4 rounded">
            Go to Success Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Guide;
