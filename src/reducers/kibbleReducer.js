import kibbleService from '../services/kibbles'

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
		const kibbles = await kibbleService.getKibbles()
		if(kibbles){dispatch({type: 'INIT_KIBBLE', data: kibbles})}
	}
}

export const addKibble = kibbleData => {
	return async dispatch => {
		const result = await kibbleService.postKibble(kibbleData)
		dispatch({type: 'ADD_KIBBLE', data: result})
		dispatch({type: 'SET_MESSAGE', message: `Added kibble data for ${result.date} with ${result.amount} grams of kibble.`})		
		setTimeout(()=>{dispatch({type: 'SET_MESSAGE', message: ''})},5000)		
	}
}