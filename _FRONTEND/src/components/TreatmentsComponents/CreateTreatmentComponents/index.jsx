import React from "react";
import FormTreatment from "./FormTreatment";

export default function CreateTreatmentComponent() {
  return (
    <section className="container mx-auto border border-[#5666BE80] rounded-lg">
      <div className="flex flex-col py-2.5 px-6 gap-8">
        <p className="font-medium text-3xl text-center">Crear Tratamiento</p>
        <div className="flex flex-col sm:flex-row justify-between text-[#5666BE] font-semibold gap-3">
          <p>
            Nombres y Apellido:{" "}
            <span className="text-black font-normal">
              James Lucho Bond Gonzales
            </span>
          </p>
          <p>
            Edad: <span className="text-black font-normal">28a</span>
          </p>
          <p>
            Fecha:{" "}
            <span className="text-black font-normal">16-03-2024 13:30</span>
          </p>
        </div>
        <FormTreatment />
      </div>
    </section>
  );
}
