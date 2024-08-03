import React from "react";
import download from "../../../../assets/svg/others/downloadCH.svg";

export default function index() {
  return (
    <div className="flex flex-col w-1/2 sm:w-full justify-center items-center gap-4 border rounded-[45px] py-8 px-2 bg-[#5666BE]">
      <img
        src={download}
        alt="icono de descarga"
        width={100}
        height={100}
      />
      <p className="text-white text-center">Descargar H.C.</p>
    </div>
  );
}
