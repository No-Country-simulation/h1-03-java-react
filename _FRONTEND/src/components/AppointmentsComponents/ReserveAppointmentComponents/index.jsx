import React from "react";
import Filters from "../Others/Filters";
import TableResults from "../Others/TableResults";
import { useSelector } from "react-redux";
import i18n from "../../../i18n/appointments/reserveAppointment/index.json";

export default function ReserveAppointmentComponent() {
	const language = useSelector((state) => state.i18nReducer.language);

	return (
		<section className="min-h-screen flex flex-col ustify-center items-start gap-5 p-10 pt-0">
			<Filters 
				title={i18n[language].reserveAppointment.filters.componentTitle} 
				isWide={true}
			/>
            <TableResults 
				componentTitle={i18n[language].reserveAppointment.tableResults.componentTitle}
				isButtonSchedule={true}
				isModificate={false}
			/>
		</section>
	);
}
