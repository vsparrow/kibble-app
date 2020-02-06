import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import kibbleReducer from './reducers/kibbleReducer'
import userReducer from './reducers/userReducer'
import messageReducer from './reducers/messageReducer'


const reducer = combineReducers({kibbles: kibbleReducer, user: userReducer, message: messageReducer})
const store = createStore(reducer,applyMiddleware(thunk))
export default store