import React from "react";
import ItemAppointment from "./ItemAppointment";
import { useSelector } from "react-redux";
import i18n from "../../../../../i18n/appointmentsDoctor/myAppointments/index.json";

export default function index() {
  const language = useSelector((state) => state.i18nReducer.language);

  return (
    <div className="flex flex-col gap-4 py-4">
      <p className="text-center text-2xl mb-4">
        {i18n[language].result.title}
      </p>
      <ItemAppointment
        date={i18n[language].result.item.date}
        name={i18n[language].result.item.name}
        state={i18n[language].result.item.state1}
        timeSlot={i18n[language].result.item.timeSlot1}
        path={i18n[language].result.item.path}
      />
      <ItemAppointment
        date={i18n[language].result.item.date}
        name={i18n[language].result.item.name}
        state={i18n[language].result.item.state2}
        timeSlot={i18n[language].result.item.timeSlot1}
        path={i18n[language].result.item.path}
      />
      <ItemAppointment
        date={i18n[language].result.item.date}
        name={i18n[language].result.item.name}
        state={i18n[language].result.item.state3}
        timeSlot={i18n[language].result.item.timeSlot2}
        path={i18n[language].result.item.path}
      />
      <ItemAppointment
        date={i18n[language].result.item.date}
        name={i18n[language].result.item.name}
        state={i18n[language].result.item.state2}
        timeSlot={i18n[language].result.item.timeSlot1}
        path={i18n[language].result.item.path}
      />
      <ItemAppointment
        date={i18n[language].result.item.date}
        name={i18n[language].result.item.name}
        state={i18n[language].result.item.state2}
        timeSlot={i18n[language].result.item.timeSlot1}
        path={i18n[language].result.item.path}
      />
    </div>
  );
}
