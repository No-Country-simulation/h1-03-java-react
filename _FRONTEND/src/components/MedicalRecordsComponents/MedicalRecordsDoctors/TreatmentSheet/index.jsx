import React from "react";
import ItemTreatment from "./ItemTreatment"
import Pagination from "../SearchMedicalRecords/Pagination"

export default function index() {
  return (
    <div className="flex flex-col py-2 px-4 text-center border-2 border-[#5666BE80] w-full h-auto rounded-2xl gap-4 text-black">
      <p className="text-2xl font-bold">Hoja de tratamientos</p>
      <ItemTreatment />
      <ItemTreatment />
      <ItemTreatment />
      <ItemTreatment />
      <Pagination totalPages="4" />
      
    </div>
  );
}
