import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import LogoutButton from './LogoutButton'

const Navigation = (props)=>{
	return(
		<div>
			<Link to="/">Home</Link> |
			{props.user ? <Link to="/addkibble">Add Kibble</Link> : null} | 
			<Link to="/about">About</Link> |
			{props.user ? <LogoutButton /> :  <Link to="/login">Login</Link>}
			{props.user ? <div>Welcome {props.user.name}</div> : null}
		</div>
	)
}

const mapStateToProps = state => ({user: state.user})
export default connect(mapStateToProps)(Navigation)