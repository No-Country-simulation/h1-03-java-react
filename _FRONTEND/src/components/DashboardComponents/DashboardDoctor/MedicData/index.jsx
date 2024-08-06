import React from "react";
import doctor from "../../../../assets/svg/icons/doctorDashboardDoctor.svg";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/dashboards/dashboardDoctor/index.json";

export default function index() {
  const language = useSelector((state) => state.i18nReducer.language);

  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center p-4 text-center border-2 border-[#5666BE] w-full h-auto md:h-[125px] rounded-3xl ">
      <div className="flex flex-row flex-1">
        <div className="flex justify-center">
          <img
            src={doctor}
            alt="icono de doctor"
            aria-label=""
            title=""
            width={50}
            height={50}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-2 flex-1 text-start p-4">
          <p className="text-base font-medium">Dr. Juanito Alimaña</p>
          <p className="text-base text-[#2C2C2C]">
            <small>{i18n[language].dataMedic.specialty}</small>
          </p>
          <p className="text-base text-[#2C2C2C]">
            <small>Hospital Mamani</small>
          </p>
        </div>
      </div>
    </div>
  );
}
