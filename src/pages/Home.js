import React from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl text-gray-700 font-bold">
        Appointment Management System
      </h1>
      <p className="text-gray-800 mt-6 text-lg">
        Login as Doctor/Patient by clicking on below buttons.
      </p>
      <div className="mt-4 flex justify-center items-center">
        <Link
          to="/doctor"
          className="mx-8 px-6 py-2.5 border border-gray-500 text-gray-600 rounded-md hover:shadow-md hover:text-gray-800 hover:border-gray-800"
        >
          Doctor
        </Link>
        <Link
          to="/patient"
          className="mx-8 px-6 py-2.5 bg-gray-700 text-gray-100 rounded-md hover:shadow-md hover:bg-gray-800"
        >
          Patient
        </Link>
      </div>
    </div>
  );
};
