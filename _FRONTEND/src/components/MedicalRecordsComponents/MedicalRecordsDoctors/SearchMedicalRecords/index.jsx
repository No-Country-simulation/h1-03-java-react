import React from "react";
import Searchbar from "./Searchbar";
import MedicalHistoryResult from "./MedicalHistoryResult"
import Pagination from "./Pagination"

export default function index() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start gap-20 p-10 pt-10">
      <div className="w-full lg:flex-1">
        <Searchbar />
        <MedicalHistoryResult />
        <Pagination totalPages={20} />
      </div>
    </section>
  );
}
