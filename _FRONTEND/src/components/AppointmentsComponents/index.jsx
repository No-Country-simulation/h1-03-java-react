import React from 'react'
import Select from '../Resources/FormElements/Select'
import Button from '../Resources/FormElements/Button'
import TitleAvatar from '../Resources/Others/TitleAvatar'
import FilterAppointment from './FilterAppointment'
import Results from './Results'

export default function ApointmentsMainComponent() {

    return (
        <section className="grid m-auto sm:justify-center sm:w-[400px] gap-5">
            <TitleAvatar title="AGENDAR CITA" />
            <FilterAppointment />
            <Results />
        </section>
    )
}
