import React from "react";
import ItemAppointment from "./ItemAppointment";
import { useSelector } from "react-redux";
import i18n from "../../../../../i18n/appointmentsDoctor/medicalConsultation/index.json";

export default function index() {
  const language = useSelector((state) => state.i18nReducer.language);

  return (
    <div className="flex flex-col gap-4 py-4">
      <p className="text-center text-2xl mb-4">{i18n[language].result.title}</p>
      <ItemAppointment
        date={i18n[language].result.item.date}
        name={i18n[language].result.item.name}
        profession={i18n[language].result.item.profession}
        timeSlot={i18n[language].result.item.timeSlot1}
      />
      <ItemAppointment
        date={i18n[language].result.item.date}
        name={i18n[language].result.item.name}
        profession={i18n[language].result.item.profession}
        timeSlot={i18n[language].result.item.timeSlot2}
      />
      <ItemAppointment
        date={i18n[language].result.item.date}
        name={i18n[language].result.item.name}
        profession={i18n[language].result.item.profession}
        timeSlot={i18n[language].result.item.timeSlot1}
      />
      <ItemAppointment
        date={i18n[language].result.item.date}
        name={i18n[language].result.item.name}
        profession={i18n[language].result.item.profession}
        timeSlot={i18n[language].result.item.timeSlot1}
      />
    </div>
  );
}
