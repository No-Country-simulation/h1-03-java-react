import React from "react";
import download from "../../../../assets/svg/others/downloadCH.svg";

export default function index() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 border rounded-[45px] py-8 px-2 bg-[#5666BE]">
      <img
        src={download}
        alt="icono de calendario con lapiz"
        width={100}
        height={100}
      />
      <p className="text-white">Descargar H.C.</p>
    </div>
  );
}
