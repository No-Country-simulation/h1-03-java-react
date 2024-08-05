import React from "react";
import Button from "../../../Resources/FormElements/Button";
import audio from "../../../../assets/svg/others/audio.svg";
import recipe from "../../../../assets/svg/others/recipeTreatment.svg";
import attached from "../../../../assets/svg/others/attached.svg";
import rx from "../../../../assets/svg/others/imgRX.svg";
import laboratory from "../../../../assets/svg/others/laboratory.svg";

export default function index() {
  return (
    <form className="flex flex-col gap-8">
      <div className="flex flex-col border border-[#5666BE80] rounded-lg p-3 gap-3 relative">
        <label className="text-sm text-[#5666BECC] font-semibold">
          Motivo de consulta:
        </label>
        <input
          type="text"
          className="bg-[#D982354D] border-white rounded-lg px-4 py-2 placeholder:text-sm placeholder:text-black"
          placeholder="Escriba aquí ..."
        />
        <div className="absolute top-2 right-10">
          <img src={audio} alt="icono de microfono" width={30} />
        </div>
      </div>
      <div className="flex flex-col border border-[#5666BE80] rounded-lg p-3 gap-3 relative">
        <label className="text-sm text-[#5666BECC] font-semibold">
          Descripción:
        </label>
        <input
          type="text"
          className="bg-[#D982354D] border-white rounded-lg px-4 py-2 placeholder:text-sm placeholder:text-black"
          placeholder="Escriba aquí ..."
        />
        <div className="absolute top-2 right-10">
          <img src={audio} alt="icono de microfono" width={30} />
        </div>
      </div>
      <div className="flex flex-col border border-[#5666BE80] rounded-lg p-3 gap-3 relative">
        <label className="text-sm text-[#5666BECC] font-semibold">
          Diagnóstico:
        </label>
        <input
          type="text"
          className="bg-[#D982354D] border-white rounded-lg px-4 py-2 placeholder:text-sm placeholder:text-black"
          placeholder="Escriba aquí ..."
        />
        <div className="absolute top-2 right-10">
          <img src={audio} alt="icono de microfono" width={30} />
        </div>
      </div>
      <div className="flex flex-col border border-[#5666BE80] rounded-lg p-3 gap-3 relative">
        <label className="text-sm text-[#5666BECC] font-semibold">
          Plan de tratamiento:
        </label>
        <textarea
          type="text"
          className="bg-[#D982354D] border-white rounded-lg px-4 py-2 placeholder:text-sm placeholder:text-black"
          placeholder="Escriba aquí ..."
        />
        <div className="absolute top-2 right-10">
          <img src={audio} alt="icono de microfono" width={30} />
        </div>
      </div>
      <div>
        <p className="text-sm text-[#5666BECC] font-semibold">Adjuntos:</p>
        <div className="flex items-center gap-4">
          <img src={attached} alt="icono de adjuntos" width={40} />
          <div className="flex flex-col items-center">
            <img src={recipe} alt="icono de receta" width={40} />
            <p>Receta</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={rx} alt="icono de imagenologia" width={35} />
            <p>Imagenologia</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={laboratory}
              alt="icono de tubo de laboratorio"
              width={48}
            />
            <p>Laboratorio</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Button
          text="Cancelar"
          bgColor="#D98235"
          textColor="white"
          classNames="px-10"
        />
        <Button
          text="Confirmar"
          bgColor="#5666BE"
          textColor="white"
          classNames="px-10"
        />
      </div>
      <div className="flex flex-col">
        <p>Doctor:</p>
        <div className="flex flex-col sm:flex-row justify-between">
          <p>Nombre y apellido: Juanito Alimaña</p>
          <p>Especialidad: Medicina General</p>
          <p>Licencia: 2456454</p>
        </div>
      </div>
    </form>
  );
}
