import React from "react";
import Container from "../../Resources/Others/Container";
import Input from "../../Resources/FormElements/InputLabel/Input";
import Button from "../../Resources/FormElements/Button";
import Select from "../../Resources/FormElements/Select";
import { useSelector } from "react-redux";
//import i18n from '../../../i18n/session/signup/index.json'

import FormSignup from "./FormSignup";
import LeftImage from "./LeftImage";
import RolePopup from "./RolePopup";
 
export default function Signup() {
	//const language = useSelector((state)=>state.i18nReducer.language)

	return (
		<div className="w-[inherit] xl:w-full flex justify-evenly m-auto gap-[inherit]">
			<RolePopup />
			<LeftImage />
			<FormSignup />
		</div>
	);
}
