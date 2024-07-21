import React from 'react'
import { useSelector } from 'react-redux';
import TableResults from '../Others/TableResults';
import i18n from "../../../i18n/appointments/modifyAppointment/index.json";

export default function ModifyAppointmentsComponent() {    
    const language = useSelector((state) => state.i18nReducer.language);

	return (
		<section className="min-h-screen flex flex-col ustify-center items-start gap-5 p-10 pt-0">
			Modify Appointment
            {/* <TableResults 
				componentTitle={i18n[language].modifyAppointment.tableResults.componentTitle}
				isButtonSchedule={true}
			/> */}
		</section>
	);
}