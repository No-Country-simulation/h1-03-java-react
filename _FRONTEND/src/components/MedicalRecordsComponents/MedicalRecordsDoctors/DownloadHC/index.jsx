import React from "react";
import download from "../../../../assets/svg/others/downloadCH.svg";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/medicalRecords/index.json";

export default function index() {
  const language = useSelector((state) => state.i18nReducer.language);

  return (
    <div className="flex flex-col w-1/2 sm:w-full justify-center items-center gap-4 border rounded-[45px] py-8 px-2 bg-[#5666BE]">
      <img
        src={download}
        alt={i18n[language].download.icon}
        aria-label={i18n[language].download.icon}
        title={i18n[language].download.icon}
        width={100}
        height={100}
      />
      <p className="text-white text-center">{i18n[language].download.title}</p>
    </div>
  );
}
