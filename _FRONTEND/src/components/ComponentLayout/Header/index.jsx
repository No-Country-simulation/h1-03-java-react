import "./index.css";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { setIsActiveHamburgerButton } from "../../../redux/actions";

export default function Header() {
	const location = useLocation()
	const dispatch = useDispatch()
	const [isMobileScreen, setIsMobileScreen] = useState(false);
	const headerHeightValue = useSelector((state) => state.headerReducer.headerHeight)
	//const isActiveHamburgerButton = useSelector((state) => state.headerReducer.isActiveHamburgerButton)

	useEffect(()=>{
		dispatch(setIsActiveHamburgerButton(false))
	},[location])

	const setterIsMobileState = () => {
		window.innerWidth >= 1280
			? setIsMobileScreen(false)
			: setIsMobileScreen(true)
	}
	window.onresize = () => {
		setterIsMobileState()		
	}

	useEffect(() => {
		setterIsMobileState()
	}, [])	

	return (
		<header 
			className="header"
			style={{ height: `${headerHeightValue}px`}}
		>
			{isMobileScreen
				? <MobileNav />
				: <Nav />
			}
		</header>
	);
}
