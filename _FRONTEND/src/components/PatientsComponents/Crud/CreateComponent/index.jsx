import React from "react";
import Container from "../../../Resources/Others/Container";
import Form from "../../../Resources/FormElements/Form";
import InputLabel from "../../../Resources/FormElements/InputLabel";
import Select from "../../../Resources/FormElements/Select";
import Button from "../../../Resources/FormElements/Button";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/patients/index.json";

export default function CreatePatientComponent() {
	const language = useSelector((state) => state.i18nReducer.language);

	const handleSubmit = (e) => {
		e.preventDefault();
        alert('enviado!')
	};

	return (
		<Container>
            <p
                aria-label={i18n[language].pageTitle.title}
                role="heading"
                lang={language}
            >
                {i18n[language].pageTitle.text}
            </p>

			<div className="flex gap-0 w-[inherit]">
				<Form handleSubmit={handleSubmit}>
					<InputLabel
						type="text"
						id="doc_identity"
						placeholder={i18n[language].dni.placeholder}
						title={i18n[language].dni.title}
						isRequired={true}
						autoFocus={true}
						maxLength="25"
                        pattern="[0-9]{8,25}"
					/>
					<InputLabel
						type="text"
						id="phone"
						placeholder={i18n[language].telephone.placeholder}
						title={i18n[language].telephone.title}
						isRequired={true}
						maxLength="25"
						pattern="(\+?[0-9]{1,24})"
					/>
					<InputLabel
						type="text"
						id="address"
						placeholder={i18n[language].address.placeholder}
						title={i18n[language].address.title}
						isRequired={true}
						maxLength="100"
						pattern="[A-Za-z0-9]{1,100}"
					/>
					<InputLabel
						type="date"
						id="birthdate"
						placeholder={i18n[language].birthDate.placeholder}
						title={i18n[language].birthDate.title}
						isRequired={true}
                        pattern="\d{2}-\d{2}-\d{4}"
					/>
					<Select
						id="marital_status"
						title={i18n[language].maritalStatus.title}
						arrayOptions={i18n[language].maritalStatus.list}
						onChangeHandler={() => {}}
						value=""
						displayLabel="block"
						isRequired={true}
						hasLabel={true}
					/>

                    <div className="mb-10" />
					<Button
						type="submit"
						text={i18n[language].buttonSubmit.title}
						title={i18n[language].buttonSubmit.title}
						textColor="#FFF"
					/>
				</Form>
			</div>
		</Container>
	);
}
