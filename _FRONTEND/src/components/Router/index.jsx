import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home"
import Error404 from "../../pages/Error404";
import Error401 from "../../pages/Error401";
import getPathRoutes from "../../helpers/pathroutes"

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
		<Route path={`${getPathRoutes('en', 'home')}`} element={<Home />} />
		<Route path={`${getPathRoutes('en', 'patients')}`} element={<Patients /> } />
		<Route path={`${getPathRoutes('en', 'doctors')}`} element={<Doctors />} />
		<Route path={`${getPathRoutes('en', 'appointments')}`} element={<Appointments />} />
		<Route path={`${getPathRoutes('en', 'medical_records')}`} element={<MedicalRecords />} />
		<Route path={`${getPathRoutes('en', 'prescriptions')}`} element={<Prescriptions />} />
		<Route path={`${getPathRoutes('en', 'treatments')}`} element={<Treatments />} />
		<Route path={`${getPathRoutes('en', 'signin')}`} element={<Signin />} />
		<Route path={`${getPathRoutes('en', 'signup')}`} element={<Signup />} />
		<Route path={`${getPathRoutes('en', 'user_profile')}`} element={<UserProfile />} />

		<Route path={`/error401`} element={<Error401 />} />

		<Route path={`${getPathRoutes('sp', 'home')}`} element={<Home />} />
		<Route path={`${getPathRoutes('sp', 'patients')}`} element={<Patients /> } />
		<Route path={`${getPathRoutes('sp', 'doctors')}`} element={<Doctors />} />
		<Route path={`${getPathRoutes('sp', 'appointments')}`} element={<Appointments />} />
		<Route path={`${getPathRoutes('sp', 'medical_records')}`} element={<MedicalRecords />} />
		<Route path={`${getPathRoutes('sp', 'prescriptions')}`} element={<Prescriptions />} />
		<Route path={`${getPathRoutes('sp', 'treatments')}`} element={<Treatments />} />
		<Route path={`${getPathRoutes('sp', 'signin')}`} element={<Signin />} />
		<Route path={`${getPathRoutes('sp', 'signup')}`} element={<Signup />} />
		<Route path={`${getPathRoutes('sp', 'user_profile')}`} element={<UserProfile />} />
		<Route path={`${getPathRoutes('sp', 'error401')}`} element={<Error401 />} />

		<Route path="*" element={<Error404 />} />
	</Routes>
  );
}