import React from 'react';
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/footer/index.json";

export default function () {
  const language = useSelector((state) => state.i18nReducer.language);

  return (
    <div className="flex flex-col justify-end items-end gap-1">
			<h1 className="text-white text-base">{i18n[language].right.login}</h1>
			<h2 className="text-white">{i18n[language].right.register}</h2>
			<h2 className="text-white">{i18n[language].right.booklet}</h2>
			<h2 className="text-white">{i18n[language].right.contact}</h2>
		</div>
  )
}
