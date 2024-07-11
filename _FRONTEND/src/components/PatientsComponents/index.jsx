import React from 'react'
import NextAppointment from './NextAppointment'
import TitleAvatar from '../Resources/Others/TitleAvatar'
import Menu from './Menu'
import Treatment from './Treatment'

export default function UserProfileMainComponent() {    

    return (
        <section className="grid gap-20">
            <TitleAvatar title="HOLA USUARIO!" />
            <Menu />
            <NextAppointment />
            <Treatment />
        </section>
    )
}
