import React from "react";
import Button from "../../../Resources/FormElements/Button";
import download from "../../../../assets/svg/others/downloadCircle.svg";
import share from "../../../../assets/svg/others/shareCircle.svg";
import print from "../../../../assets/svg/others/printCircle.svg";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/medicalRecordPatient/index.json";

export default function index() {
  const language = useSelector((state) => state.i18nReducer.language);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <Button
          text={i18n[language].buttons.download.title}
          bgColor="[#5666BE]"
          textColor="white"
          classNames="pl-12 font-bold"
        />
        <div className="absolute top-2 left-2">
          <img
            src={download}
            alt={i18n[language].buttons.download.icon}
            aria-label={i18n[language].buttons.download.icon}
            title={i18n[language].buttons.download.icon}
            width={38}
          />
        </div>
      </div>
      <div className="relative">
        <Button
          text={i18n[language].buttons.share.title}
          bgColor="[#5666BE]"
          textColor="white"
          classNames="pl-12 font-bold"
        />
        <div className="absolute top-2 left-1">
          <img
            src={share}
            alt={i18n[language].buttons.share.icon}
            aria-label={i18n[language].buttons.share.icon}
            title={i18n[language].buttons.share.icon}
            width={38}
          />
        </div>
      </div>
      <div className="relative">
        <Button
          text={i18n[language].buttons.print.title}
          bgColor="[#5666BE]"
          textColor="white"
          classNames="pl-12 font-bold"
        />
        <div className="absolute top-2 left-2">
          <img
            src={print}
            alt={i18n[language].buttons.print.icon}
            aria-label={i18n[language].buttons.print.icon}
            title={i18n[language].buttons.print.icon}
            width={38}
          />
        </div>
      </div>
    </div>
  );
}
