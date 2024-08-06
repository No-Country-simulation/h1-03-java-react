import React from "react";
import modifyAppointment from "../../../../assets/svg/others/modifyAppointmentCalendar.svg";
import { useNavigate } from "react-router-dom";

export default function index() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    window.scrollTo(0, 0);
    navigate("/tratamientos/crear-tratamiento");
  };

  return (
    <div
      className="flex flex-col w-1/2 sm:w-full justify-center items-center gap-4 border rounded-[45px] py-8 px-2 bg-[#5666BE] cursor-pointer"
      onClick={handleNavigate}
    >
      <img
        src={modifyAppointment}
        alt="icono de calendario con lapiz"
        width={100}
        height={100}
      />
      <p className="text-white text-center">Registrar tratamiento</p>
    </div>
  );
}
