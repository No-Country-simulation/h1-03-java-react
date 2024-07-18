import React, { useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function BottomMenu() {
	const navigate = useNavigate();
    const [bottomValue, setBottomValue] = useState('0px')
    let prevScrollPos2 = window.scrollY

	const hideBottomMenuOnScroll = () => {
        let currentScrollPos = window.scrollY

        prevScrollPos2 < currentScrollPos
            ?setBottomValue('-80px')
            :setBottomValue('0px')

        prevScrollPos2 = currentScrollPos
    }

	const hideBottomMenuOnWhell = (delta) => {
		delta > 0 && setBottomValue('-80px');
		delta < 0 && setBottomValue('0px');
	}

	useEffect(() => {
		document.onscroll = (e) => {
			hideBottomMenuOnScroll()
		}

		document.onwheel = (e) => {
			hideBottomMenuOnWhell(e.deltaY)
		}
	}, [])
    

	return (
		<nav className="bottomMenu" style={{bottom:bottomValue}}>
			<div>
				<div>OPT5</div>
			</div>
		</nav>
	);
}
