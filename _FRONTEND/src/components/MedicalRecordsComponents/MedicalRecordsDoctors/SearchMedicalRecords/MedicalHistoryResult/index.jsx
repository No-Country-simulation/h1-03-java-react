import React from "react";
import ItemMedicalHistory from "./ItemMedicalHistory";
import { useSelector } from "react-redux";
import i18n from "../../../../../i18n/medicalRecords/searchMedicalRecord/index.json";

export default function index() {
  const language = useSelector((state) => state.i18nReducer.language);

  return (
    <div className="flex flex-col gap-4 py-4">
      <p className="text-center text-2xl mb-4">
        {i18n[language].result.title}
      </p>
      <ItemMedicalHistory
        id={i18n[language].result.item.id}
        name={i18n[language].result.item.name}
        path={i18n[language].result.item.path}
      />
      <ItemMedicalHistory
        id={i18n[language].result.item.id}
        name={i18n[language].result.item.name}
        path={i18n[language].result.item.path}
      />
      <ItemMedicalHistory
        id={i18n[language].result.item.id}
        name={i18n[language].result.item.name}
        path={i18n[language].result.item.path}
      />
      <ItemMedicalHistory
        id={i18n[language].result.item.id}
        name={i18n[language].result.item.name}
        path={i18n[language].result.item.path}
      />
      <ItemMedicalHistory
        id={i18n[language].result.item.id}
        name={i18n[language].result.item.name}
        path={i18n[language].result.item.path}
      />
    </div>
  );
}
