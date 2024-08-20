import React from "react";
import Facebook from "../../../../assets/svg/socialMedia/facebook.svg";
import Instagram from "../../../../assets/svg/socialMedia/instagram.svg";
import Linkedin from "../../../../assets/svg/socialMedia/linkedin.svg";
import Whatsapp from "../../../../assets/svg/socialMedia/whatsapp.svg";
import Gmail from "../../../../assets/svg/socialMedia/gmail.svg";
import SocialNetworkLink from "./SocialNetworkLink";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/footer/index.json";

export default function RightComponent() {
	const language = useSelector((state) => state.i18nReducer.language);

	return (
		<div className="flex md:flex-row gap-2 md:gap-12">
				<SocialNetworkLink
					href={"mailto:nombre@gmail.com"}
					src={Gmail}
					title={i18n[language].center.email}
				/>
				<SocialNetworkLink
					href={"https://wa.me/549999999999"}
					src={Whatsapp}
					title={i18n[language].center.whatsapp}
				/>
				<SocialNetworkLink
					href={"https://www.linkedin.com/"}
					src={Linkedin}
					title={i18n[language].center.linkedin}
				/>
				<SocialNetworkLink
					href={"https://www.facebook.com/"}
					src={Facebook}
					title={i18n[language].center.facebook}
				/>
				<SocialNetworkLink
					href={"https://www.instagram.com/"}
					src={Instagram}
					title={i18n[language].center.instagram}
				/>
		</div>
	);
}
