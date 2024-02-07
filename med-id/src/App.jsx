import React from "react";
import {
  Features,
  MedicalVisitForm,
  NearbyPharmacy,
  PrescriptionForm,
  BloodGlucoseForm,
  BloodPressureForm,
  OxygenSat,
  Examination,
  AddAllergy,
  AddFamily,
  AddVaccine,
  Login,
  SignUp,
} from "./Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Features />
      <MedicalVisitForm />
      <NearbyPharmacy />
      <PrescriptionForm />
      <BloodGlucoseForm />
      <BloodPressureForm />
      <OxygenSat />
      <Examination />
      <AddAllergy />
      <AddFamily />
      <AddVaccine /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='add/oxygensat' element={<OxygenSat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { App };
