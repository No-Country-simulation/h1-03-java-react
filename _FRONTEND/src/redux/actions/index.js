import { 
    SETDISPLAYSPINNER, 
    SETHEADERHEIGHT, 
    SETISACTIVEHAMBURGERBUTTON, 
    SETI18N,
    SETROLE
} from "../types"

export const setDisplaySpinner = (payload) => ({
    type: SETDISPLAYSPINNER,
    payload: payload
})

export const setHeaderHeight = (payload) => ({
    type: SETHEADERHEIGHT,
    payload: payload
})

export const setIsActiveHamburgerButton = (payload) => ({
    type: SETISACTIVEHAMBURGERBUTTON,
    payload: payload
})

export const setI18n = (payload) => ({
    type: SETI18N,
    payload: payload
})

export const setRole = (payload) => ({
    type: SETROLE,
    payload: payload
})