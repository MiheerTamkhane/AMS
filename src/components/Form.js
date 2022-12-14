import React from "react";
import { usePatient } from "../contexts";
export const Form = (props) => {
  const { patient, setPatient, addPatient } = usePatient();
  console.log("in the form : ", props);
  return (
    <div className="rounded-md p-4">
      <p>To {props?.docName}</p>
      <form
        action="post"
        onSubmit={(e) => {
          e.preventDefault();
          setPatient((pat) => ({
            ...pat,
            firstName: "",
            lastName: "",
            phno: "",
            email: "",
          }));
          addPatient({
            ...patient,
            id: Math.floor(Math.random() * 10000) + 1,
            docName: props.docName,
            docImg: props.img,
          });
        }}
        className="flex flex-col gap-2"
      >
        <input
          type="text"
          placeholder="First name..."
          value={patient.firstName}
          required
          onChange={(e) => {
            setPatient((pat) => ({ ...pat, firstName: e.target.value }));
          }}
        />
        <input
          type="text"
          placeholder="Last name..."
          required
          value={patient.lastName}
          onChange={(e) => {
            setPatient((pat) => ({ ...pat, lastName: e.target.value }));
          }}
        />
        <input
          type="tel"
          placeholder="Ph no..."
          required
          value={patient.phno}
          onChange={(e) => {
            setPatient((pat) => ({ ...pat, phno: e.target.value }));
          }}
        />
        <input
          type="email"
          placeholder="Email..."
          required
          value={patient.email}
          onChange={(e) => {
            setPatient((pat) => ({ ...pat, email: e.target.value }));
          }}
        />
        <button className="w-fit px-4 py-2 border rounded-md" type="submit">
          Submit
        </button>
        <button className="w-fit px-4 py-2 border rounded-md">Dummy</button>
      </form>
    </div>
  );
};
