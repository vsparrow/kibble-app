import axios from 'axios'
import errorHandler from './errorHandler'
const baseUrl = "http://korea-ide-api-3001.run.goorm.io/kibbles"

const getKibbles = async () => {
	try{
		const result = await axios.get(baseUrl)
		return result.data		
	} catch(error) { 
		errorHandler(error)
		return null
	}

}

const postKibble = async kibbleData => {
	const result = await axios.post(baseUrl, kibbleData)
	return result.data
}

export default {getKibbles, postKibble}