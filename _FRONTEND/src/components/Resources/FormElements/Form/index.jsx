import React from 'react'

export default function Form({ handleSubmit, children, id="" }) {

    return (
        <form
            id={id==="" ? String('Form' + Math.random()) : id}
            className="flex flex-col gap-[inherit] justify-items-start w-[inherit]"
            onSubmit={(e)=>handleSubmit(e)}
        >
            {children}
        </form>
    )
}
