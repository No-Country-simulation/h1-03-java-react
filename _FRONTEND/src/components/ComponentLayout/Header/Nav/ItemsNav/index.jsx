import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsActiveHamburgerButton } from "../../../../../redux/actions";
import NeutralAvatar from "../../../../../assets/svg/avatars/neutralAvatar.svg";
import "./index.css";

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
			{itemsNav.map((e, i, arr) => (
				i === arr.length - 1 ? (
					<div
						className="itemNavWithAvatar"
						key={i + "1"}
						onClick={() => handleClick(e)}
					>
						<img src={`${NeutralAvatar}`} />
						<li data-text={e.name}>{e.name}</li>
					</div>
				) : (
					<li
						data-text={e.name}
						key={i}
						onClick={() => handleClick(e)}
					>
						{e.name}
					</li>
				)
			))}
		</>
	);
}
