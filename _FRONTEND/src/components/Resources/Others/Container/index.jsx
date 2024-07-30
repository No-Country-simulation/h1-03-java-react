import React from 'react'

export default function Container({ children }) {

    return (
        <section className="grid sm:justify-center gap-5 mx-auto w-[250px] sm:w-[350px] lg:w-[450px] xl:w-[33vw]">
            {children}
        </section>
    )
}
