import React from "react";
import ItemTreatament from "../../MedicalRecordsDoctors/TreatmentSheet/ItemTreatment";
import myClinicHistory from "../../../../assets/svg/others/myClinicHistory.svg";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/medicalRecordPatient/index.json";

export default function index() {
  const language = useSelector((state) => state.i18nReducer.language);

  return (
    <div className="flex flex-col py-4 justify-center items-center w-full h-auto gap-4 text-black">
      <div className="flex items-center gap-4">
        <img
          src={myClinicHistory}
          alt={i18n[language].myClinicHistory.icon}
          aria-label={i18n[language].myClinicHistory.icon}
          title={i18n[language].myClinicHistory.icon}
        />
        <p>{i18n[language].myClinicHistory.title}</p>
      </div>

      <ItemTreatament />
      <ItemTreatament />
    </div>
  );
}
