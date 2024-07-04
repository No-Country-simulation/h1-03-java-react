import { SETI18N } from "../types";

const initialState = {
    language: 'en'
}

export default function i18nReducer(state=initialState, action ){
    switch(action.type){
        case SETI18N:
            return {...state, language: action.payload}
            
        default:
            return state
    }
}