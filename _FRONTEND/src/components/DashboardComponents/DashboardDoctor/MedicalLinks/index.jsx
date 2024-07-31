import React from "react";
import medicalAppointment from "../../../../assets/svg/icons/medicalAppointmentDashboardDoctor.svg";
import clinicalHistories from "../../../../assets/svg/icons/clinicalHistoriesDashboardDoctor.svg";
import appointments from "../../../../assets/svg/icons/appointmentsDashboardDoctor.svg";
import ItemLink from "./ItemLink"

export default function index() {
  return (
    <div className="flex md:flex-row justify-center items-center p-4 w-full h-auto md:h-[125px] gap-8">
      <div className="flex flex-row justify-center flex-1 gap-8">
        <ItemLink icon={medicalAppointment} title="Turnos Medicos" />
        <ItemLink icon={clinicalHistories} title="Historias clínicas" />
        <ItemLink icon={appointments} title="Turnos" />
      </div>
    </div>
  );
}
