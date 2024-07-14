import React from "react";
import MedicAvatar from "../../../assets/svg/avatars/doctor.svg";
import Button from "../../Resources/FormElements/Button";

export default function Results() {
	const arrSchedule = [
		"11:00",
		"11:30",
		"12:00",
		"12:30",
		"13:00",
		"13:30",
		"14:00",
		"14:30",
		"15:00",
		"15:30",
		"16:00",
		"16:30",
	];

	return (
		<section className="bg-slate-200 rounded-md p-10 ">
			<div className="grid grid-cols-2">
				<div className="w-fit text-center">
					<img
						className="m-auto bg-[#88969f] rounded-full"
						src={MedicAvatar}
						alt="Medic avatar"
						aria-label="Medic avatar"
						title="medic avatar"
						width={80}
						height={80}
						loading="lazy"
					/>
					<p className="bg-[#88969f] font-semibold text-white p-1 px-3 rounded-md">
						Dr. Rios Saverio
					</p>
					<p className="font-semibold p-1">Clínica Médica</p>
				</div>

				<div>
					<p className="bg-[#88969f] font-semibold text-white p-1 px-3 rounded-md">
						02 de Agosto
					</p>
					<p className="font-semibold p-1">Clínica Colón</p>
					<p className="font-semibold p-1">Consultorio 6 - PB</p>
					<p className="font-semibold p-1">Av. Juan B Justo 2030</p>
				</div>
			</div>

			<div className="flex flex-col gap-3 mb-1">
				<p className="text-center">Elegir horario</p>
				<div className="flex flex-wrap justify-center items-center gap-1 p-1 w-96">
					{arrSchedule.map((e, i) => (
						<span
							key={i}
							className="rounded-xl border-2 border-[#88969f] font-semibold p-1 px-2 tracking-wide"
						>
							{e}
						</span>
					))}
				</div>
				<Button type={"submit"} text={"Agendar"} title={"Agendar"} textColor={"#FFF"} />
			</div>
		</section>
	);
}
