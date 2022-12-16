import { createContext, useContext, useReducer, useState } from "react";

const PatientContext = createContext();

function reducerFunc(state, action) {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };
    case "EMAIL":
      return { ...state, email: action.payload };
    case "PHNO":
      return { ...state, phno: action.payload };
    case "DOC_NAME":
      return { ...state, docName: action.payload };
    case "DATE":
      return { ...state, date: action.payload };
    case "TIME":
      return { ...state, time: action.payload };
    case "STATUS":
      return { ...state, status: action.payload };
    case "UPDATE":
      return { ...state, ...action.payload };
    case "CLEAR":
      return {
        ...state,
        name: "",
        email: "",
        phno: "",
        docName: "",
        date: "",
        time: { hr: "", min: "" },
        status: 0,
      };
    default:
      return state;
  }
}

const PatientProvider = ({ children }) => {
  const [patientList, setPatientList] = useState([]);
  const [patient, dispatchPatient] = useReducer(reducerFunc, {
    name: "",
    docName: "",
    phno: "",
    date: "",
    time: {},
    email: "",
    status: 0,
  });

  function addPatient(newPatient) {
    setPatientList((patList) => [...patList, newPatient]);
  }

  function cancelAppointment(id) {
    setPatientList((list) => list.filter((item) => item.patId !== id));
  }

  function updateAppointment(id, data) {
    dispatchPatient({ type: "UPDATE", payload: data });
    const updatedList = patientList.map((pat) => {
      if (pat.patId === id) {
        return data;
      } else {
        return pat;
      }
    });
    setPatientList(updatedList);
  }
  function statusHandler(id, status) {
    setPatientList((list) =>
      list.map((item) => (item.patId === id ? { ...item, status } : item))
    );
  }
  return (
    <PatientContext.Provider
      value={{
        patient,
        addPatient,
        patientList,
        setPatientList,
        cancelAppointment,
        updateAppointment,
        dispatchPatient,
        statusHandler,
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
