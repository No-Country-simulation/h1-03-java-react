import React from 'react'

export default function Form({ handleSubmit, children }) {

    return (
        <form
            className="flex flex-col gap-[inherit] justify-items-start w-[inherit]"
            onSubmit={(e)=>handleSubmit(e)}
        >
            {children}
        </form>
    )
}
