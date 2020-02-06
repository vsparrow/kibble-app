const messageReducer = (state='',action) => {
	switch(action.message){
		case 'SET_MESSAGE':
			return action.message
		default:
			return state
	}
}

export default messageReducer
export const setMessage = message => dispatch => dispatch({type: 'SET_MESSAGE', message})
 

