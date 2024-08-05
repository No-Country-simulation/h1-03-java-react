import React from "react";
import Medic from "./MedicData";
import NextAppointment from "./NextAppointment";
import PatientsList from "./PatientsList";
import MedicalLinks from "./MedicalLinks";

export default function DashboardDoctor() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row justify-center items-start gap-20 p-10 pt-10">
      <div className="w-full lg:flex-1">
        <div className="flex flex-col gap-10">
          <Medic />
          <MedicalLinks />
        </div>
      </div>
      <div className="w-full lg:flex-1">
        <div className="flex flex-col gap-2">
          <NextAppointment />
          <PatientsList />
        </div>
      </div>
    </section>
  );
}
