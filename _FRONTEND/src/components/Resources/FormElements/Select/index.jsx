import React from "react";

export default function Select({ id, title, arrayOptions }) {
    
	return (
		<div className="text-center grid grid-flow-col gap-5 justify-center items-center">
			<label htmlFor={id}>{title}:</label>
			<select
				id={id}
				name={id}
				required
				aria-label={`Campo de selección de ${title}`}
                defaultValue=""
			>
				<option value="" disabled>
					{`Elija su ${title.toLowerCase()}`}
				</option>
				{arrayOptions.map((e, i) => (
					<option value={e} key={`${e}${i}`}>
						{e}
					</option>
				))}
			</select>
		</div>
	);
}
