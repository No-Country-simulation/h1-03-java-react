import React from "react";

export default function Button({
	type= 'button',
	text = null,
	textColor = '#000',
	bgColor = '#646cff',
	classNames = '',
	title,
	isDisabled = false,
	onClickHandler = ()=>{},
	setClosePopup,
}) {
	
	return (
		<>
			{text && (
				<div className="text-center">
					<button
						type={type}
						className={`rounded-full p-3 w-full text-[${textColor}] ${!isDisabled ? 'bg-[' +bgColor + ']' : 'bg-gray-500' } select-none ${classNames}`}
						title={title}
						aria-label={title}
						disabled={isDisabled}
						onClick={() => onClickHandler(true)}
					>
						{text}
					</button>
				</div>
			)}
		</>
	);
}
