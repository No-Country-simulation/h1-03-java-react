import React, { useEffect, useState } from "react";
import "./index.css";

export default function BottomMenu() {

    const [bottomValue, setBottomValue] = useState('0px')
    let prevScrollPos2 = window.scrollY

    const hideBottomMenu = () => {
        let currentScrollPos = window.scrollY

        //Controls if the scrollY is up or down
        prevScrollPos2 < currentScrollPos
            ?setBottomValue('-50px')
            :setBottomValue('0px')

        prevScrollPos2 = currentScrollPos
    }

	useEffect(() => {
		document.onscroll = (e) => {
			hideBottomMenu()
		}	
	}, [])
    

	return (
		<nav className="bottomMenu" style={{bottom:bottomValue}}>
			<div>OPT1</div>
			<div>OPT2</div>
			<div>OPT3</div>
			<div>OPT4</div>
			<div>OPT5</div>
		</nav>
	);
}
