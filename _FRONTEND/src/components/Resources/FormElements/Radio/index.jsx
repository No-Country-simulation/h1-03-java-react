import React from "react";

export default function Radio({ legend, arrayItems }) {
	return (
		<fieldset className="text-center">
			<legend className="text-center mb-2">{legend}:</legend>
			<div className="grid grid-flow-col gap-5 justify-center items-center">
				{arrayItems.map((e, i) => (
					<div
						className="grid grid-flow-col gap-2 justify-center items-center"
						key={`${e.id}${i}`}
					>
						<input
							type="radio"
							id={e.id}
							name={legend.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}
							value={e.title}
							aria-label={e.title}
                            required
						/>
						<label htmlFor={e.id}>{e.title}</label>
					</div>
				))}
			</div>
		</fieldset>
	);
}
