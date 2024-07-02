import { useSelector } from "react-redux";
import ItemsNav from "./ItemsNav";
import "./index.css";

export default function Nav() {
	const itemsNav = useSelector((state) => state.headerReducer.itemsNav);

	return (
		<>
			{itemsNav && (
				<nav className="nav">
					<ul>
						<ItemsNav />
					</ul>
				</nav>
			)}
		</>
	);
}
