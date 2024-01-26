import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import { Route } from 'react-router-dom' 
import User from './Components/User/User.jsx'
import RecordForm from './Components/Records/Recordform.jsx'
import Features from './Components/Records/medicalrecords.jsx'
import Login from './Components/Login/Login.jsx'
import MedicalVisit from './Components/MedicalRecords/MedicalVisit.jsx'
import Allergy from './Components/MedicalRecords/Allergy.jsx'
import BloodGlucose from './Components/MedicalRecords/BloodGlucose.jsx'
import BloodPressure from './Components/MedicalRecords/BloodPressure.jsx'
import Doctor from './Components/MedicalRecords/Doctor.jsx'
import Examination from './Components/MedicalRecords/Examination.jsx'
import LabTest from './Components/MedicalRecords/LabTest.jsx'
import OxygenSat from './Components/MedicalRecords/OxygenSat.jsx'
import Presciptions from './Components/MedicalRecords/Presciptions.jsx'
import Family from './Components/MedicalRecords/Family.jsx'
import Vaccine from './Components/MedicalRecords/Vaccination.jsx'
import AddFamily from './Components/MedicalRecords/InsideData/AddFamily.jsx'
import AddVaccine from './Components/MedicalRecords/InsideData/AddVaccine.jsx'
import AddAllergy from './Components/MedicalRecords/InsideData/AddAllergy.jsx'
import Appointment from './Components/Appointment/Appointment.jsx'
import SignUp from './Components/Login/SignUp.jsx'
import MedicalVisitForm from './Components/MedicalRecords/InsideData/MedicalVisitForm.jsx'
import BloodGlucoseForm from './Components/MedicalRecords/InsideData/BloodGlucoseForm.jsx'
import BloodPressureForm from './Components/MedicalRecords/InsideData/BloodPressureForm.jsx'
import PrescriptionForm from './Components/MedicalRecords/InsideData/PrescriptionForm.jsx'

//Method 1
// const router= createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>,
//     children:[
//       {path:"",
//       element:<Home/>},
//       {path:"about",
//       element:<About/>},
//       {path:"contact",
//       element:<ContactUs/>}
//     ]
//   }
// ])
//Method 2
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route path=''element={<Home/>}/>
        <Route path='about'element={<About/>}/>
        <Route path='recordform' element={<RecordForm/>}/>
        <Route path='medicalrecords' element={<Features/>}/>
        <Route path='user/:userid' element={<User/>}/>
        <Route path='login' element={<Login/>}/>
        <Route exact path='login/signup' element={<SignUp/>}/>
        <Route path='appointment' element={<Appointment/>}/>
        <Route path='visit' element={<MedicalVisit/>}/>
        <Route path='addvisit' element={<MedicalVisitForm/>}/>
        <Route path='allergy' element={<Allergy/>}/>
        <Route path='bloodglucose' element={<BloodGlucose/>}/>
        <Route path='addbloodglucose' element={<BloodGlucoseForm/>}/>
        <Route path='bloodpressure' element={<BloodPressure/>}/>
        <Route path='addbloodpressure' element={<BloodPressureForm/>}/>
        <Route path='doctor' element={<Doctor/>}/>
        <Route path='examination' element={<Examination/>}/>
        <Route path='labtest' element={<LabTest/>}/>
        <Route path='oxygensat' element={<OxygenSat/>}/>
        <Route path='prescriptions' element={<Presciptions/>}/>
        <Route path='addprescriptions' element={<PrescriptionForm/>}/>
        <Route path='familyhistory' element={<Family/>}/>
        <Route path='vaccine' element={<Vaccine/>}/>
        <Route path='addfamily' element={<AddFamily/>}/>
        <Route path='addvaccine' element={<AddVaccine/>}/>
        <Route path='addallergy' element={<AddAllergy/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
