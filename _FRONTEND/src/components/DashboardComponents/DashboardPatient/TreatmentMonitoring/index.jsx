import React from "react";
import medication from "../../../../assets/svg/icons/medicationDashboardPatient.svg";
import treatment from "../../../../assets/svg/icons/completeTreatmentsDashboardPatient.svg";
import clinicHistory from "../../../../assets/svg/icons/clinicHistoryDashboardPatient.svg";
import ItemMonitoring from "./ItemMonitoring";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/dashboardComponents/dashboardPatient/treatments/index.json";

export default function index() {
  const language = useSelector((state) => state.i18nReducer.language);

  return (
    <>
      <p className="text-[#1D1D1D] text-sm px-4 text-center sm:text-start">
        {i18n[language].title}
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center p-4 w-full h-auto sm:h-[125px] gap-4 sm:gap-8">
        <div className="flex flex-col sm:flex-row justify-center flex-1 gap-4 sm:gap-8">
          <ItemMonitoring
            porcentage={i18n[language].items.item1.porcentage}
            icon={medication}
            title={i18n[language].items.item1.title}
            iconAlt={i18n[language].items.item1.iconAlt}
          />
          <ItemMonitoring
            porcentage={i18n[language].items.item2.porcentage}
            icon={treatment}
            title={i18n[language].items.item2.title}
            iconAlt={i18n[language].items.item2.iconAlt}
          />
          <ItemMonitoring
            porcentage={i18n[language].items.item3.porcentage}
            icon={clinicHistory}
            title={i18n[language].items.item3.title}
            iconAlt={i18n[language].items.item3.iconAlt}
          />
        </div>
      </div>
    </>
  );
}
