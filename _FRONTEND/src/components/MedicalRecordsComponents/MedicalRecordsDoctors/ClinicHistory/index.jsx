import React from "react";
import clinicHistory from "../../../../assets/svg/icons/clinicHistory.svg";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/medicalRecords/index.json";

export default function index() {
  const language = useSelector((state) => state.i18nReducer.language);

  return (
    <div className="flex flex-col py-4 px-8 text-center border-2 border-[#5666BE80] w-full h-auto rounded-3xl gap-4">
      <div className="flex flex-row flex-1 justify-start items-start gap-4">
        <img
          src={clinicHistory}
          alt={i18n[language].icons.medicalRecords}
          aria-label={i18n[language].icons.medicalRecords}
          title={i18n[language].icons.medicalRecords}
          width={50}
          height={50}
          loading="lazy"
        />
        <p className="text-4xl">{i18n[language].patient.title}</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col w-1/2 text-start text-[#5666BE] font-semibold gap-3">
          <p>
            {i18n[language].patient.names}{" "}
            <span className="text-black font-normal">{i18n[language].patient.data.names}</span>
          </p>
          <p>
            {i18n[language].patient.lastNames}{" "}
            <span className="text-black font-normal">{i18n[language].patient.data.lastNames}</span>
          </p>
          <p>
            {i18n[language].patient.birthdate}{" "}
            <span className="text-black font-normal">{i18n[language].patient.data.birthdate}</span>
          </p>
          <p>
            {i18n[language].patient.phoneNumber}{" "}
            <span className="text-black font-normal">{i18n[language].patient.data.phoneNumber}</span>
          </p>
          <p>
            {i18n[language].patient.adress}{" "}
            <span className="text-black font-normal">
              {i18n[language].patient.data.adress}
            </span>
          </p>
        </div>
        <div className="flex flex-col w-1/2 text-start text-[#5666BE] font-semibold gap-3">
          <p>
            {i18n[language].patient.sex}{" "}
            <span className="text-black font-normal">{i18n[language].patient.data.sex}</span>
          </p>
          <p>
            {i18n[language].patient.occupation}{" "}
            <span className="text-black font-normal">{i18n[language].patient.data.occupation}</span>
          </p>
          <p>
            {i18n[language].patient.maritalStatus}{" "}
            <span className="text-black font-normal">{i18n[language].patient.data.maritalStatus}</span>
          </p>
          <p>
            {i18n[language].patient.id}{" "}
            <span className="text-black font-normal">{i18n[language].patient.data.id}</span>
          </p>
          <p>
            {i18n[language].patient.bloodType}{" "}
            <span className="text-black font-normal">{i18n[language].patient.data.bloodType}</span>
          </p>
          <p>
            {i18n[language].patient.religion}{" "}
            <span className="text-black font-normal">{i18n[language].patient.data.religion}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
