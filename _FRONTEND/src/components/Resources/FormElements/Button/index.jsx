import React from "react";

export default function Button({
	type= 'button',
	text = null,
	title,
	isDisabled = false,
	onClickHandler = ()=>{},
}) {
	return (
		<>
			{type && (
				<div className="text-center">
					<button
						type={type}
						className="rounded-full w-96"
						title={title}
						aria-label={title}
						disabled={isDisabled}
						onClick={() => onClickHandler()}
					>
						{text}
					</button>
				</div>
			)}
		</>
	);
}
