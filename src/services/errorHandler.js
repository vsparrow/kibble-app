import store from '../store'

const errorHandler = error => {
	console.log('errormessage is', error.message)
	let message = ''
	if(error.message === 'Network Error'){message = 'Error: Please check your network connection'}
	else if(error === 'Request failed with status code 400'){
		message = 'Error: Please check your username or password'
	}
	store.dispatch({type: 'SET_MESSAGE', message})
	setTimeout(()=>{store.dispatch({type: 'SET_MESSAGE', message: ''})},7000)
}

export default errorHandler