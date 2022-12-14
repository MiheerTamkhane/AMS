import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, PatientView, DoctorView } from "../pages";
const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctor" element={<DoctorView />} />
      <Route path="/patient" element={<PatientView />} />
    </Routes>
  );
};

export default MyRoutes;
