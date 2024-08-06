import React, { useState } from 'react'
import Filters from '../../Others/Filters'
import { useSelector } from 'react-redux';
import i18n from "../../../../i18n/appointments/scheduledAppointments/index.json";
import TableResults from '../../Others/TableResults'; 


export default function ScheduledAppointmentsComponent() {   
    const language = useSelector((state) => state.i18nReducer.language);
    const [data, setData] = useState(null)

    return (
        <section className="min-h-full flex flex-col lg:flex-row justify-center items-start gap-8 p-10 pt-0">
            <div className="lg:min-w-[33%] lg:w-[20%] m-auto lg:m-0">
                <Filters    
                    title={i18n[language].scheduledAppointments.filters.componentTitle} 
                    isWide={false}
                    setData={setData}
                />
            </div>
            <TableResults 
                componentTitle={i18n[language].scheduledAppointments.tableResults.componentTitle}
                isButtonSchedule={false}
                isModificate={false}
                data={data}
            />
        </section>
    )
}
