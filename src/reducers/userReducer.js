import loginService from '../services/login'
// import axios from 'axios'
// const baseUrl = "http://korea-ide-api-3001.run.goorm.io/login"

const userReducer = (state=null, action)=>{
	switch(action.type){
		case 'USER_LOGIN':
			return action.user
		case 'USER_LOGOUT':
			return null
		default:
			return state
	}
}

export const login = (username,password)=>{
	return async dispatch => {
		const result = await loginService.login({username,password})
		if(result){ //user login successful
			dispatch({type: 'SET_MESSAGE', message: ''})
			dispatch({type: 'USER_LOGIN', user: result})			
			return 1
		}
		else {
			dispatch({type: 'SET_MESSAGE', message: 'Invalid username or password'})
			return 0
		}
	}
}

export const logout = () => dispatch => dispatch({type: 'USER_LOGOUT'})

export default userReducer