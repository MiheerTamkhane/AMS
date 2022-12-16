import React, { useState } from "react";
import { Modal } from "./Modal";
import { Form } from "./Form";
import { usePatient } from "../contexts";
export const Card = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { cancelAppointment, updateAppointment } = usePatient();
  return (
    <>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <Form {...props} />
        </Modal>
      )}
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`w-56 border rounded-lg py-2 flex flex-col gap-2 shadow-md ${
          props?.status === 0
            ? "bg-yellow-100"
            : props?.status < 0
            ? "bg-red-100"
            : props?.status > 0 && "bg-green-100"
        }`}
      >
        <div className="flex px-2">
          {props?.img ? (
            <img
              src={props?.img}
              alt=""
              className="h-10 w-10 rounded-full border mr-2"
            />
          ) : (
            <span className="h-10 w-10 rounded-full border mr-2 flex items-center justify-center bg-white">
              {props.docName[0].toUpperCase()} {props.docName[1].toUpperCase()}
            </span>
          )}
          <div className="flex flex-col">
            <p className="text-base">{props?.docName}</p>
          </div>
        </div>

        <div className="w-full flex flex-col px-2">
          <span className="text-sm font-semibold text-gray-700">
            {props?.date}, {props?.time.hr}: {props?.time.min}{" "}
            {props?.time.ampm}
          </span>
          {props.status === 0 && (
            <div className="flex gap-2 justify-between mt-2">
              <button
                onClick={() => {
                  setShowModal(true);

                  if (props?.patId) {
                    updateAppointment(props.patId, props);
                  }
                }}
                className={`px-2 py-1 text-gray-100 bg-gray-700 rounded-md`}
              >
                Edit
              </button>
              <button
                onClick={() => cancelAppointment(props?.patId)}
                className={`px-2 py-1 text-red-800 border border-red-800 rounded-md`}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
        <div className="text-xs mx-auto">
          {props.status > 0 ? (
            <p className="text-green-700 font-bold">Appointment approved!</p>
          ) : props.status < 0 ? (
            <p className="text-red-700 font-bold">Appointment Decline!</p>
          ) : (
            <p className="text-yellow-700 font-bold">Pending...</p>
          )}
        </div>
      </div>
    </>
  );
};
