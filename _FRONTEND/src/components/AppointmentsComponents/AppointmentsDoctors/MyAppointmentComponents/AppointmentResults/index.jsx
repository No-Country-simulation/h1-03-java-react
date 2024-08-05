import React from 'react'
import ItemAppointment from "./ItemAppointment"

export default function index() {
  return (
    <div className='flex flex-col gap-4 py-4'>
      <p className='text-center text-2xl mb-4'>Resultados de tu búsqueda - Mis Turnos</p>
      <ItemAppointment date="Jueves 27 de Julio" name="Juan Carlos Aquino Zapana" state="Pendiente" timeSlot="morning" />
      <ItemAppointment date="Jueves 27 de Julio" name="Juan Carlos Aquino Zapana" state="Atendido" timeSlot="morning" />
      <ItemAppointment date="Jueves 27 de Julio" name="Juan Carlos Aquino Zapana" state="Ausente" timeSlot="afternoom" />
      <ItemAppointment date="Jueves 27 de Julio" name="Juan Carlos Aquino Zapana" state="Atendido" timeSlot="morning" />
      <ItemAppointment date="Jueves 27 de Julio" name="Juan Carlos Aquino Zapana" state="Atendido" timeSlot="morning" />
    </div>
  )
}
