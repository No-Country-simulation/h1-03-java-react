import React, { useEffect } from "react";
import Container from "../../../Resources/Others/Container";
import Form from "../../../Resources/FormElements/Form";
import InputLabel from "../../../Resources/FormElements/InputLabel";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/doctors/index.json";
import Button from "../../../Resources/FormElements/Button";
import { useQuery } from "@tanstack/react-query";
import endpoints from "../../../../helpers/endpoints.js";
import { getFetch } from "../../../../services";

export default function EditMyInfoDoctors() {
	const language = useSelector((state) => state.i18nReducer.language);

	const url = endpoints.getAllDoctors
	const token = sessionStorage.getItem('token')
	const { data, error, isLoading, isFetching, isSuccess, refetch } = useQuery({
		queryKey: ["key-getDoctorsList"],
		queryFn: ()=> getFetch(url, token),
		enabled: false,
	}) 

	useEffect(()=>{
		refetch()
	},[])
console.log(data)
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
