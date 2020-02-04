import React from 'react'

const Login = props => {
	
	const handleSubmit = e => {
		e.preventDefault()
		console.log('submit pressed')
	}
	
	return(
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					username:
					<input type="username"/>
				</div>
				<div>
					password:
					<input type="password"/>
				</div>
				<input type="submit"/>
			</form>
		</div>
	)
}

export default Login