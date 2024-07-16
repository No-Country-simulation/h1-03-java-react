import React from "react";
import Label from "./Label";
import Input from "./Input";

export default function InputLabel({ type, id, placeholder, title, required=true, value=null, onChange=null }) {
	return (
		<div 
			className="flex flex-col justify-center items-center gap-3 mb-3"
		>
			<Label id={id} title={title} />
			<Input
                className="bg-white"
				type={type}
				id={id}
				placeholder={placeholder}
				title={title}
				required={required}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}
