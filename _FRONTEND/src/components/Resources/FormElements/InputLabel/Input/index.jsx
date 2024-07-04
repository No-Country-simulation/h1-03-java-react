import React, { useEffect, useState } from 'react'

export default function Input({ type, id, placeholder, title }) {
	const [pattern, setPattern] = useState('')

	useEffect(() => {
		if(type==='text') setPattern("[a-zA-Z0-9]+")
		if(type==='email') setPattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
		
	}, [pattern])

    return (
		<input
			className="p-3 w-96"
			type={type}
			id={id}
			name={id}
			placeholder={placeholder}
			required
			minLength="3"
			maxLength="50"
			pattern= {pattern}
			title={title}
			aria-label="Input field"
			aria-describedby={title}
			autoComplete="off"
			autoCorrect="off"
			autoCapitalize="off"
			spellCheck="false"
			/* autofocus */
		/>
    )
}
