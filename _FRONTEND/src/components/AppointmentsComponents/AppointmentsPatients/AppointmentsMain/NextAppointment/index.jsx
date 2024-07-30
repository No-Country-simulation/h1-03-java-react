import React from "react";
import clock from "../../../../../assets/svg/others/clock.svg";
import bell from "../../../../../assets/svg/others/bell.svg";
import { useSelector } from "react-redux";
import i18n from "../../../../../i18n/appointments/index.json";

export default function NextAppointment() {
	const language = useSelector((state) => state.i18nReducer.language);

	return (
		<div className="flex flex-col-reverse md:flex-row justify-center items-center p-4 text-center border border-[#D98236] w-full h-auto md:h-[125px] rounded-3xl ">
			<div className="flex flex-row flex-1">
				<div className="flex justify-center">
					<img
						src={clock}
						alt={i18n[language].nextAppointment.imageClock.title}
						aria-label={i18n[language].nextAppointment.imageClock.title}
						title={i18n[language].nextAppointment.imageClock.title}
						width={50}
						height={50}
						loading="lazy"
					/>
				</div>
				<div className="flex flex-col gap-1 flex-1 text-start ps-3">
					<p className="text-sm">Dr. Saveiro</p>
					<p className="text-sm text-[#1D1D1DB2]">
						<small>Cardiólogo</small>
					</p>
					<p className="text-sm text-[#1D1D1DB2]">
						<small>Clínica Savio - Consultorio 6</small>
					</p>
				</div>
			</div>
			<div className="flex flex-row content-end flex-1">
				<div className="flex flex-col text-end flex-1 justify-center pe-3">
					<p className="text-sm font-bold">
						<small>Oct 15, 2021</small>
					</p>
					<p className="text-sm font-bold">
						<small>10:00 AM</small>
					</p>
				</div>
				<div className="">
					<img
						className="cursor-pointer block ms-auto me-0 hover:rotate-12 transition duration-300"
						src={bell}
						alt={i18n[language].nextAppointment.imageBell.title}
						aria-label={i18n[language].nextAppointment.imageBell.title}
						title={i18n[language].nextAppointment.imageBell.title}
						width={50}
						height={50}
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
}
