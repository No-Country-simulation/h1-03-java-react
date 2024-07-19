import React, { useState } from 'react'
import EditMyInfoPatients from '../PatientsComponents/Crud/EditMyInfoPatients'
import EditMyInfoDoctors from '../DoctorsComponents/Crud/EditMyInfoDoctors'
import DeleteAccount from './DeleteAccount';

export default function UserProfileMainComponent() {
    const [tempTypeUser] = useState(true);

    return (
        <>  
            <>
            {tempTypeUser 
                ? <EditMyInfoPatients />
                : <EditMyInfoDoctors />
            }
            </>
            <DeleteAccount />
        </>
    )
}
