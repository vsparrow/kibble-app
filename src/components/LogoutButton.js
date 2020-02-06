import React from 'react'
import {connect} from 'react-redux'
import {logout} from '../reducers/userReducer'

const LogoutButton = props => {
	const handleClick = () => props.logout()
	return(
		<button onClick={handleClick}>Logout</button>
	)
}

const mapDisatchToProps = {logout}
export default connect(null,mapDisatchToProps)(LogoutButton)