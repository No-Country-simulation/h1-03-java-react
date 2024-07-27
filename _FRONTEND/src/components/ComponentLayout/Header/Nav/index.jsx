import { useDispatch, useSelector } from "react-redux";
import ItemsNav from "./ItemsNav";
import "./index.css";
import getItemsNav from "../../../../helpers/itemsNav";
import { useEffect, useState } from "react";
import hideTopMenuOnScroll from "./autoHideNav";
import { setI18n } from "../../../../redux/actions";
import LanguageSelect from "../LanguageSelectt";
import smallLogo from '../../../../assets/svg/logo/smallLogo.svg'
import { useNavigate } from "react-router-dom";


export default function Nav() {
	const headerHeightValue = useSelector((state) => state.headerReducer.headerHeight)
	const language = useSelector((state)=>state.i18nReducer.language)
	const role = useSelector((state) => state.roleReducer.role)
	const [itemsNav, setItemsNav] = useState(null)
//	const itemsNav = getItemsNav(language, role)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [topValue, setTopValue] = useState('0px')
	useEffect(() => {
		document.onscroll = () => {
			hideTopMenuOnScroll(headerHeightValue, setTopValue)
		}
	}, [])

	useEffect(()=>{
		setItemsNav(getItemsNav(language, role))
		//console.log(role)
	},[role])

	const handleSelectLanguage = (lang) => {
		dispatch(setI18n(lang))
	}

	return (
		<>
			{itemsNav && (
				<nav className="nav" style={{top:topValue, height: `${headerHeightValue}px`}} >
					<ul>
						<img 
							src={`${smallLogo}`} 
							alt="logo" 
							loading="lazy" 
							className="logo"
							title="Justina.io"
							aria-label="logo"
							translate="no"
							id="logo"
							name="logo"
							role="button"
							onClick={() => navigate('/')}
						/>
						<div className="flex gap-5">
							<ItemsNav />
						</div>
						<LanguageSelect handleSelectLanguage={handleSelectLanguage} />
					</ul>
				</nav>
			)}
		</>
	);
}
