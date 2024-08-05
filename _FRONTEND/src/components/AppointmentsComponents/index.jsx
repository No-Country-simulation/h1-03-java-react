import React from 'react'
import AppointmentsMain from './AppointmentsPatients/AppointmentsMain'
import AppointmentsDoctorss from './AppointmentsDoctors/'
import { useSelector } from 'react-redux';

export default function AppointmentsComponents() {
    const role = useSelector((state) => state.roleReducer.role);

    return (
        <>
            {
                role !== "PATIENT" 
                    ? <AppointmentsDoctorss />
                    : <AppointmentsMain /> 
            }
        </>
    )
}
