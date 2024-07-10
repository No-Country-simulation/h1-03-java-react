import { SETHEADERHEIGHT, SETISACTIVEHAMBURGERBUTTON, SETITEMSNAV } from "../types";
import itemsNav from "../../helpers/itemsNav";

const initialState = {
    headerHeight: '100',
    isActiveHamburgerButton: false,
    itemsNav: [ ...itemsNav],
}

export default function headerReducer(state=initialState, action ){
    switch(action.type){
        case SETHEADERHEIGHT:
            return {...state, headerHeight: action.payload}

        case SETISACTIVEHAMBURGERBUTTON:
            return {...state, isActiveHamburgerButton: action.payload}

        case SETITEMSNAV:
            return {...state, itemsNav: action.payload}

        default:
            return state
    }
}