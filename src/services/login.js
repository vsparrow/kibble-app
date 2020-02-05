import axios from 'axios'
const baseUrl =  "http://korea-ide-api-3001.run.goorm.io/login"
	  
const login = async ({username,password}) => {
	try{
		const result = await axios.post(baseUrl, {username, password})
		console.log('result is', result)
		return result.data		
	} catch(error){
		return null // user is null if unsucccessful login
	}

}

export default {login}
	  