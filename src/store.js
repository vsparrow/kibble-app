import {createStore, combineReducers, applyMiddleware} from 'redux'
import kibbleReducer from './reducers/kibbleReducer'
import userReducer from './reducers/userReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({kibbles: kibbleReducer, user: userReducer})
const store = createStore(reducer,applyMiddleware(thunk))
export default store