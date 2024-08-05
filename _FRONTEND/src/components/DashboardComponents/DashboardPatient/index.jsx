import React from "react";
import NextAppointment from "../../AppointmentsComponents/AppointmentsPatients/AppointmentsMain/NextAppointment";
import TreatamentMonitoring from "./TreatmentMonitoring";
import MedicationNotifications from "./MedicationNotifications";
import Calendar from "./Calendar"

export default function DashboardPatient() {
  return (
    <>
      <section className="min-h-screen flex flex-col lg:flex-row justify-center items-start gap-20 p-10 pt-10">
        <div className="w-full lg:flex-1">
          <div className="flex flex-col gap-10"></div>
          <div className="flex flex-col gap-10">
            <TreatamentMonitoring />
            <div className="container">
              <p className="text-[#1D1D1D] text-sm px-4 py-2">
                Mis próximas citas agendadas
              </p>
              <NextAppointment />
            </div>
            <Calendar />
          </div>
          <div className="flex flex-col gap-10"></div>
        </div>
        <div className="w-full lg:flex-1">
          <div className="flex flex-col gap-2">
            <MedicationNotifications />
          </div>
        </div>
      </section>
    </>
  );
}
