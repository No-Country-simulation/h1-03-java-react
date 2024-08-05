import React, { useEffect } from "react";
import clock from "../../../../../assets/svg/others/clock.svg";
import bell from "../../../../../assets/svg/others/bell.svg";
import { useSelector } from "react-redux";
import i18nAppointments from "../../../../../i18n/appointments/index.json";
import i18nDoctors from "../../../../../i18n/doctors/index.json";

import { useQuery } from "@tanstack/react-query";
import { getFetch } from "../../../../../services";
import endpoints from "../../../../../helpers/endpoints";
import InnerSpinner from "../../../../Resources/Spinner/InnerSpinner";

export default function NextAppointment() {
	const language = useSelector((state) => state.i18nReducer.language);

	const urlGetAppointmentsCurrentUserRecentOne = endpoints.getAppointmentsCurrentUserRecentOne
	const token = sessionStorage.getItem("token");
	const { data: dataGetAppointmentsCurrentUserRecentOne, error: errorGetAppointmentsCurrentUserRecentOne, refetch: refetchGetAppointmentsCurrentUserRecentOne } = useQuery({
		queryKey: ["key-getAppointmentsCurrentUserRecentOne"],
		queryFn: () => getFetch(urlGetAppointmentsCurrentUserRecentOne, token),
		enabled: false,
	});
	if (errorGetAppointmentsCurrentUserRecentOne) console.log(errorGetAppointmentsCurrentUserRecentOne)

	useEffect(() => {
		refetchGetAppointmentsCurrentUserRecentOne();

	}, [])

	const toCapitalized = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
	}

	const getFormatterDate = (data) => {
		const newDate = new Date(data);
		
		const options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
		const formattedDate = newDate.toLocaleDateString('es-ES', options).split(',');
		
		const day = toCapitalized(formattedDate[0])
		const splittedDate = formattedDate[1].split(' ')
		const date = `${splittedDate[0]} ${splittedDate[1]} ${splittedDate[2]} ${toCapitalized(splittedDate[3])}`
		const startingHourShift = formattedDate[2]
	
		return {
			day: day,
			date: date,
			time: formattedDate[2],
			timeSlot: startingHourShift
		}
	}

	
	return (
		<>
		{!dataGetAppointmentsCurrentUserRecentOne
		? (<InnerSpinner />)
		: (
			<div className="flex flex-col-reverse md:flex-row justify-center items-center p-4 text-center border border-[#D98236] w-full h-auto md:h-[125px] rounded-3xl ">
				<div className="flex flex-row flex-1">
					<div className="flex justify-center">
						<img
							src={clock}
							alt={i18nAppointments[language].nextAppointment.imageClock.title}
							aria-label={i18nAppointments[language].nextAppointment.imageClock.title}
							title={i18nAppointments[language].nextAppointment.imageClock.title}
							width={50}
							height={50}
							loading="lazy"
						/>
					</div>
					<div className="flex flex-col gap-1 flex-1 text-start ps-3">
						<p className="text-sm">
							{`Dr.
							${dataGetAppointmentsCurrentUserRecentOne.shift.doctor.user.name} 
							${dataGetAppointmentsCurrentUserRecentOne.shift.doctor.user.lastname}
							`}							
						</p>
						<p className="text-sm text-[#1D1D1DB2]">
							<small>
								{Object.values(
                                            i18nDoctors[language].specialty.arrayOptions.filter((element, i)=>{
                                                return Number(Object.keys(element)) === dataGetAppointmentsCurrentUserRecentOne.shift.specialty.id
                                            })[0]
                                        )[0]}
							</small>
						</p>
						<p className="text-sm text-[#1D1D1DB2]">
							<small>Clínica Savio - Consultorio 6</small>
						</p>
					</div>
				</div>
				<div className="flex flex-row content-end flex-1">
					<div className="flex flex-col text-end flex-1 justify-center pe-3">
						<p className="text-sm font-bold">
							<small>{getFormatterDate(dataGetAppointmentsCurrentUserRecentOne.shift.startDate).date}</small>
						</p>
						<p className="text-sm font-bold">
							<small>{getFormatterDate(dataGetAppointmentsCurrentUserRecentOne.shift.startDate).time}</small>
						</p>
					</div>
					<div className="">
						<img
							className="cursor-pointer block ms-auto me-0 hover:rotate-12 transition duration-300"
							src={bell}
							alt={i18nAppointments[language].nextAppointment.imageBell.title}
							aria-label={i18nAppointments[language].nextAppointment.imageBell.title}
							title={i18nAppointments[language].nextAppointment.imageBell.title}
							width={50}
							height={50}
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		)}
		</>
	);
}
