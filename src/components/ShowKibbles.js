import React, {useState} from 'react'
import {connect} from 'react-redux'



const ShowKibble = props => {	
	const [selection, setSelection] = useState("raw")
	
	//extract to sub componenets
	const getRaw = data => 	{
		return(
			<ul>
				{data.sort((a,b)=>b.id-a.id).map(k=><li key={k.id}>{k.date} {k.amount}</li>)}
			</ul>)
	}
	const displaySelection = () => {
		switch(selection){
			case "raw":
				return getRaw(props.kibbles)
			case "daily-text":
				return "RENDER HERE"
		}
	}
	
	const handleChange = event => setSelection(event.target.value)
	
	return(
		<div>
		 Show Kibble info here
		<h2>kibble data</h2>
			<select onChange={handleChange}>
				<option value="raw" >Raw Data</option>
				<option value="daily-text" >Daily amount consumed - text</option>
			</select>	
			{displaySelection()}
		</div>
	)
}

const mapStateToProps = state => ({kibbles: state.kibbles})
export default connect(mapStateToProps)(ShowKibble)