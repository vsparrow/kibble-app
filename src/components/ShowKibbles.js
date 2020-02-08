import React from 'react'
import {connect} from 'react-redux'

const ShowKibble = props => {	
	return(
		<div>
		 Show Kibble info here
		<h2>kibble data</h2>
		<ul>
			{props.kibbles.sort((a,b)=>b.id-a.id).map(k=><li key={k.id}>{k.date} {k.amount}</li>)}
		</ul>	
		</div>
	)
}

const mapStateToProps = state => ({kibbles: state.kibbles})
export default connect(mapStateToProps)(ShowKibble)