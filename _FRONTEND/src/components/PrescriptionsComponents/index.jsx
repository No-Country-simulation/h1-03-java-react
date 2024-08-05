import React from "react";
import PrescriptionCard from "./PrescriptionCard";
import Filter from "./Filter";

export default function PrescriptionsMainComponent() {
	return (
		<section className="min-h-screen flex flex-col md:flex-row justify-center items-center md:items-start gap-8 p-10">
			<div className="flex-[0.5] flex flex-col justify-center items-center m-0">
				<div className="w-[80vw] md:w-full">
					<p className="text-start pb-5 pe-5">Buscar receta</p>
					<div className="flex flex-col gap-5 w-[inherit]">
						<Filter />
					</div>
				</div>
			</div>

			<div className="flex-[0.5] p-0 w-[80vw] md:w-auto m-auto mt-0">
				<dir className="flex flex-col m-0 ps-0 w-[inherit] md:w-auto">
                    <p className="text-center md:text-start pb-5 md:pe-5">Historial de recetas</p>
                    <div className="flex flex-col gap-5 w-[inherit] md:w-auto">
                        <PrescriptionCard />
                        <PrescriptionCard />
                        <PrescriptionCard />
                    </div>
				</dir>
			</div>
		</section>
	);
}
