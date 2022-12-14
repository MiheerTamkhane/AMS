import React from "react";

export const Modal = ({ children, setShowModal }) => {
  return (
    <div className="fixed w-full h-full top-0 left-0 flex justify-center items-center">
      <div
        onClick={(e) => {
          e.stopPropagation();
          setShowModal(false);
        }}
        className="absolute top-0 left-0 opacity-50 bg-gray-800 h-full w-full "
      ></div>
      <div className="z-10 w-96 h-96 border bg-white rounded-lg">
        {children}
      </div>
    </div>
  );
};
