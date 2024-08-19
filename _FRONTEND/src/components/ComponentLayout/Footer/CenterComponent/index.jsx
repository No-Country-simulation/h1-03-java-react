import React from "react";
import Facebook from "../../../../assets/svg/socialMedia/facebook.svg";
import Instagram from "../../../../assets/svg/socialMedia/instagram.svg";
import Linkedin from "../../../../assets/svg/socialMedia/linkedin.svg";
import Whatsapp from "../../../../assets/svg/socialMedia/whatsapp.svg";
import Gmail from "../../../../assets/svg/socialMedia/gmail.svg";
import SocialNetworkLink from "./SocialNetworkLink";
import { useSelector } from "react-redux";

export default function RightComponent() {
	const language = useSelector((state) => state.i18nReducer.language);

	return (
		<div className="flex flex-row gap-12">
				<SocialNetworkLink
					href={"mailto:nombre@gmail.com"}
					src={Gmail}
					title={"Gmail"}
				/>
				<SocialNetworkLink
					href={"https://wa.me/549999999999"}
					src={Whatsapp}
					title={"Whatsapp"}
				/>
				<SocialNetworkLink
					href={"https://www.linkedin.com/"}
					src={Linkedin}
					title={"Linkedin"}
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
		</div>
	);
}
