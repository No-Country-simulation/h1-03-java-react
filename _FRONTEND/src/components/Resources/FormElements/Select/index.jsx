import React from "react";
import Label from "../InputLabel/Label";

export default function Select({
	id,
	title,
	arrayOptions,
	onChangeHandler = () => {},
	value = "",
	displayLabel = "block",
	isRequired = false,
	hasLabel = true,
}) {
	const getNumericValueFromSelectOption = (e) => {
		return Number(e.target.value.split(" ")[0]);
	};

	return (
		<div className="text-center flex flex-col gap-3 justify-center items-center mb-3 flex-1">
			{hasLabel && (
				<Label id={id} title={title} />
			)}
			<select
				className="p-3 w-[-webkit-fill-available] m-0 rounded-full border-[rgb(174, 174, 174)]"
				id={id}
				name={id}
				required={isRequired}
				title={title}
				aria-label={title}
				defaultValue={value}
				onChange={(e) =>
					onChangeHandler(getNumericValueFromSelectOption(e))
				}
			>
				<option value="" disabled>
					{arrayOptions[0]}
				</option>
				{arrayOptions.slice(1).map((e, i) => (
					<option value={i} key={`${e}${i}`}>
						{e}
					</option>
				))}
			</select>
		</div>
	);
}
