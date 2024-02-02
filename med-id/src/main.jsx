import React from "react";
import ReactDOM from "react-dom/client";
import { Features, MedicalVisitForm, NearbyPharmacy, 
  PrescriptionForm, BloodGlucoseForm, BloodPressureForm, OxygenSat, 
  Examination, AddAllergy, AddFamily, AddVaccine} from "./Components";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Features /> */}
    {/* <MedicalVisitForm/> */}
    {/* <NearbyPharmacy/> */}
    {/* <PrescriptionForm/> */}
    {/* <BloodGlucoseForm /> */}
    {/* <BloodPressureForm /> */}
    {/* <OxygenSat/> */}
    {/* <Examination/> */}
    {/* <AddAllergy/> */}
    {/* <AddFamily /> */}
    <AddVaccine />
  </React.StrictMode>
);
