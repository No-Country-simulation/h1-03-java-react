import React from "react";
import patient from "../../../../../assets/svg/icons/patientDashboardDoctor.svg";
import search from "../../../../../assets/svg/others/search.svg";

export default function index() {
  return (
    <div>
      <div
        className="flex justify-center items-center py-1 px-4 text-center w-full h-auto rounded-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(86, 102, 190, 0.6) 0%, rgba(242, 205, 91, 0.6) 100%)",
        }}
      >
        <div className="flex flex-row flex-1 gap-4">
          <div className="flex justify-center">
            <img
              src={patient}
              alt="icono de paciente"
              aria-label=""
              title=""
              width={50}
              height={50}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1 text-start p-4">
            <p className="text-xl font-medium text-[#434343]">Pedro Navaja</p>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1 text-start p-4">
            <p className="font-extrabold text-xl text-[#434343]">H.C. 0001</p>
          </div>
          <div className="flex justify-center">
            <img
              src={search}
              alt="icono de busqueda"
              aria-label=""
              title=""
              width={35}
              height={35}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
