import React from "react";
import Container from "../../../Resources/Others/Container";
import Form from "../../../Resources/FormElements/Form";
import InputLabel from "../../../Resources/FormElements/InputLabel";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/doctors/index.json";
import Button from "../../../Resources/FormElements/Button";

export default function CreateDoctorComponent() {
	const language = useSelector((state) => state.i18nReducer.language);

	const handleSubmit = (e) => {
		e.preventDefault();
        alert('enviado!')
	};

	return (
		<Container>
            <p>{i18n[language].pageTitle.text}</p>

			<div className="flex gap-0 w-[inherit]">
				<Form handleSubmit={(e) => handleSubmit(e)}>
					<InputLabel
						type="text"
						id="phone"
						placeholder={i18n[language].telephone.placeholder}
						title={i18n[language].telephone.title}
						isRequired={true}
						autoFocus={true}
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
						type="text"
						id={"license"}
						placeholder={i18n[language].license.placeholder}
						title={i18n[language].license.title}
						isRequired={true}
						maxLength="10"
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
