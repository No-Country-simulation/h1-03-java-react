import React from "react";
import SeeMoreButton from "./SeeMoreButton";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/appointments/index.json";

export default function ProfessionalsList() {
    const language = useSelector((state) => state.i18nReducer.language);

	return (
		<div
			className="w-full lg:flex-1 border rounded-3xl h-full"
			style={{
				background:
					"linear-gradient(180deg, rgba(86, 102, 190, 0.8) 57.95%, rgba(217, 130, 53, 0.56) 100%)",
			}}
		>
			<p className="text-center text-white p-3 font-medium">
                {i18n[language].professionalsList.title}
			</p>

            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3 p-10 pb-0">
                    <div className="rounded-3xl p-4 bg-[#fef7ff] cursor-pointer hover:scale-[101%] transition duration-300">
                        <p>
                            <small>Juan Pepe</small>
                        </p>
                        <p>
                            <small className="text-[#49454f]">
                                Médico Cardiólogo
                            </small>
                        </p>
                    </div>
                    <div className="rounded-3xl p-4 bg-[#fef7ff] cursor-pointer hover:scale-[101%] transition duration-300">
                        <p>
                            <small>Juan Pepe</small>
                        </p>
                        <p>
                            <small className="text-[#49454f]">
                                Médico Cardiólogo
                            </small>
                        </p>
                    </div>
                    <div className="rounded-3xl p-4 bg-[#fef7ff] cursor-pointer hover:scale-[101%] transition duration-300">
                        <p>
                            <small>Juan Pepe</small>
                        </p>
                        <p>
                            <small className="text-[#49454f]">
                                Médico Cardiólogo
                            </small>
                        </p>
                    </div>
                    <div className="rounded-3xl p-4 bg-[#fef7ff] cursor-pointer hover:scale-[101%] transition duration-300">
                        <p>
                            <small>Juan Pepe</small>
                        </p>
                        <p>
                            <small className="text-[#49454f]">
                                Médico Cardiólogo
                            </small>
                        </p>
                    </div>
                </div>

                <SeeMoreButton />
            </div>
		</div>
	);
}
