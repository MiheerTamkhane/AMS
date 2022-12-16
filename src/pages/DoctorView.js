import React, { useState } from "react";
import { usePatient } from "../contexts";
import { PatientCard } from "../components";
import { data } from "autoprefixer";
export const DoctorView = () => {
  const { patientList, statusHandler } = usePatient();

  return (
    <div className="w-full mt-6">
      <h2>Patients Appointments</h2>
      <div className="flex gap-2 flex-wrap mt-2">
        {patientList.length > 0 ? (
          patientList.map((pat) => (
            <PatientCard
              key={pat.patId}
              {...pat}
              statusHandler={statusHandler}
            />
          ))
        ) : (
          <p className="w-full p-2 font-semibold text-lg bg-gray-100 flex justify-center">
            No Appointments
          </p>
        )}
      </div>
    </div>
  );
};
