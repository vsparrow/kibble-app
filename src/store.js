import {createStore, combineReducers, applyMiddleware} from 'redux'
import kibbleReducer from './reducers/kibbleReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({kibbles: kibbleReducer})
const store = createStore(reducer,applyMiddleware(thunk))
export default store