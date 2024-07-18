import React from "react";
import Container from "../../Resources/Others/Container";
import Input from "../../Resources/FormElements/InputLabel/Input";
import Button from "../../Resources/FormElements/Button";
import Select from "../../Resources/FormElements/Select";
import FormSignup from "./FormSignup";
import LeftImage from "./LeftImage";
import RolePopup from "./RolePopup";

export default function Signup() {

	return (
		<div className="w-[inherit] xl:w-full flex justify-evenly m-auto md:pe-5 lg:pe-auto gap-[inherit]">
			<RolePopup />
			<LeftImage />
			<FormSignup />
		</div>
	);
}
