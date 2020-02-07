import axios from 'axios'
import errorHandler from './errorHandler'
const baseUrl =  "http://korea-ide-api-3001.run.goorm.io/login"
	  

const login = async ({username,password}) => {
	try{
		const result = await axios.post(baseUrl, {username, password})
		return result.data		
	} catch(error){
		errorHandler(error)
		return null // user is null if not a correct login
	}

}

export default {login}
	  