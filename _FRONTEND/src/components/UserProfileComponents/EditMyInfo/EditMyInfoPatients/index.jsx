import React, { useEffect, useState } from "react";
import Container from "../../../Resources/Others/Container";
import Form from "../../../Resources/FormElements/Form";
import Select from "../../../Resources/FormElements/Select";
import Button from "../../../Resources/FormElements/Button";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/patients/index.json";
import { useQuery } from "@tanstack/react-query";
import { getFetch, postFetch, putFetch } from "../../../../services";
import endpoints from "../../../../helpers/endpoints.js";
import FormSignup from "../../../SessionComponents/Signup/FormSignup";
import Input from "../../../Resources/FormElements/InputLabel/Input";

const getFormEntries = (e, data) => {
	const formData = new FormData(e.target);
	const entries = Object.fromEntries(formData.entries());
	entries.maritalStatus = Number(entries.maritalStatus)
	entries.genre = Number(entries.genre)
	//entries.bloodType = Number(entries.bloodType)
	entries.idPatient = data.patient.idPatient
	
	return entries
}

export default function EditMyInfoPatients() {
	const [entriesData, setEntriesData] = useState(null);
	const [isPostInsteadOfPut, setIsPostInsteadOfPut] = useState(null);
	const language = useSelector((state) => state.i18nReducer.language);

	const urlGetUserAndPatientInfo = endpoints.getUserAndPatientInfo;
	const urlPatientInfo = endpoints.patients

	const token = sessionStorage.getItem("token");
	const { data, error: errorGetUserAndPatient, refetch: refetchGetUserAndPatientInfo } = useQuery({
		queryKey: ["key-getUserAndPatientInfo"],
		queryFn: () => getFetch(urlGetUserAndPatientInfo, token),
		enabled: false,
	});
	if (errorGetUserAndPatient) console.log(errorGetUserAndPatient)

	const { error: errorPostPatient, refetch: refetchPostPatientInfo } = useQuery({
		queryKey: ["key-postPatientInfo"],
		queryFn: () => postFetch(urlPatientInfo, entriesData, token),
		enabled: false,
	});
	if (errorPostPatient) console.log(errorPostPatient)

	const { error: errorPutPatient, refetch: refetchPutPatientInfo } = useQuery({
		queryKey: ["key-putPatientInfo"],
		queryFn: () => putFetch(urlPatientInfo, entriesData, token),
		enabled: false,
	});
	if (errorPutPatient) console.log(errorPutPatient)

	//Initial form loading
	useEffect(() => {
		refetchGetUserAndPatientInfo();		

	}, []);

	useEffect(()=>{
		if (data) {
			const d = data.patient
			const condition = !d.address && !d.birthdate && !d.docIdentity && !d.genre && !d.maritalStatus && !d.phone
			
			if (condition) {
				isPostInsteadOfPut===null && setIsPostInsteadOfPut(true)
			} else {
				isPostInsteadOfPut===null && setIsPostInsteadOfPut(false)

				const form = document.querySelector("#patientForm")
				const formData = new FormData(form)
				formData.set('address', d.address)
				formData.set('birthdate', d.birthdate)
				formData.set('docIdentity', d.docIdentity)
				formData.set('genre', d.genre)
				formData.set('maritalStatus', d.maritalStatus)
				formData.set('phone', d.phone)

				const maritalStatusSelect = document.querySelector("#maritalStatus")
				maritalStatusSelect.value = d.maritalStatus
				const genreSelect = document.querySelector("#genre")
				genreSelect.value = d.genre
				/* const bloodTypeSelect = document.querySelector("#bloodType")
				bloodTypeSelect.value = d.bloodType */

				//console.log(Object.fromEntries(formData.entries()))

				for (let [name, value] of formData.entries()) {
					const input = form.elements.namedItem(name);
					if (input) {
					input.value = value;
					}
				}
				
				form.dispatchEvent(new Event('input', { bubbles: true }));
			}
		}
	},[data])

	const handleSubmitPatientForm = (e) => {
		e.preventDefault();

		const entries = getFormEntries(e, data)

		setEntriesData(entries)
	};

	useEffect(()=>{
		if(entriesData){
			if(isPostInsteadOfPut){
				refetchPostPatientInfo()
					.then((e)=>{
						alert(errorPostPatient ? errorPostPatient : "Creado!");
					})
			} else {
				refetchPutPatientInfo()
					.then((e)=>{
						alert(errorPutPatient ? errorPutPatient : "Actualizado!");
					})
			}
			console.log(entriesData)
		}

	},[entriesData])

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
							<Form handleSubmit={handleSubmitPatientForm} id={'patientForm'} >
								<Input
									type="text"
									id="docIdentity"
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
									id="maritalStatus"
									title={i18n[language].maritalStatus.title}
									arrayOptions={
										i18n[language].maritalStatus.arrayOptions
									}
									displayLabel="block"
									isRequired={true}
									hasLabel={false}
								/>
								<Select
									id="genre"
									title={i18n[language].genre.title}
									arrayOptions={i18n[language].genre.arrayOptions}
									displayLabel="block"
									isRequired={true}
									hasLabel={false}
								/>
								{/* <Select
									id="bloodType"
									title={i18n[language].bloodType.title}
									arrayOptions={i18n[language].bloodType.arrayOptions}
									displayLabel="block"
									isRequired={true}
									hasLabel={false}
								/>

								<Input
									type="text"
									id="job"
									placeholder={
										i18n[language].job.placeholder
									}
									title={i18n[language].job.title}
									isRequired={true}
									pattern="[A-Za-z]{1,50}"
								/>
								<Input
									type="text"
									id="religion"
									placeholder={
										i18n[language].religion.placeholder
									}
									title={i18n[language].religion.title}
									isRequired={true}
									pattern="[A-Za-z]{1,50}"
								/> */}

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
