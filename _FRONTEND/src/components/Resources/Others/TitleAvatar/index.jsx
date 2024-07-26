import React from "react";

export default function TitleAvatar({title}) {
	return (
		<p className="text-center relative">
			{title}
			{/* <img
				id=""
				src=""
				title="Avatar"
				aria-label="Avatar"
				alt="Avatar"
				className="rounded-full bg-gray border absolute top-[50%] translate-y-[-50%] right-10"
				width={50}
				height={50}
				loading="lazy"
			/> */}
		</p>
	);
}
