import axios from 'axios'
const baseUrl = "http://korea-ide-api-3001.run.goorm.io/login"
// const baseUrl = "http://korea-ide-eassj.run.goorm.io/login"

const userReducer = (state=null, action)=>{
	switch(action.user){
		default:
			return state
	}
}

export const login = (username,password)=>{
	return async dispatch => {
		const result = await axios.post(baseUrl,{username,password})
		console.log('userReducer',result.data)
	}
}

export default userReducer