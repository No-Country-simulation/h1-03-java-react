import React from 'react'

export default function Label({ id, title }) {
    
    return (
        <label 
            htmlFor={id}
            className="ms-0 me-auto w-auto"
        >
            {title}
        </label>
    )
}
