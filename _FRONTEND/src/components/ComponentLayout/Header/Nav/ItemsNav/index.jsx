import React, { useEffect, memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsActiveHamburgerButton, setRole } from "../../../../../redux/actions";
import NeutralAvatar from "../../../../../assets/svg/avatars/neutralAvatar.svg";
import "./index.css";
import getItemsNav from "../../../../../helpers/itemsNav";
import i18nNav from "../../../../../i18n/nav/index.json";
import i18nOtherRoutes from "../../../../../i18n/nav/otherRoutes.json";
import endpoints from "../../../../../helpers/endpoints.js"
import { getFetch } from "../../../../../services";
import { useQuery } from "@tanstack/react-query";
import getPathRoutes from "../../../../../helpers/pathroutes";

const ItemsNav = () => {
	const language = useSelector((state) => state.i18nReducer.language);
	const role = useSelector((state) => state.roleReducer.role);
	const itemsNav = getItemsNav(language, role);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const url = endpoints.checkRoleAndToken
	const token = sessionStorage.getItem("token")
	const { data, error, isLoading, isFetching, isSuccess, refetch } = useQuery({
		queryKey: ["key-checkRoleAndToken"],
		queryFn: () => getFetch(url, token),
		enabled: false,
	})
	
	const handleClick = (e) => {
		dispatch(setIsActiveHamburgerButton(false));
		if(e.route==='/logout'){
			sessionStorage.removeItem("token")
			dispatch(setRole(null))
			navigate('/')
			/* const signinText = i18nNav[language].find((e)=>e.signin).signin
			const logoutText = i18nOtherRoutes[language].find((e)=>e.logout).logout.name
			const indexLogout = itemsNav.findIndex((e)=>e.name===logoutText)
			itemsNav[indexSignIn].name= logoutText.name
			itemsNav[indexSignIn].route= 'logout' */
		}else {
			navigate(e.route);
		}		
	};

	/* useEffect(()=>{
		//console.log(role)
		if(role){
			const signinText = i18nNav[language].find((e)=>e.signin).signin.name
			const logoutText = i18nOtherRoutes[language].find((e)=>e.logout).logout
			const indexSignIn = itemsNav.findIndex((e)=>e.name===signinText)
			itemsNav[indexSignIn].name= logoutText.name
			itemsNav[indexSignIn].route= 'logout'
			//console.log(itemsNav)
		}	

	},[role]) */
	
	useEffect(()=>{

		if(role===null){
			if(data){
				dispatch(setRole(data.roles[0].roleName))
			}
		}
		
	},[data])
	
	useEffect(()=>{

		if(!role && token){	
			refetch()
		}	

	},[])

	return (
		<>
			{itemsNav.map((e, i) =>
				(
					<li
						data-text={e.name}
						key={i}
						onClick={() => handleClick(e)}
						translate="no"
					>
						{e.name}
					</li>
				)
			)}
		</>
	);
}

export default memo(ItemsNav)
