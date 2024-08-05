import React from 'react'
import ItemAppointment from "./ItemAppointment"

export default function index() {
  return (
    <div className='flex flex-col gap-4 py-4'>
      <p className='text-center text-2xl mb-4'>Resultados de tu búsqueda - Turnos Medicos</p>
      <ItemAppointment date="Jueves 27 de Julio" name="José Esquivel" profession="Cardiológo" timeSlot="morning" />
      <ItemAppointment date="Jueves 27 de Julio" name="José Esquivel" profession="Cardiológo" timeSlot="afternoom" />
      <ItemAppointment date="Jueves 27 de Julio" name="José Esquivel" profession="Cardiológo" timeSlot="morning" />
      <ItemAppointment date="Jueves 27 de Julio" name="José Esquivel" profession="Cardiológo" timeSlot="morning" />
    </div>
  )
}
