import React from "react";
import { useSelector } from "react-redux";
import Row from "./Row";
import Pagination from "./Pagination";

export default function TableResults({ componentTitle, isButtonSchedule, isModificate=false, data={content:[]} }) {
	const language = useSelector((state) => state.i18nReducer.language);

	return (
		<>
			{data && (
				<section className="flex flex-col flex-1 gap-3 w-full rounded-3xl pb-5 mt-0 mb-auto text-xs">
					<p className="text-center text-base">{componentTitle}</p>
				
					{data?.content.map((e,i)=>
						<Row 
							key={i}
							isButtonSchedule={isButtonSchedule} 
							isModificate={isModificate} 
							data={e}
						/>
					)}
					{/* <Pagination /> */}
				
				</section>
			)}
		</>
	);
}
