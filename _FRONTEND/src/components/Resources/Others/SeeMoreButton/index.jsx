import React from "react";
import downArrow from "../../../../assets/svg/others/downArrow.svg";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/appointments/index.json";

export default function SeeMoreButton({ isDisabled=true, onClickSeeMoreHandler }) {
	const language = useSelector((state) => state.i18nReducer.language);

	return (
		<div 
			className={`flex flex-col gap-3 text-center text-white mb-12 cursor-pointer ${isDisabled ? 'pointer-events-none':''}`}
			role="button"
			aria-label={i18n[language].seeMoreButton.title}
			title={i18n[language].seeMoreButton.title}
			loading="lazy"
			onClick={() => onClickSeeMoreHandler()}
		>
			<p className={`font-bold text-sm ${isDisabled && 'hidden my-10'}`}>{i18n[language].seeMoreButton.title}</p>
			<img
				className={`m-auto w-4 h-4 ${isDisabled ? 'hidden':'auto'}`}
				src={downArrow}
				alt={i18n[language].seeMoreButton.title}
				aria-label={i18n[language].seeMoreButton.title}
				loading="lazy"
			/>
		</div>
	);
}
