import Facebook from '../../../assets/svg/socialMedia/facebook.svg'
import Instagram from '../../../assets/svg/socialMedia/instagram.svg'
import Twitter from '../../../assets/svg/socialMedia/twitter.svg'
import Whatsapp from '../../../assets/svg/socialMedia/whatsapp.svg'
import Gmail from '../../../assets/svg/socialMedia/gmail.svg'
import './index.css'

export default function Footer() {
	return (
		<footer className="footer">
            <div className="footerContent">
                <div className="leftSection">
                    <h1 className="leftSectionTitle">Justina.io</h1>
                    <h2 className="leftSectionContent">
                        Nombre de calle 1234
                    </h2>
                    <h2 className="leftSectionContent">
                        S2300 Rafaela, Santa Fe
                    </h2>
                    <h2 className="leftSectionContent">
                        3492 999999
                    </h2>
                </div>
                <div className="rightSection">
                    <a
                        href="mailto:nombre@gmail.com"
                        title="Gmail"
                        target="_blank"
                    >
                        <img
                            src={Gmail}
                            alt="Gmail"
                            aria-label="Gmail icon link"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a href="https://www.facebook.com/" title="Facebook" target="_blank">
                        <img
                            src={Facebook}
                            alt="Facebook"
                            aria-label="Facebook icon link"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a href="https://www.instagram.com/" title="Instagram" target="_blank">
                        <img
                            src={Instagram}
                            alt="Instagram"
                            aria-label="Instagram icon link"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a href="https://www.twitter.com/" title="Twitter" target="_blank">
                        <img
                            src={Twitter}
                            alt="Twitter"
                            aria-label="Twitter icon link"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a href="https://wa.me/549999999999" title="Whatsapp" target="_blank">
                        <img
                            src={Whatsapp}
                            alt="Whatsapp"
                            aria-label="Whatsapp icon link"
                            width={30}
                            height={30}
                        />
                    </a>
                </div>
            </div>
			<p className="copyright">
				Copyright ©2024
				<a
					href="https://www.linkedin.com/in/matiasfiordelli/"
					title="Go to LinkedIn.."
                    aria-label="Go to LinkedIn"
				>
					Autor
				</a>
			</p>
		</footer>
	);
}
