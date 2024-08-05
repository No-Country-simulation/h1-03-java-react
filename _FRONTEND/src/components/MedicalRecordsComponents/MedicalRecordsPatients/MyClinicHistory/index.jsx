import React from 'react'
import ItemTreatament from "../../MedicalRecordsDoctors/TreatmentSheet/ItemTreatment"
import myClinicHistory from "../../../../assets/svg/others/myClinicHistory.svg"

export default function index() {
  return (
    <div className="flex flex-col py-4 justify-center items-center w-full h-auto gap-4 text-black">
      <div className='flex items-center gap-4'>
        <img src={myClinicHistory} alt="icono de historia clinica" />
        <p>Mi Historia Clínica</p>
      </div>

      <ItemTreatament />
      <ItemTreatament />
    </div>
  )
}
