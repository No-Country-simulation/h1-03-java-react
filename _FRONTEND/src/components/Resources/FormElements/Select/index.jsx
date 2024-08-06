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
	isDisabled= false
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
				className="p-3 w-full sm:w-[-webkit-fill-available] m-0 rounded-full border-[rgb(174, 174, 174)]"
				id={id}
				name={id}
				required={isRequired}
				title={title}
				aria-label={title}
				defaultValue={value}
				onChange={(e) =>
					onChangeHandler(getNumericValueFromSelectOption(e))
				}
				disabled={isDisabled}
			>
				<option value="" disabled>
					{Object.values(arrayOptions[0])}
				</option>
				{arrayOptions.slice(1).map((e, i) => (
					<option value={Object.keys(e)} key={`${Object.values(e)}${i}`}>
						{Object.values(e)}
					</option>
				))}
			</select>
		</div>
	);
}
