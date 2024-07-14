import React from 'react'

export default function Label({ id, title }) {
    
    return (
        <label 
            htmlFor={id}
            className="text-start"
        >
            {title}
        </label>
    )
}
