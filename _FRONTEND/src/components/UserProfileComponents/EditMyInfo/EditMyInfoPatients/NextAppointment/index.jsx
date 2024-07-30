import React from 'react'

export default function NextAppointment() {    

    return (
        <div className="grid grid-cols-2 w-screen border-b">
                <div className="flex w-fit mb-5">
                    <span className="p-3 m-auto">🕒</span>
                    <div>
                        <p>Dr. Saveiro</p>
                        <p className="text-gray-500">Cardiólogo</p>
                    </div>
                </div>
                <div className="flex w-fit ms-auto">
                    <div>
                        <p>Oct 15, 2021,</p>
                        <p>10:00 AM</p>
                    </div>
                    <span className="p-3 m-auto">🔔</span>
                </div>
            </div>
    )
}
