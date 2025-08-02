import React from "react";

const Success = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-md text-center">
        <svg
          className="mx-auto mb-6 w-16 h-16 text-green-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <h1 className="text-3xl font-bold text-green-700 mb-4">Payment Successful!</h1>
        <p className="text-gray-700 text-lg">
          Thank you for your payment. Your transaction was completed successfully.
        </p>
      </div>
    </div>
  );
};

export default Success;
