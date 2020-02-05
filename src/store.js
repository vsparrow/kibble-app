import {createStore, combineReducers} from 'redux'
import kibbleReducer from './reducers/kibbleReducer'

const reducer = {kibbles: kibbleReducer}
export default createStore(combineReducers(reducer))