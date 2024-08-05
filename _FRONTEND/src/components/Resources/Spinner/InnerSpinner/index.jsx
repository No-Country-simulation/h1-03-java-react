import React from "react";

export default function InnerSpinner() {
	return (
		<div className="grid place-items-center bg-transparent p-4 rounded-lg">
			<div className="animate-spin bg-transparent border-[0.5dvw] border-solid border-t-transparent border-b-transparent border-l-[#3b3a3a] border-r-[#3b3a3a] rounded-full w-[5dvh] h-[5dvh] z-0" />
		</div>
	);
}
