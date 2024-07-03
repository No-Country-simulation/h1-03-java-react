import  { combineReducers } from 'redux'
import displaySpinnerReducer from './displaySpinnerReducer'
import headerReducer from './headerReducer'

const reducer = combineReducers({
    displaySpinnerReducer,
    headerReducer
})

export default reducer