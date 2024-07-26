import React from "react";
import Icons from "../../../SessionComponents/Signup/RolePopup/Icons";

export default function Radio({ legend, name, arrayTitles, arrayItems, isItVertical = false, setClosePopup, setIsButtonDisabled }) {

	const handleClickRadio = () => {
		//setClosePopup(true)
		setIsButtonDisabled(false)
	}

	return (
		<fieldset className="w-[-webkit-fill-available]">
			<legend className="text-center mb-2">{legend}</legend>
			<div
				className={`grid ${isItVertical ? "grid-flow-row" : "grid-flow-col"} gap-10 justify-end items-end w-[inherit]`}
			>
				{arrayItems.map((e, i) => (
					<div className="relative flex justify-center items-center left-0 -translate-x-0" key={`${e.id}${i}`}>
						
						<div className="grid grid-flow-col bg-[#93BFAF] rounded-lg left-2 relative">							
							<label 
								className="relative m-auto p-3 text-center w-[150px] sm:w-[290px] md:w-[350px] z-2" 
								htmlFor={arrayTitles[i].id}
							>								
								{arrayTitles[i].title}
							</label>
							
							<input
								className="w-[1.4rem] sm:w-[1.6rem] md:w-[1.8rem] me-2 cursor-pointer"
								style={{filter: 'invert(1)', accentColor: '#FFF'}}
								type="radio"
								id={arrayTitles[i].id}
								name={name/* legend
									.toLowerCase()
									.normalize("NFD")
									.replace(/[\u0300-\u036f]/g, "")*/} 
								value={e}
								aria-label={arrayTitles[i].title}
								required
								onClick={() => handleClickRadio()}
							/>
						</div>
						<Icons i={i} />
					</div>
				))}
			</div>
		</fieldset>
	);
}
