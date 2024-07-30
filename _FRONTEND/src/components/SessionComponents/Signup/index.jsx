import React, { useState } from "react";
import FormSignup from "./FormSignup";
import LeftImage from "./LeftImage";
import RolePopup from "./RolePopup";

export default function Signup() {
	const [roleSelection, setRoleSelection] = useState(null);

	return (
		<div className="w-[inherit] xl:w-full flex justify-evenly m-auto md:pe-5 lg:pe-auto gap-[inherit]">
			<RolePopup setRoleSelection={setRoleSelection} />
			<LeftImage />
			<FormSignup
				roleSelection={roleSelection}
				showAlreadyHaveAccount={true}
				showFormTitle={true}
			/>
		</div>
	);
}
