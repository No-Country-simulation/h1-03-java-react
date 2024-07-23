import React from "react";
import { fetchTest } from "../../../../services";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/appointments/reserveAppointment/index.json";
import Row from "./Row";
import Pagination from "./Pagination";

export default function TableResults({ componentTitle, isButtonSchedule, isModificate=false }) {
	const language = useSelector((state) => state.i18nReducer.language);

	const { data, error, isLoading, isFetching } = useQuery({
		queryKey: ["key-test1"],
		queryFn: fetchTest,
	});

	return (
		<>
			{data && (
				<section className="flex flex-col flex-1 gap-3 w-[100%] rounded-3xl pb-5 mt-0 mb-auto text-xs">
					<p className="text-center text-base">{componentTitle}</p>

					<>
						<Row isButtonSchedule={isButtonSchedule} isModificate={isModificate} />
						<Row isButtonSchedule={isButtonSchedule} isModificate={isModificate} />
						<Row isButtonSchedule={isButtonSchedule} isModificate={isModificate} />
						<Pagination />
					</>
				</section>
			)}
		</>
	);
}
