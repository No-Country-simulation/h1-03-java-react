import React from "react";

export default function Input({
	type,
	id,
	placeholder,
	title,
	isRequired = false,
	autoFocus = false,
	value = "",
	onChangeHandler = {},
	isChecked = null,
	minLength = "3",
	maxLength = "50",
	pattern = "",
}) {
	/*
	const [pattern, setPattern] = useState("");

	useEffect(() => {
		if (type === "text") setPattern("[a-zA-Z0-9]+");
		if (type === "email")
			setPattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$");
		if (type === "password")
			setPattern(
				"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$"
			);
		if (type === "number") setPattern("[0-9]+");
	}, [pattern]); */

	return (
		<>
			{id && (
				<input
					className="p-3 sm:w-[inherit] rounded-full mb-0 w-[inherit]"
					type={type}
					id={id}
					name={id}
					placeholder={placeholder}
					required={isRequired}
					minLength={minLength}
					maxLength={maxLength}
					/* min={type === "date" ? "1900/01/01" : ""}
				max={type === "date" ? "2024/05/01" : ""} */
					pattern={null}
					title={title}
					aria-label="Input field"
					aria-describedby={title}
					autoComplete="off"
					autoCorrect="off"
					autoCapitalize="off"
					spellCheck="false"
					autoFocus={autoFocus}
					onChange={(e) => onChangeHandler(e.target.value)}
					checked={isChecked}
					{...(value === "" ? {} : (value = { value }))}
				/>
			)}
		</>
	);
}
