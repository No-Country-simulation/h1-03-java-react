import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home"
import Error404 from "../../pages/Error404";
import Error401 from "../../pages/Error401";
import pathroutes from '../../helpers/pathroutes.js'
import Doctors from "../../pages/Doctors";
import Patients from "../../pages/Patients";
import Appointments from "../../pages/Appointments";
import MedicalRecords from "../../pages/MedicalRecords";
import Prescriptions from "../../pages/Prescriptions";
import Treatments from "../../pages/Treatments";
import Signin from "../../pages/Signin";
import Signup from "../../pages/Signup";
import UserProfile from "../../pages/UserProfile"

export default function Router() {
  return (
    <Routes>
      <Route path={`${pathroutes.home}`} element={<Home />} />
      <Route path={`${pathroutes.patients}`} element={<Patients /> } />
      <Route path={`${pathroutes.doctors}`} element={<Doctors />} />
      <Route path={`${pathroutes.appointments}`} element={<Appointments />} />
      <Route path={`${pathroutes.medical_records}`} element={<MedicalRecords />} />
      <Route path={`${pathroutes.prescriptions}`} element={<Prescriptions />} />
      <Route path={`${pathroutes.treatments}`} element={<Treatments />} />
      <Route path={`${pathroutes.signin}`} element={<Signin />} />
      <Route path={`${pathroutes.signup}`} element={<Signup />} />
      <Route path={`${pathroutes.user_profile}`} element={<UserProfile />} />

      <Route path={`${pathroutes.error401}`} element={<Error401 />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}