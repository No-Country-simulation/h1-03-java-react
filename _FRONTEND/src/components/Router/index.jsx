import React from "react";
import { Routes, Route } from "react-router-dom";
import getPathRoutes from "../../helpers/pathroutes"
import Home from "../../pages/Home"
import Error404 from "../../pages/Error404";
import Error401 from "../../pages/Error401";
import Doctors from "../../pages/Doctors";
import Patients from "../../pages/Patients";
import Appointments from "../../pages/Appointments";
import ReserveAppointment from "../../pages/Appointments/ReserveAppointment";
import ScheduledAppointments from "../../pages/Appointments/ScheduledAppointments";
import ModifyAppointments from "../../pages/Appointments/ModifyAppointments";
import MedicalRecords from "../../pages/MedicalRecords";
import Prescriptions from "../../pages/Prescriptions";
import Treatments from "../../pages/Treatments";
import Signin from "../../pages/Signin";
import Signup from "../../pages/Signup";
import UserProfile from "../../pages/UserProfile"
/* import CreatePatient from "../../pages/Patients/Crud/Create"
import ReadPatient from "../../pages/Patients/Crud/Read"
import UpdatePatient from "../../pages/Patients/Crud/Update"
import DeletePatient from "../../pages/Patients/Crud/Delete"
import CreateDoctor from "../../pages/Doctors/Crud/Create"
import ReadDoctor from "../../pages/Doctors/Crud/Read"
import UpdateDoctor from "../../pages/Doctors/Crud/Update"
import DeleteDoctor from "../../pages/Doctors/Crud/Delete" */

export default function Router() {

  return (
	<Routes>
		<Route path={`${getPathRoutes('en', 'home', {isForNavBar: true})}`} element={<Home />} />
		<Route path={`${getPathRoutes('en', 'patients', {isForNavBar: true})}`} element={<Patients /> } />
		<Route path={`${getPathRoutes('en', 'doctors', {isForNavBar: true})}`} element={<Doctors />} />
		<Route path={`${getPathRoutes('en', 'appointments', {isForNavBar: true})}`} element={<Appointments />} />
		<Route path={`${getPathRoutes('en', 'medical_records', {isForNavBar: true})}`} element={<MedicalRecords />} />
		<Route path={`${getPathRoutes('en', 'prescriptions', {isForNavBar: true})}`} element={<Prescriptions />} />
		<Route path={`${getPathRoutes('en', 'treatments', {isForNavBar: true})}`} element={<Treatments />} />
		<Route path={`${getPathRoutes('en', 'signin', {isForNavBar: true})}`} element={<Signin />} />
		<Route path={`${getPathRoutes('en', 'signup', {isForNavBar: true})}`} element={<Signup />} />
		<Route path={`${getPathRoutes('en', 'user_profile', {isForNavBar: true})}`} element={<UserProfile />} />
		<Route path={`${getPathRoutes('en', 'reserve_appointment', {isForNavBar: false})}`} element={<ReserveAppointment />} />
		<Route path={`${getPathRoutes('en', 'scheduled_appointments', {isForNavBar: false})}`} element={<ScheduledAppointments />} />
		<Route path={`${getPathRoutes('en', 'modify_appointments', {isForNavBar: false})}`} element={<ModifyAppointments />} />

		{/* <Route path={`${getPathRoutes('en', 'createPatient', {isForNavBar: false})}`} element={<CreatePatient />} />
		<Route path={`${getPathRoutes('en', 'updatePatient', {isForNavBar: false})}`} element={<UpdatePatient />} />
		<Route path={`${getPathRoutes('en', 'deletePatient', {isForNavBar: false})}`} element={<DeletePatient />} />
		<Route path={`${getPathRoutes('en', 'readPatient', {isForNavBar: false})}`} element={<ReadPatient />} />
		<Route path={`${getPathRoutes('en', 'createDoctor', {isForNavBar: false})}`} element={<CreateDoctor />} />
		<Route path={`${getPathRoutes('en', 'updateDoctor', {isForNavBar: false})}`} element={<UpdateDoctor />} />
		<Route path={`${getPathRoutes('en', 'deleteDoctor', {isForNavBar: false})}`} element={<DeleteDoctor />} />
		<Route path={`${getPathRoutes('en', 'readDoctor', {isForNavBar: false})}`} element={<ReadDoctor />} /> */}

		<Route path={`/error401`} element={<Error401 />} />

		<Route path={`${getPathRoutes('sp', 'home', {isForNavBar: true})}`} element={<Home />} />
		<Route path={`${getPathRoutes('sp', 'patients', {isForNavBar: true})}`} element={<Patients /> } />
		<Route path={`${getPathRoutes('sp', 'doctors', {isForNavBar: true})}`} element={<Doctors />} />
		<Route path={`${getPathRoutes('sp', 'appointments', {isForNavBar: true})}`} element={<Appointments />} />
		<Route path={`${getPathRoutes('sp', 'medical_records', {isForNavBar: true})}`} element={<MedicalRecords />} />
		<Route path={`${getPathRoutes('sp', 'prescriptions', {isForNavBar: true})}`} element={<Prescriptions />} />
		<Route path={`${getPathRoutes('sp', 'treatments', {isForNavBar: true})}`} element={<Treatments />} />
		<Route path={`${getPathRoutes('sp', 'signin', {isForNavBar: true})}`} element={<Signin />} />
		<Route path={`${getPathRoutes('sp', 'signup', {isForNavBar: true})}`} element={<Signup />} />
		<Route path={`${getPathRoutes('sp', 'user_profile', {isForNavBar: true})}`} element={<UserProfile />} />
		<Route path={`${getPathRoutes('sp', 'reserve_appointment', {isForNavBar: false})}`} element={<ReserveAppointment />} />
		<Route path={`${getPathRoutes('sp', 'scheduled_appointments', {isForNavBar: false})}`} element={<ScheduledAppointments />} />
		<Route path={`${getPathRoutes('sp', 'modify_appointments', {isForNavBar: false})}`} element={<ModifyAppointments />} />
		<Route path={'/error401'} element={<Error401 />} />

		{/* <Route path={`${getPathRoutes('sp', 'createPatient', {isForNavBar: false})}`} element={<CreatePatient />} />
		<Route path={`${getPathRoutes('sp', 'updatePatient', {isForNavBar: false})}`} element={<UpdatePatient />} />
		<Route path={`${getPathRoutes('sp', 'deletePatient', {isForNavBar: false})}`} element={<DeletePatient />} />
		<Route path={`${getPathRoutes('sp', 'readPatient', {isForNavBar: false})}`} element={<ReadPatient />} />
		<Route path={`${getPathRoutes('sp', 'createDoctor', {isForNavBar: false})}`} element={<CreateDoctor />} />
		<Route path={`${getPathRoutes('sp', 'updateDoctor', {isForNavBar: false})}`} element={<UpdateDoctor />} />
		<Route path={`${getPathRoutes('sp', 'deleteDoctor', {isForNavBar: false})}`} element={<DeleteDoctor />} />
		<Route path={`${getPathRoutes('sp', 'readDoctor', {isForNavBar: false})}`} element={<ReadDoctor />} /> */}

		

		<Route path="*" element={<Error404 />} />
	</Routes>
  );
}