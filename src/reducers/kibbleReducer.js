import axios from 'axios'

const kibbleReducer = (state=[], action) => {
	switch(action.type){
		case "INIT_KIBBLE":
			return action.data
		default: 
			return state
	}
}

export default kibbleReducer


export const getKibbles = () => {
	return async dispatch => {
		const kibbles = await axios.get("http://korea-ide-api-3001.run.goorm.io/kibbles")
		console.log('kibbles is', kibbles.data)
		dispatch({type: 'INIT_KIBBLE', data: kibbles.data})
	}
}

