import React from 'react'

const LogoutButton = props => {
	const handleClick = () => {
		console.log('logout button clicked')
	}
	
	return(
		<button onClick={handleClick}>Logout</button>
	)
}

export default LogoutButton