import React, { useState } from "react";
import { Modal } from "./Modal";
import { Form } from "./Form";
import { usePatient } from "../contexts";
export const DocCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { cancelAppointment } = usePatient();
  return (
    <>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <Form {...props} />
        </Modal>
      )}
      <div className="w-56 border rounded-lg py-2 flex flex-col gap-2">
        <div className="flex px-2">
          <img
            src={props?.img}
            alt=""
            className="h-10 w-10 rounded-full border mr-2"
          />
          <div className="flex flex-col">
            <p className="text-base">{props?.docName}</p>
            <p className="text-gray-400 text-xs">{props?.degree}</p>
          </div>
        </div>
        {(props?.ratings || props?.exp || props?.fees) && (
          <div className="p-2 flex justify-between text-center bg-slate-100">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Ratings</span>
              <span className="text-xs">{props?.ratings}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Exp.</span>
              <span className="text-xs">{props?.exp} years</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Fees</span>
              <span className="text-xs">₹{props?.fees}</span>
            </div>
          </div>
        )}
        {props?.docsCard && (
          <div className="pt-2  px-2 flex gap-2 justify-between">
            <div className="text-xs flex flex-col">
              <span>Timings : </span>
              <span>
                {props?.timings.am}AM - {props?.timings.pm}PM
              </span>
            </div>
            <div>
              <button
                className="px-3 py-1.5 text-sm border rounded-xl bg-blue-500 text-white hover:bg-blue-800"
                onClick={() => setShowModal(true)}
              >
                Book
              </button>
            </div>
          </div>
        )}
        {props?.patientsCard && (
          <div className="flex justify-between px-2">
            date - time
            <div>
              <button
                onClick={() => cancelAppointment(props?.id)}
                className="px-2 py-1 bg-red-300 text-red-800 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
