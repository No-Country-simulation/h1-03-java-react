import React, { useEffect, useState } from 'react'
import EditMyInfoPatients from './EditMyInfo/EditMyInfoPatients'
import EditMyInfoDoctors from './EditMyInfo/EditMyInfoDoctors'
import DeleteAccount from './DeleteAccount';
import { useSelector } from 'react-redux';
import endpoints from '../../helpers/endpoints';
import { useQuery } from '@tanstack/react-query';
import { getFetch } from '../../services';

export default function UserProfileMainComponent() {
    const language = useSelector((state)=>state.i18nReducer.language)
    const role = useSelector((state)=>state.roleReducer.role)
    const [tempTypeUser] = useState(true);

    const url = endpoints.checkRoleAndToken
	const token = sessionStorage.getItem("token")
	const { data, error, isLoading, isFetching, isSuccess, refetch } = useQuery({
		queryKey: ["key-checkRoleAndToken"],
		queryFn: () => getFetch(url, token),
		enabled: false,
	})

    useEffect(()=>{
        if (!role) {
            refetch()
        }

    },[data])

    return (
        <>  
            <>
            {role==="PATIENT" 
                ? <EditMyInfoPatients />
                : role==="DOCTOR" 
                    ? <EditMyInfoDoctors />
                    : <></>
            }
            </>
            {role && <DeleteAccount />}
        </>
    )
}
