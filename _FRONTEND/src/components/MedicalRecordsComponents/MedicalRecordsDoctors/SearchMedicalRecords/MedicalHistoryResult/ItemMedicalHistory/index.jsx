import React from "react";
import clinicHistory from "../../../../../../assets/svg/others/searchClinicHistory.svg";
import search from "../../../../../../assets/svg/others/search.svg";

export default function index({ id, name }) {
  return (
    <div className="flex flex-col md:flex-row  justify-between items-stretch py-2 px-8 w-full h-auto rounded-3xl border border-black divide-y md:divide-y-0 md:divide-x divide-black">
      <div className="flex flex-row flex-1 gap-4 p-4 items-center justify-center md:justify-start">
        <div className="flex justify-center items-center">
          <img
            src={clinicHistory}
            alt="icono de historial clinico"
            aria-label=""
            title=""
            width={50}
            height={50}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <p className="text-xl">DNI: {id}</p>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-2 p-4 justify-center items-center">
        <p className="text-2xl font-medium">{name}</p>
      </div>
      <div className="flex flex-col flex-1 items-center gap-4 p-4">
        <p className="text-xl">Ver detalles</p>
        <div className="flex justify-center">
          <img
            src={search}
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
  );
}
