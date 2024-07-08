import React from "react";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/table";

export default function Pagination({
	previousPage,
	nextPage,
	canPreviousPage,
	canNextPage,
	pageIndex,
	pageOptions
}) {
	const language = useSelector((state) => state.i18nReducer.language);

	return (
		<div className="flex justify-center gap-3 my-3">
			<button
				onClick={() => previousPage()}
				disabled={!canPreviousPage}
				className="w-[6rem] px-0"
				title={i18n[language].pagination.previousButtonTitle}
			>
				{i18n[language].pagination.previousButtonText}
			</button>
			<span 
				className="grid items-center tracking-widest min-w-[3rem] text-center"
				role="text"
				aria-label={i18n[language].pagination.indicatorTitle}
				title={i18n[language].pagination.indicatorTitle}
			>
				{pageIndex + 1}/{pageOptions.length}
			</span>
			<button
				onClick={() => nextPage()}
				disabled={!canNextPage}
				className="w-[6rem] px-0"
				title={i18n[language].pagination.nextButtonTitle}
			>
				{i18n[language].pagination.nextButtonText}
			</button>
		</div>
	);
}
