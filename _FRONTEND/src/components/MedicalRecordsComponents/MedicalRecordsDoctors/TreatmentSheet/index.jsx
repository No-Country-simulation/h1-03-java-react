import React from "react";
import ItemTreatment from "./ItemTreatment"
import Pagination from "../SearchMedicalRecords/Pagination"
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/medicalRecords/index.json";

export default function index() {
  const language = useSelector((state) => state.i18nReducer.language);

  return (
    <div className="flex flex-col py-2 px-4 text-center border-2 border-[#5666BE80] w-full h-auto rounded-2xl gap-4 text-black">
      <p className="text-2xl font-bold">{i18n[language].treatmentSheet}</p>
      <ItemTreatment />
      <ItemTreatment />
      <ItemTreatment />
      <ItemTreatment />
      <Pagination totalPages="4" />
      
    </div>
  );
}
