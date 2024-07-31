import React from "react";
import pills from "../../../../assets/svg/others/Pills.svg";
import bell from "../../../../assets/svg/others/bell.svg";
import bellWithSlash from "../../../../assets/svg/others/bellWithSlash.svg"
import bellWithoutSlash from "../../../../assets/svg/others/bellWithoutSlash.svg"
import ItemNotification from "./ItemNotification"

export default function index() {
  return (
  <>
    <div
      className="box-border flex flex-col justify-start w-full h-auto rounded-3xl py-9 px-8"
      style={{
        background:
          "linear-gradient(180deg, rgba(86, 102, 190, 0.6) 0%, rgba(242, 205, 91, 0.6) 100%)",
      }}
    >
      <div className="box-border flex flex-col-reverse md:flex-row justify-start items-center text-center gap-x-16">
        <div className="flex flex-row">
          <div className="flex justify-center">
            <img
              src={pills}
              alt=""
              aria-label=""
              title=""
              width={100}
              height={100}
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-start relative">
          <div>
            <p className="text-xl text-[#DB5A31] font-semibold">IBUPROFENO</p>
            <p className="text-base text-[#000000] text-center">400mg</p>
          </div>
          <div className="flex flex-row content-end items-start">
            <img
              className="cursor-pointer block ms-auto me-0 hover:rotate-12 transition duration-300 absolute right-0 top-10"
              src={bell}
              alt=""
              aria-label=""
              title=""
              width="30px"
              height="30px"
              loading="lazy"
            />
          </div>
          <div>
            <p
              className="text-center text-4xl font-semibold text-[#1D1D1D]"
              style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.25)" }}
            >
              12:30 HS
              <br></br>
              <p className="text-end font-normal text-sm text-[#000000] px-3">
                cada 8 horas
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
    <ItemNotification date="Lunes 14 de Julio" medicine="IBUPROFENO 400 MG" hour="20:30 HS" bell={bellWithSlash} />
    <ItemNotification date="Lunes 14 de Julio" medicine="ANTIBIÓTICO 250 MG" hour="16:00 HS" bell={bellWithoutSlash} />
    <ItemNotification date="Domingo 13 de Julio" medicine="IBUPROFENO 400 MG" hour="12:30 HS" bell={bellWithoutSlash} />
    <ItemNotification date="Domingo 13 de Julio" medicine="ANTIBIÓTICO 250 MG" hour="16:00 HS" bell={bellWithoutSlash} />
    </>
  );
}
