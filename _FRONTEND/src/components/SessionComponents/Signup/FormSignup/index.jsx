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
import { postFetch, putFetch } from "../../../../services";
import endpoints from "../../../../helpers/endpoints.js";
import roleList from "../../../../helpers/roleList";

const handlePassword = (e, setPassword) => {
	setPassword(e)
};
const handleRepeatPassword = (e, setRepeatPassword) => {
	setRepeatPassword(e)
};

const getFormEntries = (e, userDataState) => {
	const formData = new FormData(e.target);
	const entries = Object.fromEntries(formData.entries());
	
	if (userDataState) entries.id = userDataState.user.id
	delete entries.repeatpassword;
	
	//console.log(entries)
	return entries
}

export default function FormSignup( { 
	roleSelection, 
	userData="", 
	showAlreadyHaveAccount=false, 
	showFormTitle=false, 
} ) {
	const navigate = useNavigate();
	const language = useSelector((state) => state.i18nReducer.language);
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [passwordsMatch, setPasswordMatch] = useState(true);
	const [entriesData, setEntriesData] = useState(null);
	const [userDataState, setUserDataState] = useState(null);
	const getSpecificRole = (roleName) => roleList.filter((e)=>e.roleName===roleName)[0]
	const token = sessionStorage.getItem("token");

	useEffect(() => {
		if (password === repeatPassword) {
			setPasswordMatch(true);
		} else {
			setPasswordMatch(false);
		}

	}, [password, repeatPassword]);

	const urlSignup = endpoints.signup
	const {data, error: errorSignupPost,refetch: refetchSignupPost } = useQuery({
		queryKey: ["key-signup-post"],
		queryFn: ()=> postFetch(urlSignup, entriesData),
		enabled: false,
	})

	const { error: errorSignupPut, refetch: refetchSignupPut } = useQuery({
		queryKey: ["key-signup-put"],
		queryFn: ()=> putFetch(urlSignup, entriesData, token),
		enabled: false,
	})


	const handleSignupSubmit = (e) => {
		e.preventDefault();
		
		const entries = getFormEntries(e, userDataState)
		entries.roles = [{id: getSpecificRole(roleSelection).id}]

		setEntriesData(entries)		
	};

	useEffect(()=>{
		
		if(entriesData){
			if(userData === ""){
				refetchSignupPost()
				.then((e)=>{
					alert(errorSignupPost ? errorSignupPost : "Creado!");
					navigate('/');
				})	
			}else {
				refetchSignupPut()
					.then((e)=>{
						alert(errorSignupPut ? errorSignupPut : "Actualizado!");
					})	
			}
		}

	},[entriesData])

	useEffect(()=>{
		if(userDataState){
			const form = document.querySelector("#signupForm")
			const formData = new FormData(form)
			formData.set('name', userDataState.user.name)
			formData.set('lastname', userDataState.user.lastname)
			formData.set('email', userDataState.user.email)
			//console.log(Object.fromEntries(formData.entries()))

			for (let [name, value] of formData.entries()) {
				const input = form.elements.namedItem(name);
				if (input) {
				  input.value = value;
				}
			}
			  
			form.dispatchEvent(new Event('input', { bubbles: true }));
		}
	},[userDataState])

	if(userData && !userDataState) {
		setUserDataState(userData)
	}

	return (
		<>
			{password !== undefined && repeatPassword !== undefined && (
				<Container>
					{showFormTitle &&
						<p className="text-start md:text-center">
							{i18n[language].pageTitle}
						</p>
					}
					<Form handleSubmit={(e) => handleSignupSubmit(e)} id={'signupForm'} >
						<Input
							id={"name"}
							type={"text"}
							placeholder={i18n[language].firstNamePlaceholder}
							title={i18n[language].firstNameTitle}
							isRequired={true}
							autoFocus={true}
							/* value={userData ? userData.user.name : ""}
							onChangeHandler={userData ? handleState : null} */
							maxLength="50"
							pattern="[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+"
						/>

						<Input
							id={"lastname"}
							type={"text"}
							placeholder={i18n[language].lastNamePlaceholder}
							title={i18n[language].lastNameTitle}
							isRequired={true}
							/* value={userData ? userData.lastname : ""}
							onChangeHandler={userData ? handleState : null} */
							maxLength="50"
							pattern="[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+"
						/>

						<Input
							id={"email"}
							type={"email"}
							placeholder={i18n[language].emailPlaceholder}
							title={i18n[language].emailTitle}
							isRequired={true}
							/* value={userData ? userData.email : ""}
							onChangeHandler={userData ? handleState : null} */
							maxLength="50"
							pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
						/>
						
						{userData==="" &&
						<>
							<input
								className="p-3 sm:w-[inherit] rounded-full mb-0 w-[inherit]"
								id={"password"}
								name={"password"}
								type={"password"}
								placeholder={i18n[language].passwordPlaceholder}
								title={i18n[language].passwordTitle}
								aria-label="Input field"
								required={true}
								minLength="8"
								maxLength="16"
								/* pattern={`^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[-+|!¡@#$%^&.{}*"'/()=?!¿'~;,:<>°])[A-Za-z\d-+|!¡@#$%^&.{}*"'/()=?!¿'´~;,:<>°]+$`} */
								/* pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$" */
								pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).*$"
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
								minLength="8"
								maxLength="16"
								pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).*$"
								value={repeatPassword}
								onChange={(e)=>handleRepeatPassword(e.target.value, setRepeatPassword)}
							/>
						</>
						}

						<Button
							type="submit"
							text={i18n[language].buttonSignupText}
							title={i18n[language].buttonSignupTitle}
							onClickHandler={() => {}}
							textColor="#FFF"
							isDisabled={passwordsMatch ? false : true}
						/>

						{showAlreadyHaveAccount && 
							(<p className="text-center">
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
							</p>)
						}

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
