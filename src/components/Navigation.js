import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Navigation = (props)=>{
	return(
		<div>
			<Link to="/">Home</Link> |
			<Link to="/addkibble">Add Kibble</Link> |
			<Link to="/about">About</Link> |
			{props.user 
				?  `Welcome ${props.user.name}`
				:  <Link to="/login">Login</Link>
			}
		</div>
	)
}

const mapStateToProps = state => ({user: state.user})
export default connect(mapStateToProps)(Navigation)