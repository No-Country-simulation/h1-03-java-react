import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsActiveHamburgerButton } from "../../../../../redux/actions";

export default function ItemsNav() {
	const itemsNav = useSelector((state) => state.headerReducer.itemsNav);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick = (e) => {
		dispatch(setIsActiveHamburgerButton(false));
		navigate(e.route);
	};

	return (
		<>
			{itemsNav.map((e, i) => (
				<li data-text={e.name} key={i} onClick={() => handleClick(e)}>
					{e.name}
				</li>
			))}
		</>
	);
}
