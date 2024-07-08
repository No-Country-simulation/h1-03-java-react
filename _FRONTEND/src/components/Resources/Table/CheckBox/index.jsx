import React, { useEffect, useRef, forwardRef } from 'react'
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/table"

export const Checkbox = forwardRef(( {indeterminate, id, ...rest }, ref ) => {
    const language = useSelector((state)=>state.i18nReducer.language)

    const defaultRef = useRef()
    const resolvedRef = ref || defaultRef

    useEffect(()=>{
        resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
        <input 
            type="checkbox" 
            ref={resolvedRef} 
            {...rest} 
            id={`checkboxSelectRow${id}`}
            title={i18n[language].table.checkboxSelect} 
            aria-label={i18n[language].table.checkboxSelect}
        />
    )
})
