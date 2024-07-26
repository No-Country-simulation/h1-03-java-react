import { SETROLE } from "../types";

const initialState = {
    role: null
}

export default function roleReducer(state=initialState, action ){
    switch(action.type){
        case SETROLE:
            return {...state, role: action.payload}
            
        default:
            return state
    }
}