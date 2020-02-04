import React from 'react'
import {Link} from 'react-router-dom'


const Navigation = (props)=>{
	// return(<div>Home | Add Kibble | About | Login</div>)
	return(
		<div>
			<Link to="/">Home</Link> |
			<Link to="/addkibble">Add Kibble</Link> |
			<Link to="/about">About</Link> |
			<Link to="/login">Login</Link>
		</div>
	)
}

export default Navigation