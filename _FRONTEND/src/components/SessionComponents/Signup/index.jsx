import React from "react";
import Input from "../../Resources/FormElements/InputLabel/Input";
import Button from "../../Resources/FormElements/Button";
import { useSelector } from "react-redux";
import i18n from '../../../i18n/session/signup/index.json'
 
export default function Signup() {
	const language = useSelector((state)=>state.i18nReducer.language)


	return (
		<section className="grid sm:justify-center gap-5">
			<p>{i18n[language].pageTitle}</p>

			<Input
				id={"nameSignup"}
				type={"text"}
				placeholder={i18n[language].namePlaceholder}
				title={i18n[language].nameTitle}
				isRequired={true}
				autoFocus={true}
				value=""
				onChangeHandler={() => {}}
			/>

			<Input
				id={"emailSignup"}
				type={"email"}
				placeholder={i18n[language].emailPlaceholder}
				title={i18n[language].emailTitle}
				isRequired={true}
				value=""
				onChangeHandler={() => {}}
			/>

			<Input
				id={"passwordSignup"}
				type={"password"}
				placeholder={i18n[language].passwordPlaceholder}
				title={i18n[language].passwordTitle}
				isRequired={true}
				value=""
				onChangeHandler={() => {}}
			/>

            <Input
				id={"passwordRepeatSignup"}
				type={"password"}
				placeholder={i18n[language].repeatPasswordPlaceholder}
				title={i18n[language].repeatPasswordTitle}
				isRequired={true}
				value=""
				onChangeHandler={() => {}}
			/>

            <p className="text-center">&nbsp;</p>

			<Button
				text={i18n[language].buttonSignupText}
				title={i18n[language].buttonSignupTitle}
				onClickHandler={() => {}}
				textColor="#FFF"
			/>

			<p className="text-center">
				{i18n[language].alreadyHaveAccount}&nbsp;
				<span
					className="underline"
					role="button"
					title={i18n[language].signUpLinkTitle}
					aria-label={i18n[language].signUpLinkTitle}
					onClick={() => navigate()}
				>
					{i18n[language].signUpLinkText}
				</span>
			</p>
		</section>
	);
}
