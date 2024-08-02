import React from "react";
import ItemMedicalHistory from "./ItemMedicalHistory";

export default function index() {
  return (
    <div className="flex flex-col gap-4 py-4">
      <p className="text-center text-2xl mb-4">
        Resultados de tu búsqueda - Historias Clínicas
      </p>
      <ItemMedicalHistory
        id="15457896"
        name="Isabel de Castilla Condorcanqui"
      />
      <ItemMedicalHistory
        id="15457896"
        name="Isabel de Castilla Condorcanqui"
      />
      <ItemMedicalHistory
        id="15457896"
        name="Isabel de Castilla Condorcanqui"
      />
      <ItemMedicalHistory
        id="15457896"
        name="Isabel de Castilla Condorcanqui"
      />
      <ItemMedicalHistory
        id="15457896"
        name="Isabel de Castilla Condorcanqui"
      />
    </div>
  );
}
