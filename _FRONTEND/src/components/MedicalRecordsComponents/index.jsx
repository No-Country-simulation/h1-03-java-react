import React from 'react'
import { useSelector } from 'react-redux';
import MedicalRecordsPatients from './MedicalRecordsPatients';
import MedicalRecordsDoctors from './MedicalRecordsDoctors';

export default function MedicalRecordsMainComponent() {
    const role = useSelector((state) => state.roleReducer.role);

    return (
        <>
            {
                role !== "PATIENT" 
                    ? <MedicalRecordsDoctors />
                    : <MedicalRecordsPatients />
            }
        </>
    )
}
