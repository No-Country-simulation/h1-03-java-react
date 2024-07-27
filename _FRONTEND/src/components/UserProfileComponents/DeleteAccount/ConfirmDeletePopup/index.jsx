import React from "react";
import { useSelector } from "react-redux";
import Button from "../../../Resources/FormElements/Button";
import Input from "../../../Resources/FormElements/InputLabel/Input";
import Label from "../../../Resources/FormElements/InputLabel/Label";
import Form from "../../../Resources/FormElements/Form";
import i18n from "../../../../i18n/users/index.json";
import warningDeleteAccount from '../../../../assets/svg/others/warningDeleteAccount.svg'
/* import { useQuery } from "@tanstack/react-query";
import { deleteFetch } from "../../../../services";
import endpoints from "../../../../helpers/endpoints.js"; */

export default function ConfirmDeletePopup({ closePopup, setClosePopup }) {
	const language = useSelector((state) => state.i18nReducer.language);

/* 	const url = endpoints
	const { data, error, isLoading, isFetching, isSuccess, refetch } = useQuery({
		queryKey: ["key-signin"],
		queryFn: ()=> deleteFetch(url, entriesData),
		enabled: false,
	}) */

	const handleSubmit = (e) => {
		e.preventDefault();
	};

    const closePopupHandler = () => {
        setClosePopup(true)
    }

	return (
		<section
			onClick={() => closePopupHandler()}
			className={`${closePopup ? "hidden" : "fixed"} text-xs md:text-md  xxl:text-base top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[2000] pointer-events-all backdrop-blur-[10px] backdrop-saturate-[50%]`}
		>
			<div
				onClick={(e) => e.stopPropagation()}
                className="pointer-events-all absolute w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-2/5 h-[330px] sm:h-[450px] md:h-[350px] xl:h-3/5 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border-2 bg-white rounded-xl grid justify-center items-center p-1 sm:p-3 md:p-8"
				role="dialog"
			>
				<div className="font-bold text-balance">
					<p
						className="flex justify-center items-center gap-3 text-red-500 text-center py-1 sm:py-1"
						aria-label={i18n[language].confirmDelete.mainTitle}
						aria-level={1}
						role="heading"
					>
                        <img 
							src={warningDeleteAccount}
							alt="warningDeleteAccount"
							width={20}
							height={20}
							aria-label={i18n[language].confirmDelete.mainTitle+' image'}
							title={i18n[language].confirmDelete.mainTitle}
						/>
						{i18n[language].confirmDelete.mainTitle}
					</p>
					<p
						className="text-center py-1 sm:pt-5"
						aria-label={i18n[language].confirmDelete.mainSubtitle}
						aria-level={2}
						role="heading"
					>
						{i18n[language].confirmDelete.mainSubtitle}
					</p>
				</div>

				<div className="w-fit flex gap-3 justify-center items-center m-auto">
					<Form handleSubmit={handleSubmit}>
                        {i18n[language].confirmDelete.form.map((e, i) => (
                            <div className="sm:border sm:border-black flex gap-[inherit] w-inherit rounded-full p-3 font-bold" key={i}>
                                <Label htmlFor={e.id} title={e.title} />
                                <Input
                                    type={"checkbox"}
                                    id={e.id}
                                    title={e.title}
                                    isRequired={false}
                                    autoFocus={false}
                                    value={""}
                                    onChangeHandler={() => {}}
                                    isChecked={null}
                                />
                            </div>
                        ))}
					</Form>
				</div>

				<div className="grid grid-cols-2 gap-1 m-auto sm:gap-5 max-w-max pointer-events-auto">
					<Button
						type={"button"}
						text={i18n[language].confirmDelete.buttons.cancel.text}
						textColor={"#FFF"}
						bgColor={"#D98236"}
						title={i18n[language].confirmDelete.buttons.cancel.title}
						isDisabled={false}
						onClickHandler={closePopupHandler}
					/>
					<Button
						type={"submit"}
						text={i18n[language].confirmDelete.buttons.confirm.text}
						textColor={"#FFF"}
						title={i18n[language].confirmDelete.buttons.confirm.title}
						isDisabled={false}
						onClickHandler={() => {}}
					/>
				</div>
			</div>
		</section>
	);
}
