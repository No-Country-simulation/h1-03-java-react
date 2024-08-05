import React, { useEffect, useState } from "react";
import i18n from '../../../i18n/users/index.json'
import { useSelector } from "react-redux";
import ConfirmDeletePopup from "./ConfirmDeletePopup";

export default function DeleteAccount() {
    const [closePopup, setClosePopup] = useState(false)
    const language = useSelector((state) => state.i18nReducer.language);

    useEffect(() => {
        setClosePopup(true)
    }, [])

    const onClickHandler = ()=>{
        setClosePopup(false)
    }

	return (
        <>
            <ConfirmDeletePopup closePopup={closePopup} setClosePopup={setClosePopup} />
            <p
                className="text-red-500 font-bold underline text-center py-5"
                aria-label={i18n[language].deleteUser.title}
                role="button"
                onClick={() => onClickHandler()}
            >
                {i18n[language].deleteUser.text}
            </p>
        </>
	);
}
