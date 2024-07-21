import React from 'react'
import Filters from '../Others/Filters'
import { useSelector } from 'react-redux';
import i18n from "../../../i18n/appointments/reserveAppointment/index.json";
import TableResults from '../ReserveAppointmentComponents/TableResults';


export default function ScheduledAppointmentsComponent() {   
    const language = useSelector((state) => state.i18nReducer.language);

    return (
        <section className="min-h-full flex flex-col lg:flex-row justify-center items-start gap-8 p-10 pt-0">
            <div className="lg:min-w-[250px] lg:w-[20%] m-auto lg:m-0">
                <Filters    
                    title={i18n[language].scheduledAppointments.filters.componentTitle} 
                    isWide={false}
                />
            </div>
            <TableResults 
                componentTitle={i18n[language].scheduledAppointments.tableResults.componentTitle}
                isButtonSchedule={false}
            />
        </section>
    )
}
