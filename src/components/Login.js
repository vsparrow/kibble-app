import React, {useState} from 'react'
import {connect} from 'react-redux'
import {login} from '../reducers/userReducer'
import {withRouter} from 'react-router-dom'
const Login = props => {
	const [username,setUsername] = useState('')
	const [password,setPassword] = useState('')

	const  handleSubmit = async (e) => {
		e.preventDefault()
		setUsername('')
		setPassword('')
		const result = await props.login(username,password) 
		if(result){props.history.push('/') } //login was successfull
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

const mapStateToProps = state => ({user: state.user, message: state.message})
const mapDispatchToProps = {login}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login))