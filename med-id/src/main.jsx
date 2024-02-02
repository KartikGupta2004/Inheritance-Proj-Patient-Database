import React from "react";
import ReactDOM from "react-dom/client";
import { Features, MedicalVisitForm, NearbyPharmacy, PrescriptionForm, BloodGlucoseForm, BloodPressureForm, OxygenSat, Examination } from "./Components";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Features /> */}
    {/* <MedicalVisitForm/> */}
    {/* <NearbyPharmacy/> */}
    <PrescriptionForm/>
    {/* <BloodGlucoseForm /> */}
    {/* <BloodPressureForm /> */}
    {/* <OxygenSat/> */}
    {/* <Examination/> */}
  </React.StrictMode>
);
