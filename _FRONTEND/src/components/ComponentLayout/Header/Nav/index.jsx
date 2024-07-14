import { useSelector } from "react-redux";
import ItemsNav from "./ItemsNav";
import "./index.css";
import getItemsNav from "../../../../helpers/itemsNav";

export default function Nav() {
	const language = useSelector((state)=>state.i18nReducer.language)
	const itemsNav = getItemsNav(language)

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
