import { useEffect, useRef } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import ItemsNav from "../../Nav/ItemsNav";
import { setI18n, setIsActiveHamburgerButton } from "../../../../../redux/actions";
import getItemsNav from "../../../../../helpers/itemsNav";
import LanguageSelect from "../../LanguageSelectt";

export default function NavList() {
	const dispatch = useDispatch()
	const headerHeight = useSelector((state) => state.headerReducer.headerHeight);
	const isActiveHamburgerButton = useSelector(
		(state) => state.headerReducer.isActiveHamburgerButton
	);
	const language = useSelector((state)=>state.i18nReducer.language)
	const role = useSelector((state) => state.roleReducer.role);
	const itemsNav = getItemsNav(language, role)

	const scrollHandler = useRef(() => {
		window.scrollTo(0, 0);
	});

	const handleSelectLanguage = (lang) => {
		dispatch(setI18n(lang))
	}

	useEffect(() => {
		if (isActiveHamburgerButton) {
			document.addEventListener("scroll", scrollHandler.current);
		} else {
			document.removeEventListener("scroll", scrollHandler.current);
		}
	}, [isActiveHamburgerButton]);

	return (
		<>
			{itemsNav && (
				<section
					className="nav-list-container"
					style={{
						backdropFilter: isActiveHamburgerButton
							? "blur(10px) saturate(50%)"
							: "initial",
						pointerEvents: isActiveHamburgerButton ? "all" : "none",
					}}
					onClick={()=>dispatch(setIsActiveHamburgerButton(false))}
				>
					<nav
						className="nav-list"
						style={{ left: isActiveHamburgerButton ? "0" : "-100%" }}
					>
						<ul style={{ top: `${headerHeight}px` }}>
							<ItemsNav />
							<LanguageSelect handleSelectLanguage={handleSelectLanguage} />
						</ul>
					</nav>
				</section>
			)}
		</>
	);
}
