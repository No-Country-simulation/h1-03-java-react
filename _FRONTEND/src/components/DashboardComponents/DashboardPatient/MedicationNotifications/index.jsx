import React from "react";
import pills from "../../../../assets/svg/others/Pills.svg";
import bell from "../../../../assets/svg/others/bell.svg";
import bellWithSlash from "../../../../assets/svg/others/bellWithSlash.svg";
import bellWithoutSlash from "../../../../assets/svg/others/bellWithoutSlash.svg";
import ItemNotification from "./ItemNotification";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/dashboardComponents/dashboardPatient/notifications/index.json";

export default function index() {
  const language = useSelector((state) => state.i18nReducer.language);

  return (
    <>
      <div
        className="box-border flex flex-col justify-start w-full h-auto rounded-3xl py-9 px-8"
        style={{
          background:
            "linear-gradient(180deg, rgba(86, 102, 190, 0.6) 0%, rgba(242, 205, 91, 0.6) 100%)",
        }}
      >
        <div className="box-border flex flex-col-reverse md:flex-row justify-start items-center text-center gap-x-16">
          <div className="flex flex-row">
            <div className="flex justify-center">
              <img
                src={pills}
                alt={i18n[language].pills}
                aria-label={i18n[language].pills}
                title={i18n[language].pills}
                width={100}
                height={100}
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 text-start relative">
            <div>
              <p className="text-xl text-[#DB5A31] font-semibold">
                {i18n[language].medication}
              </p>
              <p className="text-base text-[#000000] text-center">
                {i18n[language].grams}
              </p>
            </div>
            <div className="flex flex-row content-end items-start">
              <img
                className="cursor-pointer block ms-auto me-0 hover:rotate-12 transition duration-300 absolute right-0 top-10"
                src={bell}
                alt={i18n[language].bell}
                aria-label={i18n[language].bell}
                title={i18n[language].bell}
                width="30px"
                height="30px"
                loading="lazy"
              />
            </div>
            <div>
              <p
                className="text-center text-4xl font-semibold text-[#1D1D1D]"
                style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.25)" }}
              >
                {i18n[language].nextMedicine}
                <br></br>
                <p className="text-end font-normal text-sm text-[#000000] px-3">
                  {i18n[language].iteration}
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ItemNotification
        date={i18n[language].items.item1.date}
        medicine={i18n[language].items.item1.medicine}
        hour={i18n[language].items.item1.hour}
        bell={bellWithSlash}
      />
      <ItemNotification
        date={i18n[language].items.item2.date}
        medicine={i18n[language].items.item2.medicine}
        hour={i18n[language].items.item2.hour}
        bell={bellWithoutSlash}
      />
      <ItemNotification
        date={i18n[language].items.item3.date}
        medicine={i18n[language].items.item3.medicine}
        hour={i18n[language].items.item3.hour}
        bell={bellWithoutSlash}
      />
      <ItemNotification
        date={i18n[language].items.item4.date}
        medicine={i18n[language].items.item4.medicine}
        hour={i18n[language].items.item4.hour}
        bell={bellWithoutSlash}
      />
    </>
  );
}
