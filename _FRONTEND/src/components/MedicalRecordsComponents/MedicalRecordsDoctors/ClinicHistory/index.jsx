import React from "react";
import clinicHistory from "../../../../assets/svg/icons/clinicHistory.svg";

export default function index() {
  return (
    <div className="flex flex-col py-4 px-8 text-center border-2 border-[#5666BE80] w-full h-auto rounded-3xl gap-4">
      <div className="flex flex-row flex-1 justify-start items-start gap-4">
        <img
          src={clinicHistory}
          alt="icono de historia clinica"
          aria-label=""
          title=""
          width={50}
          height={50}
          loading="lazy"
        />
        <p className="text-4xl ">Historia clínica N° 0007</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col w-1/2 text-start text-[#5666BE] font-semibold gap-3">
          <p>
            Nombres:{" "}
            <span className="text-black font-normal">James Lucho </span>
          </p>
          <p>
            Apellidos:{" "}
            <span className="text-black font-normal">Bond Gonzales</span>
          </p>
          <p>
            Fecha de nacimiento:{" "}
            <span className="text-black font-normal">12-06-1995</span>
          </p>
          <p>
            Celular: <span className="text-black font-normal">56934842747</span>
          </p>
          <p>
            Domicilio:{" "}
            <span className="text-black font-normal">
              Lima-Perú, Asoc. viv. Villa Magisterial Lt12 Mz 12 Int. 200
            </span>
          </p>
        </div>
        <div className="flex flex-col w-1/2 text-start text-[#5666BE] font-semibold gap-3">
          <p>
            Sexo: <span className="text-black font-normal">Femenino</span>
          </p>
          <p>
            Ocupación:{" "}
            <span className="text-black font-normal">Sicario estatal</span>
          </p>
          <p>
            Estado civil:{" "}
            <span className="text-black font-normal">Conviviente</span>
          </p>
          <p>
            Doc. Identidad:{" "}
            <span className="text-black font-normal">72162793</span>
          </p>
          <p>
            Tipo de sangre: <span className="text-black font-normal">O+</span>
          </p>
          <p>
            Religión:{" "}
            <span className="text-black font-normal">Testigo de cthulhu</span>
          </p>
        </div>
      </div>
    </div>
  );
}
