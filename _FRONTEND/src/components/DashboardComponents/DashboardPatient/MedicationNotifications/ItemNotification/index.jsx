import React from 'react'
import pill from "../../../../../assets/svg/others/Pill.svg";

export default function index({date, medicine, hour, bell}) {
  return (
    <div>
      <div
        className="flex justify-center items-center py-0 px-6 text-center w-full h-auto rounded-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(86, 102, 190, 0.6) 0%, rgba(242, 205, 91, 0.6) 100%)",
        }}
      >
        <div className="flex flex-row flex-1 gap-4">
          <div className="flex justify-center items-center">
            <img
              src={pill}
              alt="icono de paciente"
              aria-label=""
              title=""
              width={60}
              height={60}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1 text-center items-start p-4">
            <p className="text-xl font-medium text-[#434343]">{date}</p>
            <p className="text-xl font-medium text-[#434343]">{medicine}</p>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1 text-start p-4">
            <p className="text-[#434343]">{hour}</p>
          </div>
          <div className="flex justify-center">
            <img
              src={bell}
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
  )
}
