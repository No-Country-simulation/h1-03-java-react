import React from "react";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/table"

export default function PageSize({ pageSize, setPageSize }) {
	const language = useSelector((state)=>state.i18nReducer.language)
	
	return (
		<select
			id={i18n[language].pageSize.title}
			className="flex w-fit p-3 mt-1 justify-self-end"
			value={pageSize}
			onChange={(e) => setPageSize(Number(e.target.value))}
			title={i18n[language].pageSize.title}
			aria-label={i18n[language].pageSize.title}
		>
			{[10, 25, 50].map((pageSize) => (
				<option key={pageSize} value={pageSize}>
					{i18n[language].pageSize.text} {pageSize}
				</option>
			))}
		</select>
	);
}
