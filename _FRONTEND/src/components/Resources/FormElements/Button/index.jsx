import React from 'react'
import i18n from '../../../../i18n/form'
import { useSelector } from 'react-redux'

export default function Button() {
    const language = useSelector((state)=>state.i18nReducer.language)

    return (
        <div className="text-center">
            <button>
                {i18n[language].buttonSubmit}
            </button>
        </div>
    )
}
