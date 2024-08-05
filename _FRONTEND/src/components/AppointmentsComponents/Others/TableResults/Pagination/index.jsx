import React from "react";

export default function Pagination() {
	return (
		<div className="flex justify-center items-center text-center text-base font-bold mt-5">
			<div className="border border-[#bdbdbd] rounded-s-3xl p-4 bg-[#f3f3f3] text-[#bdbdbd]">
				Atrás
			</div>

			<div className="grid grid-cols-3">
				<div className="border border-[#bdbdbd] border-x-0 p-4 text-[#23a6f0]">
					1
				</div>

				<div className="bg-[#23a6f0] border border-[#bdbdbd] p-4 text-white">
					2
				</div>

				<div className="border border-[#bdbdbd] border-x-0 p-4 text-[#23a6f0]">
					3
				</div>
			</div>

			<div className="border border-[#bdbdbd] rounded-e-3xl p-4  text-[#23a6f0]">
				Siguiente
			</div>
		</div>
	);
}
