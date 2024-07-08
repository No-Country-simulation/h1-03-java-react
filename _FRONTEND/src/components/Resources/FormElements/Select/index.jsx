import React from "react";

export default function Select({ id, title, arrayOptions }) {
    
	return (
		<div className="text-center flex flex-col gap-3 justify-center items-center">
			<label
				htmlFor={id}
				className="text-start w-96"
			>
				{title}:
			</label>
			<select
				className="p-3 w-96 m-0"
				id={id}
				name={id}
				required
				aria-label={title}
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
