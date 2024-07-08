import React from 'react'
import Input from '../../FormElements/InputLabel/Input'
import { useSelector } from 'react-redux'
import i18n from '../../../../i18n/table'

export default function FilterInput({ filter, setFilter }) {
    const language = useSelector((state)=>state.i18nReducer.language)
    
    return (
        <div className="flex flex-row">
            <Input
                type={'text'}
                id={'searchInput'}
                placeholder={i18n[language].filterInput.placeholder}
                title={i18n[language].filterInput.title}
                required={false}
                value={filter || ''}
                onChange={(e) => setFilter(e.target.value)}
            />
            <span 
                className="flex justify-center items-center p-0 -m-[1.5rem] h-auto cursor-pointer"
                onClick={()=>setFilter('')}
                title={i18n[language].filterInput.deleteText}
                aria-label={i18n[language].filterInput.deleteText}
                role="button"
            >
                &#x2715;
            </span>
        </div>
    )
}
