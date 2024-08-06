import React from "react";
import FormTreatment from "./FormTreatment";
import { useSelector } from "react-redux";
import i18n from "../../../i18n/treatments/createTreatment/index.json";

export default function CreateTreatmentComponent() {
  const language = useSelector((state) => state.i18nReducer.language);

  return (
    <section className="container mx-auto border border-[#5666BE80] rounded-lg">
      <div className="flex flex-col py-2.5 px-6 gap-8">
        <p className="font-medium text-3xl text-center">{i18n[language].componentTitle}</p>
        <div className="flex flex-col sm:flex-row justify-between text-[#5666BE] font-semibold gap-3">
          <p>
            {i18n[language].infoPatient.name}{" "}
            <span className="text-black font-normal">
              James Lucho Bond Gonzales
            </span>
          </p>
          <p>
            {i18n[language].infoPatient.age}{" "}<span className="text-black font-normal">28a</span>
          </p>
          <p>
            {i18n[language].infoPatient.date}{" "}
            <span className="text-black font-normal">16-03-2024 13:30</span>
          </p>
        </div>
        <FormTreatment />
      </div>
    </section>
  );
}
