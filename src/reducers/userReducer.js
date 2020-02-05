import loginService from '../services/login'
// import axios from 'axios'
// const baseUrl = "http://korea-ide-api-3001.run.goorm.io/login"

const userReducer = (state=null, action)=>{
	switch(action.type){
		case 'USER_LOGIN':
			return action.user
		default:
			return state
	}
}

export const login = (username,password)=>{
	return async dispatch => {
		const result = await loginService.login({username,password})
		if(result){ //user login successful
			dispatch({type: 'USER_LOGIN', user: result})
		}
	}
}

export default userReducer