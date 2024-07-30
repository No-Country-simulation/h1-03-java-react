import React from "react";

export default function Treatment() {
	return (
		<textarea
			id="treatment1"
			name="treatment1"
			rows="4"
			cols="40"
			placeholder="Aca va el tratamiento, o sino, se reemplaza por un link a un documento PDF"
			maxLength="500"
			autoCapitalize="sentences"
			autoComplete="on"
			autoCorrect="on"
			aria-label="treatment"        
			disabled
		></textarea>
	);
}
