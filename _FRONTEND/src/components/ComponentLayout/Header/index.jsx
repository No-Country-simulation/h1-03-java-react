import "./index.css";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
	const [isMobileScreen, setIsMobileScreen] = useState(false);
	const headerHeightValue = useSelector((state) => state.headerReducer.headerHeight)
	const isActiveHamburgerButton = useSelector((state) => state.headerReducer.isActiveHamburgerButton)

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
			style={{ 
				height: `${headerHeightValue}px`,
				/* backgroundColor: isActiveHamburgerButton ? 'rgba(0,0,0)' : '' */
			}}
		>
			{/* <a
				href={'/'}
				title="logo"
				aria-label="logo"
			>
				<img
					src={Logo}
					alt="logo"
					width={100}
					height={100}
					className="logo"
				/>
			</a> */}
			{isMobileScreen
				? <MobileNav />
				: <Nav />
			}
		</header>
	);
}
