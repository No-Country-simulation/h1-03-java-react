import React from "react";
import ItemPatient from "./ItemPatient";

export default function index() {
  return (
    <div>
      <p className="font-medium text-2xl">Pacientes:</p>
      <div className="w-full py-2">
        <div
          className="h-96 overflow-y-auto border border-gray-300 rounded-lg p-4"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#D9D9D9 #ffff",
          }}
        >
          <ul className="flex flex-col gap-2">
            <ItemPatient />
            <ItemPatient />
            <ItemPatient />
            <ItemPatient />
            <ItemPatient />
            <ItemPatient />
            <ItemPatient />
            <ItemPatient />
            <ItemPatient />
            <ItemPatient />
            <ItemPatient />
            <ItemPatient />
          </ul>
        </div>
      </div>
    </div>
  );
}
