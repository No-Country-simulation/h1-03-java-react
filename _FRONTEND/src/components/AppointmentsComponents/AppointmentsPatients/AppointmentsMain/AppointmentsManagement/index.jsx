import React from "react";
import i18n from "../../../../../i18n/appointments/index.json";
import { useSelector } from "react-redux";
import reserveAppointment from "../../../../../assets/svg/others/reserveAppointment.svg";
import scheduledAppointments from "../../../../../assets/svg/others/scheduledAppointments.svg";
import { useNavigate } from "react-router-dom";
import getPathRoutes from "../../../../../helpers/pathroutes";

export default function AppointmentsManagement() {
	const language = useSelector((state) => state.i18nReducer.language);
	const navigate = useNavigate();

	return (
		<div className="flex flex-col sm:flex-row gap-5">
			<div
				className="text-center whitespace-nowrap bg-[#5666BF] text-white flex flex-row sm:flex-col flex-1 gap-5 sm:justify-center items-center min-h-[170px] 2xl:h-[350px] rounded-3xl p-5 sm:pb-0 overflow-hidden cursor-pointer"
				onClick={() =>
					navigate(
						`${getPathRoutes(language, "reserve_appointment", { isForNavBar: false })}`
					)
				}
			>
				<img
					className="hover:scale-110 transition duration-500 w-[70px] 2xl:w-[100px] h-[70px] 2xl:h-[100px]"
					src={reserveAppointment}
					alt={i18n[language].reserveAppointment.title}
					aria-label={i18n[language].reserveAppointment.title}
					title={i18n[language].reserveAppointment.title}
					loading="lazy"
					role="button"
				/>
				<p className="">
					{i18n[language].reserveAppointment.title}
				</p>
			</div>
			<div
				className="text-center whitespace-nowrap bg-[#5666BF] text-white flex flex-row sm:flex-col flex-1 gap-5 sm:justify-center items-center min-h-[170px] 2xl:h-[350px] rounded-3xl p-5 sm:pb-0 overflow-hidden cursor-pointer"
				onClick={() =>
					navigate(
						`${getPathRoutes(language, "scheduled_appointments", { isForNavBar: false })}`
					)
				}
			>
				<img
					className="hover:scale-110 transition duration-500 w-[70px] 2xl:w-[100px] h-[70px] 2xl:h-[100px]"
					src={scheduledAppointments}
					alt={i18n[language].scheduledAppointments.title}
					aria-label={i18n[language].scheduledAppointments.title}
					title={i18n[language].scheduledAppointments.title}
					loading="lazy"
					role="button"
				/>

				<p className="">
					{i18n[language].scheduledAppointments.title}
				</p>
			</div>
		</div>
	);
}
