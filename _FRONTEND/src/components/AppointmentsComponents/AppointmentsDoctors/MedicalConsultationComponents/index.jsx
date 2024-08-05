import React from "react";
import SearchBar from "./SearchBar"
import AppointmentResults from "./AppointmentResult"
import Pagination from "./../../../MedicalRecordsComponents/MedicalRecordsDoctors/SearchMedicalRecords/Pagination";

export default function index() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start gap-20 p-10 pt-10">
      <div className="w-full lg:flex-1">
        <SearchBar />
        <AppointmentResults />
        <Pagination totalPages={20} />
      </div>
    </section>
  )
}
