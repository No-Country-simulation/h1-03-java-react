import React from "react";
import NextAppointment from "../../AppointmentsComponents/AppointmentsPatients/AppointmentsMain/NextAppointment";

export default function DashboardPatient() {
  return (
    <>
      <section className="min-h-screen flex flex-col lg:flex-row justify-center items-start gap-20 p-10 pt-10">
        <div className="w-full lg:flex-1">
          <div className="flex flex-col gap-10"></div>
          <div className="flex flex-col gap-10">
            <NextAppointment />
          </div>
          <div className="flex flex-col gap-10"></div>
        </div>
        <div className="w-full lg:flex-1">
          <div className="flex flex-col gap-2"></div>
        </div>
      </section>
    </>
  );
}
