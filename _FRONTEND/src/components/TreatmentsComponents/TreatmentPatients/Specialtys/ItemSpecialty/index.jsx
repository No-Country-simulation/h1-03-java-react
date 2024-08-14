import React from "react";
import buttonPlus from "../../../../../assets/svg/others/buttonPlus.svg";
import { useSelector } from "react-redux";
import i18n from "../../../../../i18n/treatments/index.json";

export default function index({ icon, specialty, date, alt, aria, title }) {
  const language = useSelector((state) => state.i18nReducer.language);

  return (
    <div>
      <div
        className="flex justify-center items-center px-4 text-center w-full h-auto rounded-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(86, 102, 190, 0.6) 0%, rgba(242, 205, 91, 0.6) 100%)",
        }}
      >
        <div className="flex flex-row flex-1 gap-4">
          <div className="flex justify-center">
            <img
              src={icon}
              alt={alt}
              aria-label={aria}
              title={title}
              width={50}
              height={50}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1 items-start p-4">
            <p className="text-xl font-medium text-[#434343]">
              {i18n[language].specialties.componentTitle}
            </p>
            <p className="text-xl font-medium text-[#434343]  text-nowrap">
              {specialty}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1 text-start p-4">
            <p className="font-medium text-xl text-[#434343] text-nowrap">
              {date}
            </p>
          </div>
          <button
            type="button"
            className="flex justify-center items-center p-0 bg-transparent"
          >
            <img
              src={buttonPlus}
              alt={i18n[language].specialties.buttonPlus}
              aria-label={i18n[language].specialties.buttonPlus}
              title={i18n[language].specialties.buttonPlus}
              width={40}
              height={40}
              loading="lazy"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
