import React, { useEffect, useState } from "react";
import stethoscope from "../../../../../assets/svg/others/stethoscope.svg";
import description from "../../../../../assets/svg/others/descriptionMagnifyingGlass.svg";
import recipe from "../../../../../assets/svg/others/recipe.svg";
import CreatePrescriptionPopUp from "../../../../PrescriptionsComponents/CreatePrescriptionPopUp";

export default function index() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(false);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col py-4 px-8 text-center border-2 border-[#5666BE80] w-full h-auto rounded-3xl gap-4">
      <div className="flex flex-col sm:flex-row justify-between">
        <p>Fecha: 16-02-2024</p>
        <p>Hora: 12:30pm</p>
        <p>Edad: 45 a</p>
      </div>
      <div className="flex items-start gap-2">
        <img
          src={stethoscope}
          alt="icono de estetoscopio"
          aria-label="icono de estetoscopio"
          title="icono de estetoscopio"
        />
        <p className="text-start">
          Motivo de consulta:
          <br></br>
          <span>
            Paciente varon de 45 años refiere sentir dolor en la region
            abdominal tras ingerir macarrones con queso hace 2 horas.
          </span>
        </p>
      </div>
      <div className="flex items-start gap-2">
        <img
          src={description}
          alt="icono de descripción"
          aria-label="icono de descripción"
          title="icono de descripción"
        />
        <p className="text-start">
          Descripción:
          <br></br>
          <span>
            Paciente presenta diarrea acuosa y frecuente (más de 3 deposiciones
            líquidas al día) acompañada de dolor abdominal y calambres. Se
            observa fiebre de 38.5°C y signos de deshidratación moderada.
            Antecedente de uso reciente de antibióticos (clindamicina).
          </span>
        </p>
      </div>
      <div className="text-start">
        <p className="">
          Diagnostico:
          <br></br>
          Colitis seudomembranosa secundaria a infección por Clostridioides
          difficile.
        </p>
      </div>
      <div className="text-start">
        <p className="">Tratamiento:</p>
        <ol className="list-decimal list-inside">
          <li>Suspender el uso de clindamicina.</li>
          <li>Iniciar tratamiento con vancomicina.</li>
          <li>Rehidratación oral/IV según necesidad.</li>
          <li>Control en 1 semana.</li>
        </ol>
      </div>
      <div className="text-start">
        <p>Adjuntos:</p>
        <div className="flex gap-2 cursor-pointer" onClick={openModal}>
          <img src={recipe} alt="icono de medicación recetada" />
          <p className="text-[#5666BE]">Receta</p>
        </div>
      </div>
      <div className="text-start">
        <p className="">Tratante:</p>
        <div className="flex flex-col sm:flex-row justify-between text-xs">
          <p>Nombre y apellido: Juanito Alimaña</p>
          <p>Especialidad: Medicina General</p>
          <p>Licencia: 2456454</p>
        </div>
      </div>
      {isModalOpen && <CreatePrescriptionPopUp closeModal={closeModal} />}
    </div>
  );
}
