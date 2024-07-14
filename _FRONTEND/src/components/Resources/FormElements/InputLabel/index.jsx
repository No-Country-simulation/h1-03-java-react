import React from "react";
import Label from "./Label";
import Input from "./Input";

export default function InputLabel({
	type,
	id,
	placeholder,
	title,
	isRequired = false,
	autoFocus = false,
	value = "",
	onChangeHandler = () => {},
	isChecked = null,
	minLength,
	maxLength,
	pattern = "",
}) {
	return (
		<div className="flex flex-col justify-start items-start gap-3 mb-3 w-[inherit]">
			<Label id={id} title={title} />
			<Input
				className="bg-white"
				type={type}
				id={id}
				placeholder={placeholder}
				title={title}
				isRequired={isRequired}
				autoFocus={autoFocus}
				value={value}
				onChangeHandler={onChangeHandler}
				isChecked={isChecked}
				minLength = {minLength}
				maxLength = {maxLength}
				pattern = {pattern}
			/>
		</div>
	);
}
