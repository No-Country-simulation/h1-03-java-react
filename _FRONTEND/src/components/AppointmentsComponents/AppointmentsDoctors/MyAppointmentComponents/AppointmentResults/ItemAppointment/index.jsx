import React from "react";
import calendar from "../../../../../../assets/svg/others/calendarReserveAppointment.svg";
import search from "../../../../../../assets/svg/others/search.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import i18n from "../../../../../../i18n/appointmentsDoctor/myAppointments/index.json";

export default function index({ date, name, state, timeSlot, path }) {
  const language = useSelector((state) => state.i18nReducer.language);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-stretch py-2 px-4 md:px-8 w-full h-auto rounded-3xl border border-black divide-y lg:divide-y-0 lg:divide-x divide-black">
      <div className="flex flex-row flex-1 gap-4 p-4 items-center justify-center md:justify-start">
        <div className="flex justify-center items-center">
          <img
            src={calendar}
            alt={i18n[language].icons.calendar}
            aria-label={i18n[language].icons.calendar}
            title={i18n[language].icons.calendar}
            width={50}
            height={50}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <p className="text-xl">{date}</p>
        </div>
      </div>
      <div className="flex flex-col flex-1 items-center gap-4 p-4">
        <p className="text-xl">{i18n[language].itemResult.timeSlot}</p>
        <div className="flex justify-center border-2 border-[#5666BE] rounded-full">
          <div
            className={`flex-1 px-10 py-4 rounded-l-full ${
              timeSlot === "morning" ? "bg-[#e8def8]" : ""
            } `}
          >
            <p className="text-[#1D192B] font-medium text-sm">
              {i18n[language].itemResult.morning}
            </p>
          </div>
          <div className="w-0.5 bg-[#5666BE] h-full"></div>
          <div
            className={`flex-1 px-10 py-4 rounded-r-full ${
              timeSlot === "afternoom" ? "bg-[#e8def8]" : ""
            } `}
          >
            <p className="text-[#1D192B] font-medium text-sm">
              {i18n[language].itemResult.afternoon}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-2 p-4 justify-center items-center">
        <p className="text-2xl font-medium">
          {i18n[language].itemResult.patient}
        </p>
        <p className="text-2xl text-center">{name}</p>
      </div>
      <div className="flex flex-col flex-1 gap-2 p-4 justify-center items-center">
        <p className="text-2xl font-medium">
          {i18n[language].itemResult.state}
        </p>
        <p className="text-2xl text-center">{state}</p>
      </div>
      <div
        className="flex flex-col flex-1 items-center gap-4 p-4 cursor-pointer"
        onClick={handleNavigate}
      >
        <p className="text-xl">{i18n[language].itemResult.reviewHistory}</p>
        <div className="flex justify-center">
          <img
            src={search}
            alt={i18n[language].icons.search}
            aria-label={i18n[language].icons.search}
            title={i18n[language].icons.search}
            width={40}
            height={40}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
