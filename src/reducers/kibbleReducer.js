import axios from 'axios'
const baseUrl = "http://korea-ide-api-3001.run.goorm.io/kibbles"

const kibbleReducer = (state=[], action) => {
	switch(action.type){
		case "INIT_KIBBLE":
			return action.data
		case "ADD_KIBBLE":
			const updatedKibbles = state.concat(action.data)
			return updatedKibbles
		default: 
			return state
	}
}

export default kibbleReducer


export const initKibbles = () => {
	return async dispatch => {
		const kibbles = await axios.get("http://korea-ide-api-3001.run.goorm.io/kibbles")
		console.log('kibbles is', kibbles.data)
		dispatch({type: 'INIT_KIBBLE', data: kibbles.data})
	}
}

export const addKibble = kibbleData => {
	return async dispatch => {
		const result = await axios.post(baseUrl,kibbleData)
		console.log('result is',result.data)
		dispatch({type: 'ADD_KIBBLE', data: result.data})
	}
}