import React from "react";

export default function Button({
	type= 'button',
	text = null,
	textColor = '#000',
	bgColor = 'auto',
	classNames = '',
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
						className={`rounded-full p-3 w-full text-[${textColor}] bg-[${bgColor}] select-none ${classNames}`}
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
