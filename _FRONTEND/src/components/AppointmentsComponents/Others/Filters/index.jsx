import React, { useEffect, useState } from "react";
import magnifyingGlass from "../../../../assets/svg/others/magnifyingGlass.svg";
import Select from "../../../Resources/FormElements/Select";
import Button from "../../../Resources/FormElements/Button";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/appointments/reserveAppointment/index.json";
import i18nDoctors from "../../../../i18n/doctors/index.json";
import { useQuery } from "@tanstack/react-query";
import { getFetch } from "../../../../services";
import endpoints from "../../../../helpers/endpoints";

const getTomorrowDate = () => {
	const today = new Date();
	const tomorrow = new Date(today);
	
	tomorrow.setDate(today.getDate() + 1);
	return tomorrow.toISOString().split('.')[0]
}

const getLastDayOfCurrentYear = () => {
	const today = new Date();
	const year = today.getFullYear();

	const lastDayOfYear = new Date(year, 11, 31);
	return lastDayOfYear.toISOString().split('.')[0]
}

export default function Filters({title, isWide, setData}) {
	const language = useSelector((state) => state.i18nReducer.language);
	const [isDisbledSelects, setIsDisabledSelects] = useState(true)
	const [idSpecialty, setIdSpecialty] = useState('')
	const [idProfessional, setIdProfessional] = useState('')
	const [idTimeSlot, setIdTimeSlot] = useState('')

	const [extractedData, setExtractedData] = useState([])
	const token = sessionStorage.getItem("token")
	
	const params1 = `/${idSpecialty}`
	const url1 = endpoints.getAllDoctorsBySpecialty + params1
	const { data: dataGetAllDoctorsBySpecialty, error, refetch: refetchGetAllDoctorsBySpecialty } = useQuery({
		queryKey: ["key-getAllDoctorsBySpecialty"],
		queryFn: () => getFetch(url1, token),
		enabled: false,
	})
	
	const params2 = `?direction=asc${'&specialty='+idSpecialty}${'&doctorId='+idProfessional}${'&shiftTime='+idTimeSlot}${'&start='+getTomorrowDate()}${'&end='+getLastDayOfCurrentYear()}`
	const url2 = endpoints.getFilteredAvailableAppointments + params2
	const { data: dataGetFilteredAvailableAppointments, refetch: refetchGetFilteredAvailableAppointments } = useQuery({
		queryKey: ["key-getFilteredAvailableAppointments"],
		queryFn: () => getFetch(url2, token),
		enabled: false,
	})

	useEffect(()=>{
		setData(dataGetFilteredAvailableAppointments)
	},[dataGetFilteredAvailableAppointments])

	const onChangeHandlerMedicalSpecialty = (e) => {
		setIdSpecialty(e)
		setIsDisabledSelects(false)
	}

	const onChangeHandlerProfessional = (e) => {
		setIdProfessional(e)
	}

	const onChangeHandlerTimeSlot = (e) => {
		setIdTimeSlot(e)
	}

    useEffect(()=>{
        if (idSpecialty) refetchGetAllDoctorsBySpecialty()

    },[idSpecialty])

	useEffect(()=>{
		if(dataGetAllDoctorsBySpecialty){
			const firstValue = [...i18n[language].reserveAppointment.filters.profesionals.arrayOptions]
			const result = dataGetAllDoctorsBySpecialty?.map((e, i) => {
				return { [`${e.user.id}`]: `${e.user.name} ${e.user.lastname}` };
			});
			setExtractedData([...firstValue, ...result])
		}
		
	},[dataGetAllDoctorsBySpecialty])

	const onClickFilterButton = () => {
		refetchGetFilteredAvailableAppointments()
	}

	return (
		<div
			className={`flex flex-col gap-5 ${isWide ? "w-full" : "w-fit"} rounded-3xl py-5 px-14 mt-0 mb-auto`}
			style={{
				background:
					"linear-gradient(180deg, rgba(86, 102, 190, 0.8) 57.95%, rgba(217, 130, 53, 0.56) 100%)",
			}}
		>
			<div className="text-white font-bold flex justify-start items-center gap-3">
				<img
					className="hover:scale-110 transition duration-500 w-[30px] xl:w-[50px] h-[30px] xl:h-[50px] 2xl:h-[100px]"
					src={magnifyingGlass}
					alt={i18n[language].reserveAppointment.filters.componentTitle}
					aria-label={i18n[language].reserveAppointment.filters.componentTitle}
					title={i18n[language].reserveAppointment.filters.componentTitle}
					loading="lazy"
					role="img"
				/>
                <p role="heading" className="lg:text-xs">{title}</p>
			</div>

			
			<div className={`m-auto ${isWide 
								? "flex flex-col sm:grid sm:grid-cols-4 gap-3 text-xs"
								: "grid grid-rows-4 gap-3 text-xs w-[inherit]"
			}`}>
				<div className="flex-1 rounded-full m-0">
					<Select
						id={"medicalSpeciality"}
						title={i18n[language].reserveAppointment.filters.selectSpecialty}
						arrayOptions={i18nDoctors[language].specialty.arrayOptions}
						isRequired={true}
						hasLabel={false}
						onChangeHandler={onChangeHandlerMedicalSpecialty}
					/>
				</div>
				<div className="flex-1 rounded-full m-0">
					<Select
						id={"professional"}
						title={i18n[language].reserveAppointment.filters.selectProfessional}
						arrayOptions={extractedData.length>0 ? extractedData : i18n[language].reserveAppointment.filters.profesionals.arrayOptions}
						isRequired={true}
						hasLabel={false}
						isDisabled={isDisbledSelects}
						onChangeHandler={onChangeHandlerProfessional}
					/>
				</div>
				<div className="flex-1 rounded-full m-0">
					<Select
						id={"timeSlot"}
						title={i18n[language].reserveAppointment.filters.selectTimeSlot}
						arrayOptions={i18n[language].reserveAppointment.filters.timeSolt.arrayOptions}
						isRequired={true}
						hasLabel={false}
						isDisabled={isDisbledSelects}
						onChangeHandler={onChangeHandlerTimeSlot}
					/>
				</div>
				<div className="flex-1 rounded-full m-0">
					<Button
						type="button"
						text={i18n[language].reserveAppointment.filters.searchButton.toUpperCase()}
						textColor="#FFF"
						bgColor="#5666BE"
                        title={i18n[language].reserveAppointment.filters.searchButton}
                        aria-label={i18n[language].reserveAppointment.filters.searchButton}
						isDisabled={isDisbledSelects}
						onClickHandler={() => onClickFilterButton()}
						classNames="border-white"
					/>
				</div>
			</div>
		</div>
	)
}
