import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Features from "./Components/Features.jsx";
import MedicalVisitForm from "./Components/MedicalVisitForm.jsx";
import MyLocation from "./Components/MyLocation.jsx";
import PrescriptionForm from "./Components/PrescriptionForm.jsx";
import BloodGlucoseForm from "./Components/BloodGlucoseForm.jsx";
import BloodPressureForm from "./Components/BloodPressureForm.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Features /> */}
    {/* <MedicalVisitForm/> */}
    {/* <MyLocation/> */}
    {/* <PrescriptionForm/> */}
    {/* <BloodGlucoseForm /> */}
    <BloodPressureForm />
  </React.StrictMode>
);
