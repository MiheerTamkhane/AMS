import { createContext, useContext, useState } from "react";

const PatientContext = createContext();

const PatientProvider = ({ children }) => {
  const [patientList, setPatientList] = useState([]);
  const [patient, setPatient] = useState({
    id: null,
    firstName: "",
    lastName: "",
    gender: "",
    phno: "",
    dateTime: "",
    email: "",
    doc: "",
    img: "",
  });
  console.log(patientList);
  function addPatient(newVal) {
    setPatientList([...patientList, newVal]);
  }

  function cancelAppointment(id) {
    setPatientList((list) => list.filter((item) => item.id !== id));
  }
  return (
    <PatientContext.Provider
      value={{
        patient,
        setPatient,
        addPatient,
        patientList,
        cancelAppointment,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

const usePatient = () => {
  const context = useContext(PatientContext);
  if (context === undefined) throw new Error("PatientContext error!");

  return context;
};

export { usePatient, PatientProvider };
