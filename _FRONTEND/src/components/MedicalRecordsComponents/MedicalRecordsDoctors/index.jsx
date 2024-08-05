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
        <div className="flex flex-col lg:flex-row justify-between w-full gap-4">
          <div className="flex flex-col sm:flex-row lg:flex-col lg:w-1/4 gap-4">
            <Filters />
            <div className="flex flex-row sm:flex-col gap-3">
              <RegisterTreatment />
              <DownloadHC />
            </div>
          </div>
          <TreatmentSheet />
        </div>
      </div>
    </section>
  );
}
