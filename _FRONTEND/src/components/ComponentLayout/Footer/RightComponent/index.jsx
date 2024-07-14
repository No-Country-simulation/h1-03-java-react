import React from "react";
import Facebook from "../../../../assets/svg/socialMedia/facebook.svg";
import Instagram from "../../../../assets/svg/socialMedia/instagram.svg";
import Twitter from "../../../../assets/svg/socialMedia/twitter.svg";
import Whatsapp from "../../../../assets/svg/socialMedia/whatsapp.svg";
import Gmail from "../../../../assets/svg/socialMedia/gmail.svg";
import SocialNetworkLink from "./SocialNetworkLink";
import { useDispatch, useSelector } from "react-redux";
import { setI18n } from "../../../../redux/actions";

export default function RightComponent() {
	const language = useSelector((state) => state.i18nReducer.language);
	const dispatch = useDispatch()

	const handleClickLanguage = (language) => {
		dispatch(setI18n(language))
	}

	return (
		<section className="rightSection">
			<div className="rightSection__socialnetworks">
				<SocialNetworkLink
					href={"mailto:nombre@gmail.com"}
					src={Gmail}
					title={"Gmail"}
				/>
				<SocialNetworkLink
					href={"https://www.facebook.com/"}
					src={Facebook}
					title={"Facebook"}
				/>
				<SocialNetworkLink
					href={"https://www.instagram.com/"}
					src={Instagram}
					title={"Instagram"}
				/>
				<SocialNetworkLink
					href={"https://www.twitter.com/"}
					src={Twitter}
					title={"Twitter"}
				/>
				<SocialNetworkLink
					href={"https://wa.me/549999999999"}
					src={Whatsapp}
					title={"Whatsapp"}
				/>
			</div>
			<div className="rightSection__languages">
				<p
					onClick={ () => handleClickLanguage("en") }
					title="Change to english"
					aria-label="Change to english"
					role="button"
					aria-pressed="false"
				>
					🇺🇸
				</p>
				<p
					onClick={ () => handleClickLanguage("sp") }
					title="Cambiar a español"
					aria-label="Cambiar a Español"
					role="button"
					aria-pressed="false"
				>
					🇪🇸
				</p>
			</div>
		</section>
	);
}
