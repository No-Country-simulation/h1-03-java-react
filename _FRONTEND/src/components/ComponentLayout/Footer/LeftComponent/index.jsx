import React from "react";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/footer/index.json";

export default function LeftComponent() {
  const language = useSelector((state) => state.i18nReducer.language);

	return (
		<div className="flex flex-col justify-start items-start gap-1">
			<h1 className="text-white font-medium text-2xl">JUSTINA.IO</h1>
			<h2 className="text-white">{i18n[language].left.address}</h2>
			<h2 className="text-white">{i18n[language].left.city}</h2>
			<h2 className="text-white">{i18n[language].left.phone}</h2>
		</div>
	);
}
