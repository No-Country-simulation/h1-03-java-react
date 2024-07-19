import React from "react";
import downArrow from "../../../../../assets/svg/others/downArrow.svg";
import { useSelector } from "react-redux";
import i18n from "../../../../../i18n/appointments/index.json";

export default function SeeMoreButton() {
	const language = useSelector((state) => state.i18nReducer.language);

	return (
		<div 
			className="flex flex-col gap-3 text-center text-white mb-12 cursor-pointer"
			role="button"
			aria-label={i18n[language].seeMoreButton.title}
			title={i18n[language].seeMoreButton.title}
			loading="lazy"
			onClick={() => {}}
		>
			<p className="font-bold text-sm">{i18n[language].seeMoreButton.title}</p>
			<img
				className="m-auto w-4 h-4"
				src={downArrow}
				alt={i18n[language].seeMoreButton.title}
				aria-label={i18n[language].seeMoreButton.title}
				loading="lazy"
			/>
		</div>
	);
}
