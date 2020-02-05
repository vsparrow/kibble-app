import React, {useState} from 'react'

const Login = props => {
	const [username,setUsername] = useState('')
	const [password,setPassword] = useState('')
	
	const handleSubmit = e => {
		e.preventDefault()
		const data = {username, password}
		console.log('submit pressed')
		console.log('data', data)
		setUsername('')
		setPassword('')
		//we will need to bring up backend to handle logging in
	}
	
	const handleUsername = e => setUsername(e.target.value)
	const handlePassword = e => setPassword(e.target.value)
	
	return(
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					username:
					<input type="username" value={username} onChange={handleUsername}/>
				</div>
				<div>
					password:
					<input type="password" value={password} onChange={handlePassword}/>
				</div>
				<input type="submit"/>
			</form>
		</div>
	)
}

export default Login