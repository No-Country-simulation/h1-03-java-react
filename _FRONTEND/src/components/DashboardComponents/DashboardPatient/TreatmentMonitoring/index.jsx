import React from "react";
import medication from "../../../../assets/svg/icons/medicationDashboardPatient.svg";
import treatment from "../../../../assets/svg/icons/completeTreatmentsDashboardPatient.svg";
import clinicHistory from "../../../../assets/svg/icons/clinicHistoryDashboardPatient.svg";
import ItemMonitoring from "./ItemMonitoring";

export default function index() {
  return (
    <>
      <p className="text-[#1D1D1D] text-sm px-4">Seguimiento de mi tratamiento</p>
      <div className="flex md:flex-row justify-center items-center p-4 w-full h-auto md:h-[125px] gap-8">
        <div className="flex flex-row justify-center flex-1 gap-8">
          <ItemMonitoring
            porcentage="70%"
            icon={medication}
            title="Medicación"
          />
          <ItemMonitoring
            porcentage="50%"
            icon={treatment}
            title="Tratamientos completos"
          />
          <ItemMonitoring
            porcentage="100%"
            icon={clinicHistory}
            title="Historia Clínica"
          />
        </div>
      </div>
    </>
  );
}
