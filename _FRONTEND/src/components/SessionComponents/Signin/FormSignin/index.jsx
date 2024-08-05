import React, { useState } from "react";
import Input from "../../../Resources/FormElements/InputLabel/Input";
import Form from "../../../Resources/FormElements/Form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import i18n from "../../../../i18n/session/signin/index.json";
import Button from "../../../Resources/FormElements/Button";

export default function FormSignin({ handleSubmit }) {
    const language = useSelector((state) => state.i18nReducer.language);
    const navigate = useNavigate();

	return (
		<Form handleSubmit={(e) => handleSubmit(e)}>
			<Input
				id={"email"}
				type={"email"}
				placeholder={i18n[language].emailPlaceholder}
				title={i18n[language].emailTitle}
				isRequired={true}
				autoFocus={true}
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
				minLength="8"
				maxLength="16"
				pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$"
			/>

			<p
				className="text-end sm:text-center"
				role="button"
				title={i18n[language].forgotPasswordTitle}
				aria-label={i18n[language].forgotPasswordTitle}
				onClick={() => navigate()}
			>
				{i18n[language].forgotPasswordText}
			</p>

			<Button
				type="submit"
				text={i18n[language].buttonSigninText}
				title={i18n[language].buttonSigninTitle}
				textColor="#FFF"
			/>
		</Form>
	);
}
