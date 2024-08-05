import React from "react";
import PatientList from "../../../../../../DashboardComponents/DashboardDoctor/PatientsList";
import NextAppointment from "../../../../../../DashboardComponents/DashboardDoctor/NextAppointment";
import closePopUp from "../../../../../../../assets/svg/others/closePopup.svg";

export default function index({ closeModal }) {
  return (
    <section
      onClick={closeModal}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="pointer-events-all absolute w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-2/5 h-[90%] overflow-y-auto top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border-2 bg-white rounded-xl grid justify-center items-center p-1 sm:p-3 md:p-8"
        style={{
          scrollbarColor: "#D9D9D9 #ffff",
        }}
      >
        <div className="flex flex-col font-bold text-balance gap-2">
          <div
            className="absolute right-2 top-1 cursor-pointer"
            onClick={closeModal}
          >
            <img src={closePopUp} alt="cerrar pop up" />
          </div>
          <NextAppointment />
          <PatientList />
        </div>
      </div>
    </section>
  );
}
