import React from 'react'
import Select from '../Resources/FormElements/Select'
import Button from '../Resources/FormElements/Button'
import TitleAvatar from '../Resources/Others/TitleAvatar'
import FilterAppointment from './FilterAppointment'
import Results from './Results'

export default function ApointmentsMainComponent() {

    return (
        <section className="grid justify-center gap-5">
            <TitleAvatar title="AGENDAR CITA" />
            <FilterAppointment />
            <Results />
            <Results />
            <Results />
        </section>
    )
}
