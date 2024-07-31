import React from "react";
import medicalAppointment from "../../../../assets/svg/icons/medicalAppointmentDashboardDoctor.svg";
import clinicalHistories from "../../../../assets/svg/icons/clinicalHistoriesDashboardDoctor.svg";
import appointments from "../../../../assets/svg/icons/appointmentsDashboardDoctor.svg";

export default function index() {
  return (
    <div className="flex md:flex-row justify-center items-center p-4 w-full h-auto md:h-[125px] gap-8">
      <div className="flex flex-row justify-center flex-1 gap-8">
        <div className="flex flex-col justify-center items-center p-4 gap-6">
          <img
            src={medicalAppointment}
            alt=""
            aria-label=""
            title=""
            width={100}
            height={100}
            loading="lazy"
          />
          <p className="text-center">Turnos Medicos</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 gap-6">
          <img
            src={clinicalHistories}
            alt=""
            aria-label=""
            title=""
            width={100}
            height={100}
            loading="lazy"
          />
          <p className="text-center">Historias clínicas</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 gap-6">
          <img
            src={appointments}
            alt=""
            aria-label=""
            title=""
            width={100}
            height={100}
            loading="lazy"
          />
          <p className="text-center">Turnos</p>
        </div>
      </div>
    </div>
  );
}
