import React, { useEffect, useState } from "react";
import Form from "../../../Resources/FormElements/Form";
import Input from "../../../Resources/FormElements/InputLabel/Input";
//import Select from "../../../Resources/FormElements/Select";
import Button from "../../../Resources/FormElements/Button";
import getPathRoutes from "../../../../helpers/pathroutes";
import i18n from "../../../../i18n/session/signup/index.json";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "../../../Resources/Others/Container";
import { useQuery } from "@tanstack/react-query";
import { postFetch } from "../../../../services";
import endpoints from "../../../../helpers/endpoints.js";
import roleList from "../../../../helpers/roleList";

const handlePassword = (e, setPassword) => {
	setPassword(e)
};
const handleRepeatPassword = (e, setRepeatPassword) => {
	setRepeatPassword(e)
};

const getFormEntries = (e) => {
	const formData = new FormData(e.target);
	const entries = Object.fromEntries(formData.entries());
	delete entries.repeatpassword;
	return entries
}

export default function FormSignup( { roleSelection } ) {
	const navigate = useNavigate();
	const language = useSelector((state) => state.i18nReducer.language);
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [passwordsMatch, setPasswordMatch] = useState(true);
	const [entriesData, setEntriesData] = useState(null);
	const getSpecificRole = (roleName) => roleList.filter((e)=>e.roleName===roleName)[0]

	useEffect(() => {
		if (password === repeatPassword) {
			setPasswordMatch(true);
		} else {
			setPasswordMatch(false);
		}

	}, [password, repeatPassword]);

	const url = endpoints.signup
	const { data, error, isLoading, isFetching, isSuccess, refetch } = useQuery({
		queryKey: ["key-signup"],
		queryFn: ()=> postFetch(url, entriesData),
		enabled: false,
	})

	const handleSignupSubmit = (e) => {
		e.preventDefault();
		
		const entries = getFormEntries(e)
		entries.roles = [{id: getSpecificRole(roleSelection).id}]
		console.log(entries)
		setEntriesData(entries)		
	};

	useEffect(()=>{
		if(entriesData){
			refetch()
				.then((e)=>{
					navigate(getPathRoutes(language, "home", true))
					alert("Registrado!");		
				})
				.catch((err)=>console.log(err))
		}
	},[entriesData])

	return (
		<>
			{password !== undefined && repeatPassword !== undefined && (
				<Container>
					<p className="text-start md:text-center">
						{i18n[language].pageTitle}
					</p>
					<Form handleSubmit={(e) => handleSignupSubmit(e)}>
						<Input
							id={"name"}
							type={"text"}
							placeholder={i18n[language].firstNamePlaceholder}
							title={i18n[language].firstNameTitle}
							isRequired={true}
							autoFocus={true}
							value=""
							onChangeHandler={() => {}}
							maxLength="50"
							pattern="[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+"
						/>

						<Input
							id={"lastname"}
							type={"text"}
							placeholder={i18n[language].lastNamePlaceholder}
							title={i18n[language].lastNameTitle}
							isRequired={true}
							value=""
							onChangeHandler={() => {}}
							maxLength="50"
							pattern="[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+"
						/>

						<Input
							id={"email"}
							type={"email"}
							placeholder={i18n[language].emailPlaceholder}
							title={i18n[language].emailTitle}
							isRequired={true}
							value=""
							onChangeHandler={() => {}}
							maxLength="50"
							pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
						/>

						<input
							className="p-3 sm:w-[inherit] rounded-full mb-0 w-[inherit]"
							id={"password"}
							name={"password"}
							type={"password"}
							placeholder={i18n[language].passwordPlaceholder}
							title={i18n[language].passwordTitle}
							aria-label="Input field"
							required={true}
							maxLength="16"
							/* pattern={`^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[-+|!¡@#$%^&.{}*"'/()=?!¿'~;,:<>°])[A-Za-z\d-+|!¡@#$%^&.{}*"'/()=?!¿'´~;,:<>°]+$`} */
							/* pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$" */
							pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{8,16}$"
							value={password}
							onChange={(e)=>handlePassword(e.target.value, setPassword)}
						/>

						<input
							className="p-3 sm:w-[inherit] rounded-full mb-0 w-[inherit]"
							id={"repeatpassword"}
							type={"password"}
							placeholder={i18n[language].repeatPasswordPlaceholder}
							title={i18n[language].repeatPasswordTitle}
							aria-label="Input field"
							required={true}
							maxLength="16"
							pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{8,16}$"
							value={repeatPassword}
							onChange={(e)=>handleRepeatPassword(e.target.value, setRepeatPassword)}
						/>

						{/* <Select
							id={"role"}
							title={i18n[language].roleTitle}
							arrayOptions={i18n[language].roleList}
							onChangeHandler={() => {}}
							value=""
							displayLabel="block"
							isRequired={true}
							hasLabel={false}
						/> */}

						<Button
							type="submit"
							text={i18n[language].buttonSignupText}
							title={i18n[language].buttonSignupTitle}
							onClickHandler={() => {}}
							textColor="#FFF"
							isDisabled={passwordsMatch ? false : true}
						/>

						<p className="text-center">
							{i18n[language].alreadyHaveAccount}&nbsp;
							<span
								className="underline whitespace-nowrap font-bold"
								role="button"
								title={i18n[language].signUpLinkTitle}
								aria-label={i18n[language].signUpLinkTitle}
								onClick={() =>
									navigate(getPathRoutes(language, "signin",true))
								}
							>
								{i18n[language].signUpLinkText}
							</span>
						</p>

						<p className="flex justify-center items-center text-red-500 font-bold text-center min-h-[2rem]">
							{(password!=='' && repeatPassword!=='' && !passwordsMatch) 
								? i18n[language].passwordMatchTitle
								: ""
							}
						</p>
					</Form>
				</Container>
			)}
		</>
	);
}

//email pattern: pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
