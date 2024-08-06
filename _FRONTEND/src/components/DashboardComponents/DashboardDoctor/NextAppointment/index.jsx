import React from "react";
import calendar from "../../../../assets/images/calendar.webp";
import bell from "../../../../assets/svg/others/bell.svg";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/dashboards/dashboardDoctor/index.json";

export default function index() {
  const language = useSelector((state) => state.i18nReducer.language);

  return (
    <div
      className="box-border flex flex-col justify-start w-full h-auto rounded-3xl py-9 px-8"
      style={{
        background:
          "linear-gradient(180deg, rgba(86, 102, 190, 0.6) 0%, rgba(242, 205, 91, 0.6) 100%)",
      }}
    >
      <p className="text-[#1D1D1D] font-medium text-base">
        {i18n[language].nextAppointment.title}
      </p>
      <div className="box-border flex flex-col-reverse md:flex-row justify-center items-start text-center gap-x-16">
        <div className="flex flex-row">
          <div className="flex justify-center">
            <img
              src={calendar}
              alt={i18n[language].nextAppointment.image.calendar.title}
              aria-label={i18n[language].nextAppointment.image.calendar.title}
              title={i18n[language].nextAppointment.image.calendar.title}
              width={100}
              height={100}
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-start">
          <p
            className="text-3xl font-medium text-[#1D1D1D]"
            style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.25)" }}
          >
            {i18n[language].nextAppointment.date}
          </p>
          <p
            className=" text-3xl font-medium text-[#1D1D1D]"
            style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.25)" }}
          >
            {i18n[language].nextAppointment.time}
          </p>
          <p className="text-2xl text-[#DB5A31] font-semibold">
            {i18n[language].nextAppointment.consultingRoom}
            <br></br>
            {i18n[language].nextAppointment.specialty}
          </p>
        </div>
        <div className="flex flex-row content-end items-start">
          <img
            className="cursor-pointer block ms-auto me-0 hover:rotate-12 transition duration-300"
            src={bell}
            alt={i18n[language].nextAppointment.image.bell.title}
            aria-label={i18n[language].nextAppointment.image.bell.title}
            title={i18n[language].nextAppointment.image.bell.title}
            width="44px"
            height="44px"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
