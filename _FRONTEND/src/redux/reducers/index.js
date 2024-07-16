import  { combineReducers } from 'redux'
import displaySpinnerReducer from './displaySpinnerReducer'
import headerReducer from './headerReducer'
import i18nReducer from './i18nReducer'

const reducer = combineReducers({
    displaySpinnerReducer,
    headerReducer,
    i18nReducer
})

export default reducer