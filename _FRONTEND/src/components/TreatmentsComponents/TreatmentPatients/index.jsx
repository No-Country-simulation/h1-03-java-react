import React from 'react'
import ItemTreatment from "../../MedicalRecordsComponents/MedicalRecordsDoctors/TreatmentSheet/ItemTreatment"
import Specialtys from "./Specialtys"

export default function index() {
  return (
    <section className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='flex-1'>
          <Specialtys />
        </div>
        <div className='flex-1'>
          <ItemTreatment />
        </div>
      </div>
    </section>
  )
}
