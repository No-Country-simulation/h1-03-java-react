import React from "react";
import ClinicHistory from "../MedicalRecordsDoctors/ClinicHistory";
import MyClinicHistory from "./MyClinicHistory";
import Filters from "../MedicalRecordsDoctors/Filters";
import Buttons from "../MedicalRecordsPatients/Buttons";
import magnifyingGlass from "../../../assets/svg/others/magnifyingGlassPurple.svg";
import { useSelector } from "react-redux";
import i18n from "../../../i18n/medicalRecordPatient/index.json";

export default function index() {
  const language = useSelector((state) => state.i18nReducer.language);

  return (
    <section className="min-h-screen w-full p-16">
      <div className="flex flex-col justify-center items-start w-full gap-8">
        <ClinicHistory />
        <div className="flex flex-col lg:flex-row justify-between w-full gap-8">
          <div className="flex lg:w-3/4 gap-4">
            <MyClinicHistory />
          </div>
          <div className="flex flex-col lg:w-1/4 py-4 gap-6 items-center">
            <div className="flex items-center gap-4">
              <img
                src={magnifyingGlass}
                alt={i18n[language].search.icon}
                aria-label={i18n[language].search.icon}
                title={i18n[language].search.icon}
              />
              <p>{i18n[language].search.title}</p>
            </div>
            <Filters />
            <Buttons />
          </div>
        </div>
      </div>
    </section>
  );
}
