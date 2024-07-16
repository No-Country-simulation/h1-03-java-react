import React from "react";
import patientSignup from "../../../../../assets/svg/icons/patientSignup.svg";
import doctorSignup from "../../../../../assets/svg/icons/doctorSignup.svg";

export default function Icons({i}) {
	return (
		<div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-4 md:-translate-x-6 bg-white p-1 rounded-full z-9">
			{i === 0 ? (
				<img className="w-12" src={patientSignup} alt="" />
			) : (
				<img className="w-12" src={doctorSignup} alt="" />
			)}
		</div>
	);
}
