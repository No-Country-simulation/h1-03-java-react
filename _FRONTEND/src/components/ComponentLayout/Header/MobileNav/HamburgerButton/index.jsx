import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { setIsActiveHamburgerButton } from "../../../../../redux/actions"

export default function HamburgerButton() {
    const dispatch = useDispatch()
    const isActiveHamburgerButton = useSelector((state) => state.headerReducer.isActiveHamburgerButton)

    const handleClick = () => {
        dispatch(setIsActiveHamburgerButton(!isActiveHamburgerButton))
    }

	return (
		 <section 
            className={`hamburger-button ${isActiveHamburgerButton ? "hamburger-button--active" : ""}`}
            onClick={()=>handleClick()}
        >
            <div className="lineTop" style={isActiveHamburgerButton ? { backgroundColor: '#FFF' } : {}} />
            <div className="lineMiddle" style={isActiveHamburgerButton ? { backgroundColor: '#FFF' } : {}} />
            <div className="lineBottom" style={isActiveHamburgerButton ? { backgroundColor: '#FFF' } : {}} />
        </section>
	);
}
