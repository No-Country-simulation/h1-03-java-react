import React from "react";

export default function Button({
	type= 'button',
	text = null,
	textColor = '#000',
	bgColor = 'auto',
	title,
	isDisabled = false,
	onClickHandler = ()=>{},
}) {
	
	return (
		<>
			{text && (
				<div className="text-center">
					<button
						type={type}
						className={`rounded-full w-full text-[${textColor}] bg-[${bgColor}]`}
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
