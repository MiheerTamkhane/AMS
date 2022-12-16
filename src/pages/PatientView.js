import { useState } from "react";
import { Card, DocCard } from "../components";
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
    <div className="w-full mt-6">
      <div>
        <h2 className="mx-auto">Available Doctors</h2>
        <div className="flex mt-2 gap-4 flex-wrap justify-center md:justify-start">
          {docData.map((doc) => (
            <DocCard key={doc.id} {...doc} />
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h2>Your Appointments</h2>
        <div className="flex mt-2 gap-4 flex-wrap justify-center md:justify-start">
          {patientList.length > 0 ? (
            patientList.map((pat) => <Card key={pat.id} {...pat} />)
          ) : (
            <p className="w-full p-2 font-semibold text-lg bg-gray-100 flex justify-center">
              No Appointments
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
