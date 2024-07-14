import React from "react";

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
		<div className="text-center flex flex-col gap-3 justify-center items-center">
			{hasLabel && (
				<label
					htmlFor={id}
					className={`text-start w-96 ${displayLabel}`}
				>
					{title}:
				</label>
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
					<option value={e} key={`${e}${i}`}>
						{e}
					</option>
				))}
			</select>
		</div>
	);
}