import { SETDISPLAYSPINNER } from "../types";

const initialState = {
    display: true
}

export default function displaySpinnerReducer(state=initialState, action ){
    switch(action.type){
        case SETDISPLAYSPINNER:
            return {...state, display: action.payload}
            
        default:
            return state
    }
}