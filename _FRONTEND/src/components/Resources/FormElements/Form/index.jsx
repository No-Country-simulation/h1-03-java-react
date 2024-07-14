import React from 'react'

export default function Form({ handleSubmit, children }) {

    return (
        <form
            className="flex flex-col gap-2 justify-items-start w-[inherit]"
            onSubmit={(e)=>handleSubmit(e)}
        >
            {children}
        </form>
    )
}
