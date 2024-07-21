import React from "react";
import magnifyingGlass from "../../../../assets/svg/others/magnifyingGlass.svg";
import Select from "../../../Resources/FormElements/Select";
import Button from "../../../Resources/FormElements/Button";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/appointments/reserveAppointment/index.json";

export default function Index({title, isWide}) {
	const language = useSelector((state) => state.i18nReducer.language);

	return (
		<div
			className={`flex flex-col gap-5 ${isWide ? "w-full" : "w-auto"} rounded-3xl py-5 px-14 mt-0 mb-auto`}
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

			
			<div className={`${isWide 
								? "flex flex-col sm:flex-row sm:flex-wrap gap-3 text-xs"
								: "grid grid-rows-4 gap-3 text-xs w-[inherit]"
			}`}>
				<div className="flex-1 rounded-full m-0">
					<Select
						id={"professional"}
						title={i18n[language].reserveAppointment.filters.selectProfessional}
						arrayOptions={[
							"PROFESIONAL",
							"Cardiología",
							"Obstetricia",
							"Neumonología",
							"Pediatría",
							"Oftalmología",
							"Oncología",
							"Clínico",
						]}
						isRequired={true}
						hasLabel={false}
					/>
				</div>
				<div className="flex-1 rounded-full m-0">
					<Select
						id={"medicalSpeciality"}
						title={i18n[language].reserveAppointment.filters.selectSpecialty}
						arrayOptions={[
							"ESPECIALIDAD",
							"Cardiología",
							"Obstetricia",
							"Neumonología",
							"Pediatría",
							"Oftalmología",
							"Oncología",
							"Clínico",
						]}
						isRequired={true}
						hasLabel={false}
					/>
				</div>
				<div className="flex-1 rounded-full m-0">
					<Select
						id={"timeSlot"}
						title={i18n[language].reserveAppointment.filters.selectTimeSlot}
						arrayOptions={[
							"FRANJA HORARIA",
							"Cardiología",
							"Obstetricia",
							"Neumonología",
							"Pediatría",
							"Oftalmología",
							"Oncología",
							"Clínico",
						]}
						isRequired={true}
						hasLabel={false}
					/>
				</div>
				<div className="flex-1 rounded-full m-0">
					<Button
						type="button"
						text={i18n[language].reserveAppointment.filters.searchButton.toUpperCase()}
						textColor="#FFF"
						bgColor="auto"
                        title={i18n[language].reserveAppointment.filters.searchButton}
                        aria-label={i18n[language].reserveAppointment.filters.searchButton}
						isDisabled={false}
						onClickHandler={() => {}}
						classNames="border-white"
					/>
				</div>
			</div>
		</div>
	)
}
