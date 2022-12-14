import React from "react";
import { DocCard } from "../components";
import { usePatient } from "../contexts";
export const PatientView = () => {
  const { patientList } = usePatient();
  const docData = [
    {
      id: 1,
      docName: "Dr. Thigale",
      img: null,
      ratings: 5,
      degree: "MBBS",
      exp: 20,
      fees: 300,
      timings: {
        am: 10,
        pm: 10,
      },
    },
    {
      id: 2,
      docName: "Dr. Patil",
      img: null,
      ratings: 4.5,
      degree: "BHMS",
      exp: 7,
      fees: 200,
      timings: {
        am: 9,
        pm: 8,
      },
    },
    {
      id: 3,
      docName: "Dr. Kshirsagar",
      img: null,
      ratings: 3.5,
      degree: "MBBS",
      exp: 10,
      fees: 500,
      timings: {
        am: 10,
        pm: 10,
      },
    },
  ];
  return (
    <div className="w-full m-4">
      <div className="">
        <h2>Doctors Available</h2>
        <div className="flex m-2 gap-2">
          {docData.map((doc) => (
            <DocCard key={doc.id} {...doc} docsCard={true} />
          ))}
        </div>
      </div>
      <div>
        <h2>Your Appointments</h2>
        <div className="flex gap-2">
          {patientList.map((pat) => (
            <DocCard key={pat.id} {...pat} patientsCard={true} />
          ))}
        </div>
      </div>
    </div>
  );
};
