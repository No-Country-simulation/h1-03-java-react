import React from "react";
import ItemSpecialty from "./ItemSpecialty";
import healthCheckup from "../../../../assets/svg/icons/healthCheckup.svg";
import toothCracked from "../../../../assets/svg/icons/toothCracked.svg";
import lungs from "../../../../assets/svg/icons/lungs.svg";
import heartWithPulse from "../../../../assets/svg/icons/heartWithPulse.svg";
import ophthalmology from "../../../../assets/svg/icons/ophthalmology.svg";
import stomach from "../../../../assets/svg/icons/stomach.svg";
import dermatology from "../../../../assets/svg/icons/dermatology.svg";
import rh from "../../../../assets/svg/icons/rh+.svg";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/treatments/index.json";

export default function index() {
  const language = useSelector((state) => state.i18nReducer.language);
  console.log(language, i18n[language]);

  return (
    <div className="flex flex-col gap-4">
      <ItemSpecialty
        icon={healthCheckup}
        alt={i18n[language].specialties.image.healthCheckup.title}
        aria={i18n[language].specialties.image.healthCheckup.title}
        title={i18n[language].specialties.image.healthCheckup.title}
        specialty={i18n[language].specialties.specialtyName.medicine}
        date="14/07/2024"
      />
      <ItemSpecialty
        icon={toothCracked}
        alt={i18n[language].specialties.image.toothCracked.title}
        aria={i18n[language].specialties.image.toothCracked.title}
        title={i18n[language].specialties.image.toothCracked.title}
        specialty={i18n[language].specialties.specialtyName.odontology}
        date="05/06/2024"
      />
      <ItemSpecialty
        icon={lungs}
        alt={i18n[language].specialties.image.lungs.title}
        aria={i18n[language].specialties.image.lungs.title}
        title={i18n[language].specialties.image.lungs.title}
        specialty={i18n[language].specialties.specialtyName.pulmonology}
        date="01/06/2024"
      />
      <ItemSpecialty
        icon={heartWithPulse}
        alt={i18n[language].specialties.image.heartWithPulse.title}
        aria={i18n[language].specialties.image.heartWithPulse.title}
        title={i18n[language].specialties.image.heartWithPulse.title}
        specialty={i18n[language].specialties.specialtyName.cardiology}
        date="26/03/2024"
      />
      <ItemSpecialty
        icon={ophthalmology}
        alt={i18n[language].specialties.image.ophthalmology.title}
        aria={i18n[language].specialties.image.ophthalmology.title}
        title={i18n[language].specialties.image.ophthalmology.title}
        specialty={i18n[language].specialties.specialtyName.ophthalmology}
        date="15/01/2024"
      />
      <ItemSpecialty
        icon={stomach}
        alt={i18n[language].specialties.image.stomach.title}
        aria={i18n[language].specialties.image.stomach.title}
        title={i18n[language].specialties.image.stomach.title}
        specialty={i18n[language].specialties.specialtyName.gastroenterology}
        date="03/01/2024"
      />
      <ItemSpecialty
        icon={dermatology}
        alt={i18n[language].specialties.image.dermatology.title}
        aria={i18n[language].specialties.image.dermatology.title}
        title={i18n[language].specialties.image.dermatology.title}
        specialty={i18n[language].specialties.specialtyName.dermatology}
        date="02/12/2023"
      />
      <ItemSpecialty
        icon={rh}
        alt={i18n[language].specialties.image.rh.title}
        aria={i18n[language].specialties.image.rh.title}
        title={i18n[language].specialties.image.rh.title}
        specialty={i18n[language].specialties.specialtyName.hematology}
        date="30/10/2023"
      />
    </div>
  );
}
