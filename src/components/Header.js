import React from "react";
import { Link, useLocation } from "react-router-dom";
export const Header = () => {
  const location = useLocation();
  const user =
    location.pathname === "/patient"
      ? "Patient"
      : location.pathname === "/doctor"
      ? "Doctor"
      : "";
  return (
    <div
      className={`w-full flex justify-between pb-2 px-2 ${
        location.pathname !== "/" && "border-b"
      }`}
    >
      {location.pathname !== "/" && (
        <Link
          to="/"
          className="border bg-white border-gray-800 px-4 py-2 rounded-lg hover:shadow-md"
        >
          Home
        </Link>
      )}
      {location.pathname !== "/" && (
        <div className="flex gap-2 items-center justify-center">
          <span className="w-10 h-10 border border-gray-800 rounded-full flex justify-center items-center">
            {user[0].toUpperCase()} {user[1].toUpperCase()}
          </span>
          <span>{user}</span>
        </div>
      )}
    </div>
  );
};
