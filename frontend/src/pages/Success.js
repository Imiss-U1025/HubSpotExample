import React from 'react';
import EmailForm from '../components/EmailForm';

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Authorization Successful</h1>
      <EmailForm />
    </div>
  );
};

export default Success;
