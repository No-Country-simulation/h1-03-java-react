import React from "react";
import clinicHistory from "../../../../../../assets/svg/others/searchClinicHistory.svg";
import search from "../../../../../../assets/svg/others/search.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import i18n from "../../../../../../i18n/medicalRecords/searchMedicalRecord/index.json";

export default function index({ id, name, path }) {
  const language = useSelector((state) => state.i18nReducer.language);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path);
  };

  return (
    <div className="flex flex-col md:flex-row  justify-between items-stretch py-2 px-8 w-full h-auto rounded-3xl border border-black divide-y md:divide-y-0 md:divide-x divide-black">
      <div className="flex flex-row flex-1 gap-4 p-4 items-center justify-center md:justify-start">
        <div className="flex justify-center items-center">
          <img
            src={clinicHistory}
            alt={i18n[language].icons.medicalRecords}
            aria-label={i18n[language].icons.medicalRecords}
            title={i18n[language].icons.medicalRecords}
            width={50}
            height={50}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <p className="text-xl">{i18n[language].itemResult.id} {id}</p>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-2 p-4 justify-center items-center">
        <p className="text-2xl font-medium">{name}</p>
      </div>
      <div
        className="flex flex-col flex-1 items-center gap-4 p-4 cursor-pointer"
        onClick={handleNavigate}
      >
        <p className="text-xl">{i18n[language].itemResult.details}</p>
        <div className="flex justify-center">
          <img
            src={search}
            alt={i18n[language].icons.search}
            aria-label={i18n[language].icons.search}
            title={i18n[language].icons.search}
            width={40}
            height={40}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
