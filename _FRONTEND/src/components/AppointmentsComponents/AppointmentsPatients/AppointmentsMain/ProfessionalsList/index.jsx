import React, { useEffect, useState } from "react";
import SeeMoreButton from "../../../../Resources/Others/SeeMoreButton";
import { useSelector } from "react-redux";
import i18nAppointments from "../../../../../i18n/appointments/index.json";
import i18nDoctors from "../../../../../i18n/doctors/index.json";
import { getFetch } from "../../../../../services";
import { useQuery } from "@tanstack/react-query";
import endpoints from "../../../../../helpers/endpoints.js";
import InnerSpinner from "../../../../Resources/Spinner/InnerSpinner";

export default function ProfessionalsList() {
    const language = useSelector((state) => state.i18nReducer.language);
    const [professionalsList, setProfessionalsList] = useState([]);
    const [hasReachLastOne, setHasReachLastOne] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);

    const params= `?page=${pageNumber}`
    const url = endpoints.getAllDoctors + params
	const token = sessionStorage.getItem('token')
	const { data, error, isLoading, isFetching, isSuccess, refetch } = useQuery({
		queryKey: ["key-getDoctorsList"],
		queryFn: ()=> getFetch(url, token),
		enabled: false,
	}) 

	useEffect(()=>{
		refetch()
	},[])

    useEffect(()=>{
		if (data) {
            setHasReachLastOne(data.last)
            setProfessionalsList((prev)=>[...prev, ...data.content])
        }

	},[data])    

    const setSeeMore = () => {
        setPageNumber((prevPage)=>prevPage+1)
    }

    useEffect(()=>{
        refetch()
    },[pageNumber])


	return (
		<div
			className="w-full lg:flex-1 border rounded-3xl h-full"
			style={{
				background:
					"linear-gradient(180deg, rgba(86, 102, 190, 0.8) 57.95%, rgba(217, 130, 53, 0.56) 100%)",
			}}
		>
			<p className="text-center text-white p-3 font-medium">
                {i18nAppointments[language].professionalsList.title}
			</p>

            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3 p-10 pb-0">
                    { professionalsList.length === 0
                        ? <InnerSpinner />
                        :professionalsList.map((e, i) => (
                        <div key={i} className="rounded-3xl p-4 bg-[#fef7ff] cursor-pointer hover:scale-[101%] transition duration-300">
                            <p>
                                <small>{`${e.user.name} ${e.user.lastname}`}</small>
                            </p>
                            <p>
                                <small className="text-[#49454f]">
                                    {
                                        Object.values(
                                            i18nDoctors[language].specialty.arrayOptions.filter((element, i)=>{
                                                return Number(Object.keys(element)) === e.specialty.id
                                            })[0]
                                        )[0]
                                    }
                                </small>
                            </p>
                        </div>
                    ))}
                </div>

                <SeeMoreButton isDisabled={hasReachLastOne} onClickSeeMoreHandler={setSeeMore}/>
            </div>
		</div>
	);
}
