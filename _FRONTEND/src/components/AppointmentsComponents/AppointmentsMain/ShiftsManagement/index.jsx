import React from "react";
import i18n from "../../../../i18n/appointments/index.json";
import { useSelector } from "react-redux";
import reserveAppointment from "../../../../assets/svg/others/reserveAppointment.svg";
import modifyShift from "../../../../assets/svg/others/modifyShift.svg";
import scheduledShifts from "../../../../assets/svg/others/scheduledShifts.svg";
 
export default function ShiftsManagement() {
    const language = useSelector((state) => state.i18nReducer.language);

	return (
		<div className="flex gap-5">
			<div className="text-center whitespace-nowrap bg-[#5666BF] text-white text-[0.7rem] flex flex-col flex-1 gap-5 justify-center items-center min-h-[170px] 2xl:h-[350px] rounded-3xl p-5 pb-0 overflow-hidden cursor-pointer">
				<img
					className="hover:scale-110 transition duration-500 w-[70px] 2xl:w-[100px] h-[70px] 2xl:h-[100px]"
					src={reserveAppointment}
                    alt={i18n[language].reserveAppointment.title}
					aria-label={i18n[language].reserveAppointment.title}
					title={i18n[language].reserveAppointment.title}
					loading="lazy"
                    role="button"
                    onClick={() => {}}
				/>
				<p className="2xl:text-2xl">{i18n[language].reserveAppointment.title}</p>
			</div>
			<div className="text-center whitespace-nowrap bg-[#5666BF] text-white text-[0.7rem] flex flex-col flex-1 gap-5 justify-center items-center min-h-[170px] 2xl:h-[350px] rounded-3xl p-5 pb-0 overflow-hidden cursor-pointer">
				<img
					className="hover:scale-110 transition duration-500 w-[70px] 2xl:w-[100px] h-[70px] 2xl:h-[100px]"
					src={scheduledShifts}
					alt={i18n[language].scheduledShifts.title}
					aria-label={i18n[language].scheduledShifts.title}
					title={i18n[language].scheduledShifts.title}
					loading="lazy"
                    role="button"
                    onClick={() => {}}
				/>

				<p className="2xl:text-2xl">{i18n[language].scheduledShifts.title}</p>
			</div>
			<div className="text-center whitespace-nowrap bg-[#5666BF] text-white text-[0.7rem] flex flex-col flex-1 gap-5 justify-center items-center min-h-[170px] 2xl:h-[350px] rounded-3xl p-5 pb-0 overflow-hidden cursor-pointer">
				<img
					className="hover:scale-110 transition duration-500 w-[70px] 2xl:w-[100px] h-[70px] 2xl:h-[100px]"
					src={modifyShift}
					alt={i18n[language].modifyShift.title}
					aria-label={i18n[language].modifyShift.title}
					title={i18n[language].modifyShift.title}
					width={70}
					height={70}
					loading="lazy"
                    role="button"
                    onClick={() => {}}
				/>

				<p className="2xl:text-2xl">{i18n[language].modifyShift.title}</p>
			</div>
		</div>
	);
}
