import React, {useState} from 'react'
import {connect} from 'react-redux'


const ShowKibble = props => {	
	const [selection, setSelection] = useState("daily-text")
	// {data.sort((a,b)=>b.id-a.id).map(k=><li key={k.id}>{k.date} {k.amount}</li>)}
	//extract to sub componenets
	const getRaw = data => 	{
		return(
			<ul>				
				{data.map(k=><li key={k.id}>{k.date} {k.amount}</li>)}
			</ul>)
	}
	
	const dailyKibblesEaten = data => { 
		const newData = []
		const sortedData = data.sort((a,b)=>b.id-a.id)
		for(let i=1;i<sortedData.length;i++){
			if(sortedData[i].amount < sortedData[i-1].amount){ //meaning sortedData[i] is not a refill
				const dailyConsumed = sortedData[i-1].amount - sortedData[i].amount
				const date = sortedData[i].date
				const keyId = i
				newData.push({dailyConsumed,date,keyId})								
			}			
		}	
		return <ul>{newData.map(d=><li key={d.keyId}>{d.date} {d.dailyConsumed}</li>)}</ul>
	}
	
	const displaySelection = () => {
		switch(selection){
			case "raw":
				return getRaw(props.kibbles)
			case "daily-text":
				return dailyKibblesEaten(props.kibbles)
		}
	}
	
	const handleChange = event => setSelection(event.target.value)
	
	return(
		<div>
		 Show Kibble info here
		<h2>kibble data</h2>
			<select onChange={handleChange}>
				<option value="daily-text" >Daily amount consumed - text</option>
				<option value="raw" >Raw Data</option>
			</select>	
			{displaySelection()}
		</div>
	)
}

const mapStateToProps = state => ({kibbles: state.kibbles})
export default connect(mapStateToProps)(ShowKibble)