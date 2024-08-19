import LeftComponent from "./LeftComponent";
import CenterComponent from "./CenterComponent";
import CopyrightComponent from "./CopyrightComponent";
import RightComponent from "./RightComponent";
import "./index.css";

export default function Footer() {
  return (
    <footer className="flex flex-row bg-[#D98235] justify-between items-center px-10 py-2">
        <LeftComponent />
				<div className="flex flex-col justify-center items-center gap-4">
					<CenterComponent />
      <CopyrightComponent />
				</div>
        <RightComponent />
    </footer>
  );
}
