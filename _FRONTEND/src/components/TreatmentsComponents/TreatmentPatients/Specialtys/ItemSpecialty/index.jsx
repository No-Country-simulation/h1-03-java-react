import React from "react";
import buttonPlus from "../../../../../assets/svg/others/buttonPlus.svg";

export default function index({ icon, specialty, date }) {
  return (
    <div>
      <div
        className="flex justify-center items-center px-4 text-center w-full h-auto rounded-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(86, 102, 190, 0.6) 0%, rgba(242, 205, 91, 0.6) 100%)",
        }}
      >
        <div className="flex flex-row flex-1 gap-4">
          <div className="flex justify-center">
            <img
              src={icon}
              alt="icono de paciente"
              aria-label=""
              title=""
              width={50}
              height={50}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1 items-start p-4">
            <p className="text-xl font-medium text-[#434343]">Especialidad:</p>
            <p className="text-xl font-medium text-[#434343]">{specialty}</p>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1 text-start p-4">
            <p className="font-medium text-xl text-[#434343]">{date}</p>
          </div>
          <div className="flex justify-center">
            <img
              src={buttonPlus}
              alt="icono de busqueda"
              aria-label=""
              title=""
              width={40}
              height={40}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
