import React from "react";
import AppointmentsManagement from "./AppointmentsManagement";
import NextAppointment from "./NextAppointment";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/appointments/index.json";
import ProfessionalsList from "./ProfessionalsList";

export default function ApointmentsMainComponent() {
    const language = useSelector((state) => state.i18nReducer.language);

	return (
		<section className="min-h-screen flex flex-col lg:flex-row justify-center items-start gap-8 p-10 pt-0">
            <div className="w-full lg:flex-1">
                <p className="text-center mb-7">{i18n[language].appointmentPageTitle.title}</p>
                <div className="flex flex-col gap-10">
                    <NextAppointment />
                    <AppointmentsManagement />
                </div>
            </div>
            <ProfessionalsList />
		</section>
	);
}
