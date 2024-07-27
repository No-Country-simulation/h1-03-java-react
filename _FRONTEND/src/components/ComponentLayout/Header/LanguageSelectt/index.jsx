import React from "react";
import spFlag from "../../../../assets/svg/flags/sp.svg"
import enFlag from "../../../../assets/svg/flags/en.svg"
import { useSelector } from "react-redux";
import './index.css'

export default function LanguageSelect({ handleSelectLanguage }) {
    const language = useSelector((state)=>state.i18nReducer.language)

	return (
		<li className="language-select">
			<div className="language-select__container">
				{language === "en" ? (
					<img src={enFlag} alt="en" className="w-8 h-8 cursor-default" />
				) : (
					<img src={spFlag} alt="sp" className="w-8 h-8 cursor-default" />
				)}
				<select
					defaultValue={language}
					onChange={(e) => handleSelectLanguage(e.target.value)}
					aria-label="logo"
					title="Justina.io"
					translate="no"
					id="logo"
					name="logo"
				>
					<option value="sp" translate="no">ES</option>
					<option value="en" translate="no">EN</option>
				</select>
			</div>
		</li>
	);
}
