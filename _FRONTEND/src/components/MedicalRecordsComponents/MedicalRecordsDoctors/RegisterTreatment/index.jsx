import React from "react";
import modifyAppointment from "../../../../assets/svg/others/modifyAppointmentCalendar.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/medicalRecords/index.json";

export default function index() {
  const language = useSelector((state) => state.i18nReducer.language);
  const navigate = useNavigate();

  const handleNavigate = () => {
    window.scrollTo(0, 0);
    navigate(`${i18n[language].register.navigate}`);
  };

  return (
    <div
      className="flex flex-col w-1/2 sm:w-full justify-center items-center gap-4 border rounded-[45px] py-8 px-2 bg-[#5666BE] cursor-pointer"
      onClick={handleNavigate}
    >
      <img
        src={modifyAppointment}
        alt={i18n[language].register.icon}
        aria-label={i18n[language].register.icon}
        title={i18n[language].register.icon}
        width={100}
        height={100}
      />
      <p className="text-white text-center">{i18n[language].register.title}</p>
    </div>
  );
}
