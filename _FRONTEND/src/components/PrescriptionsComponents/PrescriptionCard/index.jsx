import React from "react";
import buttonDownload from "../../../assets/svg/others/buttonDownload.svg";
import buttonPlus from "../../../assets/svg/others/buttonPlus.svg";

export default function PrescriptionCard() {
	return (
		<div
			className="flex flex-col md:flex-row rounded-3xl w-[inherit] md:w-auto"
			style={{
				background:
					"linear-gradient(180deg, rgba(86, 102, 190, 0.6) 0%, rgba(242, 205, 91, 0.6) 100%)",
			}}
		>
			<div className="flex flex-col flex-[0.8] gap-5 p-10">
				<p className="flex gap-5 bg-[#ffffffcc] rounded-3xl py-3 px-5">
					<span className="flex-[0.3]">Fecha:</span>
					<span className="flex-[0.7]">10/07/24</span>
				</p>
				<p className="flex gap-5  bg-[#ffffffcc] rounded-3xl py-3 px-5">
					<span className="flex-[0.3]">Especialidad:</span>
					<span className="flex-[0.7]">10/07/24</span>
				</p>
				<p className="flex gap-5  bg-[#ffffffcc] rounded-3xl py-3 px-5">
					<span className="flex-[0.3]">Tipo:</span>
					<span className="flex-[0.7]">10/07/24</span>
				</p>
			</div>

            <div className="flex flex-row md:flex-col flex-[0.2] justify-center md:justify-start items-center h-[inherit] gap-5 p-10 pt-0 md:pt-10 text-center md:text-start">
				<div className="flex-[0.5] cursor-pointer">
					<img
						src={buttonDownload}
						alt="Descargar"
						className="m-auto"
					/>
					<p className="mt-1">Descargar</p>
				</div>
				<div className="flex-[0.5] cursor-pointer">
					<img src={buttonPlus} alt="Ver más" className="m-auto" />
					<p className="mt-1">Ver más</p>
				</div>
			</div>
		</div>
	);
}
