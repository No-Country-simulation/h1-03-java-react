import React from "react";
import Label from "./Label";
import Input from "./Input";

export default function InputLabel({ type, id, placeholder, title }) {
	return (
		<div className="flex justify-center items-center gap-10">
			<Label id={id} title={title} />
			<Input
                className="bg-white"
				type={type}
				id={id}
				placeholder={placeholder}
				title={title}
			/>
		</div>
	);
}
