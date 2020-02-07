import loginService from '../services/login'

const userReducer = (state=null, action)=>{
	switch(action.type){
		case 'USER_LOGIN':
			return action.user
		case 'LOCAL_LOGIN':
			return action.user
		case 'USER_LOGOUT':
			return null
		default:
			return state
	}
}

export const login = (username,password)=>{
	return async dispatch => {
		const user = await loginService.login({username,password})
		if(user){ //user login successful
			window.localStorage.setItem('kibbleAppUser', JSON.stringify(user))
			dispatch({type: 'SET_MESSAGE', message: ''})
			dispatch({type: 'USER_LOGIN', user})			
			return 1
		}
		else {
			// dispatch({type: 'SET_MESSAGE', message: 'Invalid username or password'})
			// setTimeout(()=>{dispatch({type: 'SET_MESSAGE', message: ''})},5000)
			return 0
		}
	}
}

export const localStorageLogin = user => dispatch => dispatch({type: 'LOCAL_LOGIN', user})

export const logout = () => dispatch => {
	window.localStorage.removeItem('kibbleAppUser')
	dispatch({type: 'USER_LOGOUT'})
}

export default userReducer