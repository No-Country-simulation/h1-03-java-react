import React from "react";
import Form from "../../../Resources/FormElements/Form";
import Input from "../../../Resources/FormElements/InputLabel/Input";
//import Select from "../../../Resources/FormElements/Select";
import Button from "../../../Resources/FormElements/Button";
import getPathRoutes from "../../../../helpers/pathroutes";
import i18n from "../../../../i18n/session/signup/index.json";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "../../../Resources/Others/Container";

export default function FormSignup() {
	const navigate = useNavigate();
	const language = useSelector((state) => state.i18nReducer.language);

	const handleSubmit = (e) => {
		e.preventDefault();
		//alert("enviado!");
		//e.target.reset();
	};

	return (
		<Container>
			<p className="text-start md:text-center">
				{i18n[language].pageTitle}
			</p>
			<Form handleSubmit={(e) => handleSubmit(e)}>
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

				<Input
					id={"password"}
					type={"password"}
					placeholder={i18n[language].passwordPlaceholder}
					title={i18n[language].passwordTitle}
					isRequired={true}
					value=""
					onChangeHandler={() => {}}
					maxLength="16"
					pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$"
				/>

				<Input
					id={"repeatpassword"}
					type={"password"}
					placeholder={i18n[language].repeatPasswordPlaceholder}
					title={i18n[language].repeatPasswordTitle}
					isRequired={true}
					value=""
					onChangeHandler={() => {}}
					maxLength="16"
					pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$"
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
				/>

				<p className="text-center">
					{i18n[language].alreadyHaveAccount}&nbsp;
					<span
						className="underline whitespace-nowrap font-bold"
						role="button"
						title={i18n[language].signUpLinkTitle}
						aria-label={i18n[language].signUpLinkTitle}
						onClick={() =>
							navigate(getPathRoutes(language, "signin"))
						}
					>
						{i18n[language].signUpLinkText}
					</span>
				</p>
			</Form>
		</Container>
	);
}
