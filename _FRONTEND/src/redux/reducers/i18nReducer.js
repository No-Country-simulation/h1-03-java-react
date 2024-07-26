import { SETI18N } from "../types";

const initialState = () => {
    if (!localStorage.getItem('language')) {
        localStorage.setItem('language', 'sp')
    }

    return {language: localStorage.getItem('language')}
}

const setState = (state, payload) => {
    const language = localStorage.getItem('language')
    localStorage.setItem('language', payload)

    return {...state, language: payload}
}

export default function i18nReducer(state=initialState(), action ){
    switch(action.type){
        case SETI18N:
            return setState(state, action.payload)
            
        default:
            return state
    }
}