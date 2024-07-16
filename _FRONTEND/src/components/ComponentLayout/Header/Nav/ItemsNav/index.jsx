import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ItemsNav() {
    const itemsNav = useSelector((state) => state.headerReducer.itemsNav);
	const navigate = useNavigate()

	return (
		<>
			{itemsNav.map((e, i) => (
				<li
					data-text={e.name}
					key={i}
					onClick={() => navigate(e.route)}
				>
					{e.name}
				</li>
			))}
		</>
	);
}
