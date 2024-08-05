import React from "react";
import calendar from "../../../../assets/images/calendar.webp";
import bell from "../../../../assets/svg/others/bell.svg";

export default function index() {
  return (
    <div
      className="box-border flex flex-col justify-start w-full h-auto rounded-3xl py-9 px-8"
      style={{
        background:
          "linear-gradient(180deg, rgba(86, 102, 190, 0.6) 0%, rgba(242, 205, 91, 0.6) 100%)",
      }}
    >
      <p className="text-[#1D1D1D] font-medium text-base">
        Turno médico más próximo
      </p>
      <div className="box-border flex flex-col-reverse md:flex-row justify-center items-start text-center gap-x-16">
        <div className="flex flex-row">
          <div className="flex justify-center">
            <img
              src={calendar}
              alt=""
              aria-label=""
              title=""
              width={100}
              height={100}
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-start">
          <p
            className="text-3xl font-medium text-[#1D1D1D]"
            style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.25)" }}
          >
            Lunes 24 de mayo
          </p>
          <p
            className=" text-3xl font-medium text-[#1D1D1D]"
            style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.25)" }}
          >
            7:30h a 13:30h
          </p>
          <p className="text-2xl text-[#DB5A31] font-semibold">
            Consultorio 12
            <br></br>
            Oncología
          </p>
        </div>
        <div className="flex flex-row content-end items-start">
          <img
            className="cursor-pointer block ms-auto me-0 hover:rotate-12 transition duration-300"
            src={bell}
            alt=""
            aria-label=""
            title=""
            width="44px"
            height="44px"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
