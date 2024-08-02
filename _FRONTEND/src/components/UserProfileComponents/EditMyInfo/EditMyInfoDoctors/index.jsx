import React, { useEffect, memo, useState } from "react";
import Container from "../../../Resources/Others/Container";
import Form from "../../../Resources/FormElements/Form";
import FormSignup from "../../../SessionComponents/Signup/FormSignup";
import Input from "../../../Resources/FormElements/InputLabel/Input";
import Button from "../../../Resources/FormElements/Button";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/doctors/index.json";
import { useQuery } from "@tanstack/react-query";
import endpoints from "../../../../helpers/endpoints.js";
import { getFetch, postFetch, putFetch } from "../../../../services";
import Select from "../../../Resources/FormElements/Select";

const getFormEntries = (e, data) => {
	const formData = new FormData(e.target);
	const entries = Object.fromEntries(formData.entries());
	entries.id = data.doctor.id
	const specialty = entries.specialty
	entries.specialty = {id: Number(specialty)}
	
	return entries
}

const EditMyInfoDoctors = () => {
	const [entriesData, setEntriesData] = useState(null);
	const [isPostInsteadOfPut, setIsPostInsteadOfPut] = useState(null);
	const language = useSelector((state) => state.i18nReducer.language);

	const urlGetUserAndDoctorInfo = endpoints.getUserAndDoctorInfo;
	const urlDoctorInfo = endpoints.doctors
	const token = sessionStorage.getItem("token");
	const { data, error: errorGetUserAndDoctor, refetch: refetchGetUserAndDoctorInfo } = useQuery({
			queryKey: ["key-getUserAndDoctorInfo"],
			queryFn: () => getFetch(urlGetUserAndDoctorInfo, token),
			enabled: false,
	});
	if (errorGetUserAndDoctor) console.log(errorGetUserAndDoctor)

	const { data: data1, error: errorPostDoctor, refetch: refetchPostDoctorInfo } = useQuery({
			queryKey: ["key-postDoctorInfo"],
			queryFn: () => postFetch(urlDoctorInfo, entriesData, token),
			enabled: false,
	});
	if (errorPostDoctor) console.log(errorPostDoctor)

	const { data:data2, error: errorPutDoctor, refetch: refetchPutDoctorInfo } = useQuery({
		queryKey: ["key-putDoctorInfo"],
		queryFn: () => putFetch(urlDoctorInfo, entriesData, token),
		enabled: false,
	});
	if (errorPutDoctor) console.log(errorPutDoctor)

	//Initial form loading
	useEffect(() => {
		refetchGetUserAndDoctorInfo();

	}, []);

	useEffect(()=>{
		if (data) {
			const condition = !data.doctor.phone && !data.doctor.address && !data.doctor.license
			
			if (condition) {
				isPostInsteadOfPut===null && setIsPostInsteadOfPut(true)
			} else {
				isPostInsteadOfPut===null && setIsPostInsteadOfPut(false)

				const form = document.querySelector("#doctorForm")
				const formData = new FormData(form)
				formData.set('phone', data.doctor.phone)
				formData.set('address', data.doctor.address)
				formData.set('license', data.doctor.license)

				const specialtySelect = document.querySelector("#specialty")
				specialtySelect.value = data.doctor.specialty.id
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
	//End of initial form loading


	const handleSubmitDoctorForm = (e) => {
		e.preventDefault();
	
		const entries = getFormEntries(e, data)
	
		setEntriesData(entries)		
	};

	useEffect(()=>{
		if(entriesData){
			if(isPostInsteadOfPut){
				refetchPostDoctorInfo()
					.then((e)=>{
						alert(errorPostDoctor ? errorPostDoctor : "Creado!");
					})
			} else {
				refetchPutDoctorInfo()
					.then((e)=>{
						alert(errorPutDoctor ? errorPutDoctor : "Actualizado!");
					})
			}
			console.log(entriesData)
		}

	},[entriesData])
	
	return (
		<>
			{data && 
				(<section className="min-h-screen flex flex-col text-center">
					<p>{i18n[language].pageTitle.text}</p>
					<section className="min-h-screen flex flex-col lg:flex-row justify-center items-start gap-8 p-10 mt-0">
						<Container>
							<FormSignup
								roleSelection={data.user.roles[0].roleName}
								userData={data}
							/>
						</Container>

						<Container>
							<Form handleSubmit={(e) => handleSubmitDoctorForm(e)} id={'doctorForm'} >
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
									type="text"
									id={"license"}
									placeholder={
										i18n[language].license.placeholder
									}
									title={i18n[language].license.title}
									isRequired={true}
									maxLength="10"
								/>
								<Select
									id={"specialty"}
									title={i18n[language].specialty.title}
									arrayOptions={i18n[language].specialty.arrayOptions}
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
				</section>)
			}
		</>
	);
};

export default memo(EditMyInfoDoctors);
