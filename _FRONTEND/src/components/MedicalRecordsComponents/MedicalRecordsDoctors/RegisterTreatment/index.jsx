import React from "react";
import modifyAppointment from "../../../../assets/svg/others/modifyAppointmentCalendar.svg";

export default function index() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 border rounded-[45px] py-8 px-2 bg-[#5666BE]">
      <img
        src={modifyAppointment}
        alt="icono de calendario con lapiz"
        width={100}
        height={100}
      />
      <p className="text-white">Registrar tratamiento</p>
    </div>
  );
}
