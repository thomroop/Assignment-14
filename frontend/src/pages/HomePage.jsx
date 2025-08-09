
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Customer Relationship Management 
        System</h1>
      <p className="mb-6 text-gray-700">Manage your customers efficiently.</p>
      <Link
        to="/login"
        className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded"
      >
        Go to Login
      </Link>
    </div>
  );
};

export default Home;
