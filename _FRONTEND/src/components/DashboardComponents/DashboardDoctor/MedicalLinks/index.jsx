import React from "react";
import medicalAppointment from "../../../../assets/svg/icons/medicalAppointmentDashboardDoctor.svg";
import clinicalHistories from "../../../../assets/svg/icons/clinicalHistoriesDashboardDoctor.svg";
import appointments from "../../../../assets/svg/icons/appointmentsDashboardDoctor.svg";
import ItemLink from "./ItemLink";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/dashboards/dashboardDoctor/index.json";

export default function index() {
  const language = useSelector((state) => state.i18nReducer.language);

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center p-4 w-full h-auto sm:h-[125px] gap-4 sm:gap-8">
      <div className="flex flex-col sm:flex-row justify-center flex-1 gap-4 sm:gap-8">
        <ItemLink
          icon={medicalAppointment}
          alt={i18n[language].itemsLinks.appointmentMedical.alt}
          title={i18n[language].itemsLinks.appointmentMedical.title}
          path="/turnos"
        />
        <ItemLink
          icon={clinicalHistories}
          alt={i18n[language].itemsLinks.medicalRecords.alt}
          title={i18n[language].itemsLinks.medicalRecords.title}
          path="/historia-clinica"
        />
        <ItemLink
          icon={appointments}
          alt={i18n[language].itemsLinks.appointments.alt}
          title={i18n[language].itemsLinks.appointments.title}
          path="/turnos/mis-turnos"
        />
      </div>
    </div>
  );
}
