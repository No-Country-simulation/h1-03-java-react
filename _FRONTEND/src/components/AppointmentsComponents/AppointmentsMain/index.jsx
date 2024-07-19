import React from "react";
/* import Select from "../../../Resources/FormElements/Select";
import Button from "../../../Resources/FormElements/Button";
import TitleAvatar from "../../../Resources/Others/TitleAvatar";
import FilterAppointment from "./FilterAppointment";
import Results from "../../../DoctorsComponents/Results"; */
import ShiftsManagement from "./ShiftsManagement";
import NextAppointment from "./NextAppointment";
import { useSelector } from "react-redux";
import i18n from "../../../i18n/appointments/index.json";
import ProfessionalsList from "./ProfessionalsList";

export default function ApointmentsMainComponent() {
    const language = useSelector((state) => state.i18nReducer.language);

	return (
		<section className="min-h-screen flex justify-center items-start gap-8 p-10 pt-0">
            <div className="flex-1">
                <p className="text-center mb-7">{i18n[language].appointmentPageTitle.title}</p>
                <div className="flex flex-col gap-10">
                    <NextAppointment />
                    <ShiftsManagement />
                </div>
            </div>
            <ProfessionalsList />
		</section>

		/* <section className="grid m-auto sm:justify-center sm:w-[400px] gap-5 border border-red-500">
            <TitleAvatar title="AGENDAR CITA" />
            <FilterAppointment />
            <Results />
        </section> */
	);
}
