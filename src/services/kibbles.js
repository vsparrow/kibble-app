import axios from 'axios'
const baseUrl = "http://korea-ide-api-3001.run.goorm.io/kibbles"

const getKibbles = async () => {
	const result = await axios.get(baseUrl)
	return result.data
}

export default {getKibbles}