import { useEffect, useRef } from "react";
import "./index.css";
import { useSelector } from "react-redux";
import ItemsNav from "../../Nav/ItemsNav";

export default function NavList() {
	const headerHeight = useSelector((state) => state.headerReducer.headerHeight);
	const isActiveHamburgerButton = useSelector(
		(state) => state.headerReducer.isActiveHamburgerButton
	);
	const itemsNav = useSelector((state) => state.headerReducer.itemsNav);

	const scrollHandler = useRef(() => {
		window.scrollTo(0, 0);
	});

	useEffect(() => {
		if (isActiveHamburgerButton) {
			document.addEventListener("scroll", scrollHandler.current);
		} else {
			document.removeEventListener("scroll", scrollHandler.current);
		}
	}, [isActiveHamburgerButton]);

	return (
		<>
			{itemsNav && (
				<section
					className="nav-list-container"
					style={{
						backdropFilter: isActiveHamburgerButton
							? "blur(10px) saturate(50%)"
							: "initial",
					}}
				>
					<nav
						className="nav-list"
						style={{ width: isActiveHamburgerButton ? "" : "0" }}
					>
						<ul style={{ top: `${headerHeight}px` }}>
							<ItemsNav />
						</ul>
					</nav>
				</section>
			)}
		</>
	);
}
