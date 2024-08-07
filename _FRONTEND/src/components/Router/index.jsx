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
import MyAppointments from "../../pages/Appointments/MyAppointments";
import MedicalRecords from "../../pages/MedicalRecords";
import SearchMedicalRecords from "../../pages/MedicalRecords/SearchMedicalRecords";
import Prescriptions from "../../pages/Prescriptions";
import Treatments from "../../pages/Treatments";
import CreateTreatment from "../../pages/Treatments/CreateTreatment";
import Signin from "../../pages/Signin";
import Signup from "../../pages/Signup";
import UserProfile from "../../pages/UserProfile"

export default function Router() {

  return (
	<Routes>
		<Route path={`${getPathRoutes('en', 'home', {isForNavBar: true})}`} element={<Home />} />
		<Route path={`${getPathRoutes('en', 'patients', {isForNavBar: true})}`} element={<Patients /> } />
		<Route path={`${getPathRoutes('en', 'doctors', {isForNavBar: true})}`} element={<Doctors />} />
		<Route path={`${getPathRoutes('en', 'appointments', {isForNavBar: true})}`} element={<Appointments />} />
		<Route path={`${getPathRoutes('en', 'medical_records', {isForNavBar: true})}`} element={<MedicalRecords />} />
		<Route path={`${getPathRoutes('en', 'search_medical_records', {isForNavBar: false})}`} element={<SearchMedicalRecords />} />
		<Route path={`${getPathRoutes('en', 'prescriptions', {isForNavBar: true})}`} element={<Prescriptions />} />
		<Route path={`${getPathRoutes('en', 'treatments', {isForNavBar: true})}`} element={<Treatments />} />
		<Route path={`${getPathRoutes('en', 'create_treatment', {isForNavBar: false})}`} element={<CreateTreatment />} />
		<Route path={`${getPathRoutes('en', 'signin', {isForNavBar: true})}`} element={<Signin />} />
		<Route path={`${getPathRoutes('en', 'signup', {isForNavBar: false})}`} element={<Signup />} />
		<Route path={`${getPathRoutes('en', 'user_profile', {isForNavBar: true})}`} element={<UserProfile />} />
		<Route path={`${getPathRoutes('en', 'reserve_appointment', {isForNavBar: false})}`} element={<ReserveAppointment />} />
		<Route path={`${getPathRoutes('en', 'scheduled_appointments', {isForNavBar: false})}`} element={<ScheduledAppointments />} />
		<Route path={`${getPathRoutes('en', 'my_appointments', {isForNavBar: false})}`} element={<MyAppointments />} />

		<Route path={`/error401`} element={<Error401 />} />

		<Route path={`${getPathRoutes('sp', 'home', {isForNavBar: true})}`} element={<Home />} />
		<Route path={`${getPathRoutes('sp', 'patients', {isForNavBar: true})}`} element={<Patients /> } />
		<Route path={`${getPathRoutes('sp', 'doctors', {isForNavBar: true})}`} element={<Doctors />} />
		<Route path={`${getPathRoutes('sp', 'appointments', {isForNavBar: true})}`} element={<Appointments />} />
		<Route path={`${getPathRoutes('sp', 'medical_records', {isForNavBar: true})}`} element={<MedicalRecords />} />
		<Route path={`${getPathRoutes('sp', 'search_medical_records', {isForNavBar: false})}`} element={<SearchMedicalRecords />} />
		<Route path={`${getPathRoutes('sp', 'prescriptions', {isForNavBar: true})}`} element={<Prescriptions />} />
		<Route path={`${getPathRoutes('sp', 'treatments', {isForNavBar: true})}`} element={<Treatments />} />
		<Route path={`${getPathRoutes('sp', 'create_treatment', {isForNavBar: false})}`} element={<CreateTreatment />} />
		<Route path={`${getPathRoutes('sp', 'signin', {isForNavBar: true})}`} element={<Signin />} />
		<Route path={`${getPathRoutes('sp', 'signup', {isForNavBar: false})}`} element={<Signup />} />
		<Route path={`${getPathRoutes('sp', 'user_profile', {isForNavBar: true})}`} element={<UserProfile />} />
		<Route path={`${getPathRoutes('sp', 'reserve_appointment', {isForNavBar: false})}`} element={<ReserveAppointment />} />
		<Route path={`${getPathRoutes('sp', 'scheduled_appointments', {isForNavBar: false})}`} element={<ScheduledAppointments />} />
		<Route path={`${getPathRoutes('sp', 'my_appointments', {isForNavBar: false})}`} element={<MyAppointments />} />

		<Route path="*" element={<Error404 />} />
	</Routes>
  );
}