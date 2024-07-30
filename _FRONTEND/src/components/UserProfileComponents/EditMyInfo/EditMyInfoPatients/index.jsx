import React, { useEffect } from "react";
import Container from "../../../Resources/Others/Container";
import Form from "../../../Resources/FormElements/Form";
import Select from "../../../Resources/FormElements/Select";
import Button from "../../../Resources/FormElements/Button";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/patients/index.json";
import { useQuery } from "@tanstack/react-query";
import { getFetch } from "../../../../services";
import endpoints from "../../../../helpers/endpoints.js";
import FormSignup from "../../../SessionComponents/Signup/FormSignup";
import Input from "../../../Resources/FormElements/InputLabel/Input";

export default function EditMyInfoPatients() {
	const language = useSelector((state) => state.i18nReducer.language);

	const url = endpoints.getUserAndPatientInfo;
	const token = sessionStorage.getItem("token");
	const { data, error, isLoading, isFetching, isSuccess, refetch } = useQuery({
			queryKey: ["key-getUserAndPatientInfo"],
			queryFn: () => getFetch(url, token),
			enabled: false,
	});

	useEffect(() => {
		refetch();
	}, []);

	const handleSubmitPatientForm = (e) => {
		e.preventDefault();
		alert("enviado!");
	};

	return (
		<>
			{data && (
				<section className="min-h-screen flex flex-col text-center">
					<p>{i18n[language].pageTitle.text}</p>
					<section className="min-h-screen flex flex-col lg:flex-row justify-center items-start gap-8 p-10 mt-0">
						<Container>
							<FormSignup
								roleSelection={data.user.roles[0].roleName}
								userData={data}
							/>
						</Container>

						<Container>
							<Form handleSubmit={handleSubmitPatientForm}>
								<Input
									type="text"
									id="doc_identity"
									placeholder={i18n[language].dni.placeholder}
									title={i18n[language].dni.title}
									isRequired={true}
									maxLength="25"
									pattern="[0-9]{8,25}"
								/>
								<Input
									type="text"
									id="phone"
									placeholder={
										i18n[language].telephone.placeholder
									}
									title={i18n[language].telephone.title}
									isRequired={true}
									maxLength="25"
									pattern="(\+?[0-9]{1,24})"
								/>
								<Input
									type="text"
									id="address"
									placeholder={
										i18n[language].address.placeholder
									}
									title={i18n[language].address.title}
									isRequired={true}
									maxLength="100"
									pattern="[A-Za-z0-9]{1,100}"
								/>
								<Input
									type="date"
									id="birthdate"
									placeholder={
										i18n[language].birthDate.placeholder
									}
									title={i18n[language].birthDate.title}
									isRequired={true}
									pattern="\d{2}-\d{2}-\d{4}"
								/>
								<Select
									id="marital_status"
									title={i18n[language].maritalStatus.title}
									arrayOptions={
										i18n[language].maritalStatus.list
									}
									onChangeHandler={() => {}}
									value=""
									displayLabel="block"
									isRequired={true}
									hasLabel={false}
								/>
								<Select
									id="genre"
									title={i18n[language].genre.title}
									arrayOptions={i18n[language].genre.list}
									onChangeHandler={() => {}}
									value=""
									displayLabel="block"
									isRequired={true}
									hasLabel={false}
								/>

								<Button
									type="submit"
									text={i18n[language].buttonSubmit.text}
									title={i18n[language].buttonSubmit.title}
									textColor="#FFF"
								/>
							</Form>
						</Container>
					</section>
				</section>
			)}
		</>
	);
}
