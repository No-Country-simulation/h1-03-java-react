import React from 'react'
import pill from "../../../../../assets/svg/others/Pill.svg";
import { useSelector } from "react-redux";
import i18n from "../../../../../i18n/dashboardComponents/dashboardPatient/notifications/index.json";

export default function index({date, medicine, hour, bell}) {
  const language = useSelector((state) => state.i18nReducer.language);

  return (
    <div>
      <div
        className="flex justify-center items-center py-0 px-6 text-center w-full h-auto rounded-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(86, 102, 190, 0.6) 0%, rgba(242, 205, 91, 0.6) 100%)",
        }}
      >
        <div className="flex flex-row flex-1 gap-4">
          <div className="flex justify-center items-center">
            <img
              src={pill}
              alt={i18n[language].pills}
              aria-label={i18n[language].pills}
              title={i18n[language].pills}
              width={60}
              height={60}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1 text-center items-start p-4">
            <p className="text-xl font-medium text-[#434343] whitespace-nowrap">{date}</p>
            <p className="text-xl font-medium text-[#434343] whitespace-nowrap">{medicine}</p>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1 text-start p-4">
            <p className="text-[#434343]">{hour}</p>
          </div>
          <div className="flex justify-center">
            <img
              src={bell}
              alt={i18n[language].bell}
              aria-label={i18n[language].bell}
              title={i18n[language].bell}
              width={35}
              height={35}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
