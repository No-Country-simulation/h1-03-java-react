import React from 'react'

export default function Label({ id, title }) {
    

    return (
        <label htmlFor={id}>{title}</label>
    )
}
