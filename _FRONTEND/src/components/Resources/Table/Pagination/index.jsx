import React from "react";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/table";
import Button from "../../FormElements/Button";

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
			<Button
				text={i18n[language].pagination.previousButtonText}
				title={i18n[language].pagination.previousButtonText}
				onClickHandler={previousPage}
				disabled={!canPreviousPage}
			/>
			<span 
				className="grid items-center tracking-widest min-w-[3rem] text-center"
				role="text"
				aria-label={i18n[language].pagination.indicatorTitle}
				title={i18n[language].pagination.indicatorTitle}
			>
				{pageIndex + 1}/{pageOptions.length}
			</span>
			<Button 
				text={i18n[language].pagination.nextButtonText}
				title={i18n[language].pagination.nextButtonText}
				onClickHandler={nextPage}
				disabled={!canNextPage}
			/>
		</div>
	);
}
