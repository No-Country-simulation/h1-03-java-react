import React from "react";
import medicalAppointment from "../../../../assets/svg/icons/medicalAppointmentDashboardDoctor.svg";
import clinicalHistories from "../../../../assets/svg/icons/clinicalHistoriesDashboardDoctor.svg";
import appointments from "../../../../assets/svg/icons/appointmentsDashboardDoctor.svg";
import ItemLink from "./ItemLink";

export default function index() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center p-4 w-full h-auto sm:h-[125px] gap-4 sm:gap-8">
      <div className="flex flex-col sm:flex-row justify-center flex-1 gap-4 sm:gap-8">
        <ItemLink
          icon={medicalAppointment}
          title="Turnos Medicos"
          path="/turnos"
        />
        <ItemLink
          icon={clinicalHistories}
          title="Historias clínicas"
          path="/historia-clinica"
        />
        <ItemLink icon={appointments} title="Turnos" path="/" />
      </div>
    </div>
  );
}
