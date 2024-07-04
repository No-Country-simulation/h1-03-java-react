import React from 'react'

export default function Form({ handleSubmit, children }) {

    return (
        <form
            className="grid gap-2"
            onSubmit={(e)=>handleSubmit(e)}
        >
            {children}
        </form>
    )
}
