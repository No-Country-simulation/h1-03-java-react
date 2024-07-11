import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'
import CopyrightComponent from './CopyrightComponent'
import './index.css'

export default function Footer() {
	return (
		<footer className="footer">
            <div className="footerContent">
                <LeftComponent />
                <RightComponent />
            </div>                
			<CopyrightComponent />
		</footer>
	);
}
