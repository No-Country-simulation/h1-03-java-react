import React, { useEffect, useState } from "react";
import Container from "../../Resources/Others/Container";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../../../redux/actions/index.js";
import i18n from "../../../i18n/session/signin/index.json";
import logo from "../../../assets/svg/logo/logo.svg";
import getPathRoutes from "../../../helpers/pathroutes";
import { useQuery } from "@tanstack/react-query";
import { postFetch } from "../../../services";
import endpoints from "../../../helpers/endpoints.js";
import FormSignin from "./FormSignin";


export default function Signin() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const language = useSelector((state) => state.i18nReducer.language);
	const [entriesData, setEntriesData] = useState(null);

	const handleSigninSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const entries = Object.fromEntries(formData.entries());
		setEntriesData(entries)	

	};

	const url = endpoints.signin
	const { data, error, isLoading, isFetching, isSuccess, refetch } = useQuery({
		queryKey: ["key-signin"],
		queryFn: ()=> postFetch(url, entriesData),
		enabled: false,
	})

	useEffect(()=>{
		if(entriesData){
			refetch()
				.then((data) => {
					sessionStorage.setItem("token", data.data.token);
					//el back fue estructurado asi, sino manejaria los errores de otra forma
					if (data.data.message===undefined) {
						dispatch(setRole(data.data.roles[0].roleName))
						alert('Inicio de sesión exitoso!')
						navigate(getPathRoutes(language, "home", true))
					} else {
						alert(data.data.message)
					}
				})
				.catch((err) => console.log(err));
		}
	},[entriesData])
	

	return (
		<Container>
			<img
				src={logo}
				className="w-70 h-70 text-center m-auto bg-white"
				aria-label="Logo"
				alt="Logo"
				title="Justina.io"
				width={160}
				height={160}
				loading="lazy"
			/>

			<p>{i18n[language].pageTitle}</p>
			
			<FormSignin handleSubmit={handleSigninSubmit} />

			<p
				className="text-center"
				title={i18n[language].dontHaveAccountTitle}
				aria-label={i18n[language].dontHaveAccountTitle}
			>
				{i18n[language].dontHaveAccountText}&nbsp;
				<span
					className="underline font-bold"
					role="button"
					title={i18n[language].signInLinkTitle}
					aria-label={i18n[language].signInLinkTitle}
					onClick={() => navigate(getPathRoutes(language, "signup", false))}
				>
					{i18n[language].signInLinkText}
				</span>
			</p>
		</Container>
	);
}
