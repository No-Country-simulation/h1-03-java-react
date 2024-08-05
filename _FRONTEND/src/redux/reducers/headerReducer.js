import { SETHEADERHEIGHT, SETISACTIVEHAMBURGERBUTTON } from "../types";

const initialState = {
    headerHeight: '100',
    isActiveHamburgerButton: false,
}

export default function headerReducer(state=initialState, action ){
    switch(action.type){
        case SETHEADERHEIGHT:
            return {...state, headerHeight: action.payload}

        case SETISACTIVEHAMBURGERBUTTON:
            return {...state, isActiveHamburgerButton: action.payload}

        default:
            return state
    }
}