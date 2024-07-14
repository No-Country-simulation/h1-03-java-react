import "./index.css";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useSelector } from "react-redux";

export default function Header() {
	const headerHeightValue = useSelector((state) => state.headerReducer.headerHeight)
	const isActiveHamburgerButton = useSelector((state) => state.headerReducer.isActiveHamburgerButton)

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
			<Nav />
			<MobileNav />
		</header>
	);
}
