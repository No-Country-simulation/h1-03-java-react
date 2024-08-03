import React from "react";
import ClinicHistory from "./ClinicHistory";
import Filters from "./Filters";
import TreatmentSheet from "./TreatmentSheet";
import RegisterTreatment from "./RegisterTreatment";
import DownloadHC from "./DownloadHC";

export default function index() {
  return (
    <section className="min-h-screen w-full p-16">
      <div className="flex flex-col justify-center items-start w-full gap-8">
        <ClinicHistory />
        <div className="flex justify-between w-full gap-4">
          <div className="flex flex-col w-1/4 gap-4">
            <Filters />
            <RegisterTreatment />
            <DownloadHC />
          </div>
          <TreatmentSheet />
        </div>
      </div>
    </section>
  );
}
