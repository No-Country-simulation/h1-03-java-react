import React from "react";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/table"
import Select from "../../FormElements/Select";

export default function PageSize({ pageSize, setPageSize }) {
	const language = useSelector((state)=>state.i18nReducer.language)
	
	return (
		<Select 
			id={i18n[language].pageSize.title}
			title={i18n[language].pageSize.title}
			arrayOptions={i18n[language].pageSize.arraySelectOptions}
			onChangeHandler={setPageSize}
			value={pageSize}
			displayLabel={'hidden'}
		/>
)}
