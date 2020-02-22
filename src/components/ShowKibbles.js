import React, {useState} from 'react'
import {connect} from 'react-redux'
import Chart from './Chart'


const ShowKibble = props => {	
	// const [selection, setSelection] = useState("raw")
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
		console.log(data)
		const newData = []
		for(let i=1;i<data.length;i++){
			if(data[i].amount < data[i-1].amount){ //meaning data[i] is not a refill
				const dailyConsumed = data[i-1].amount - data[i].amount
				const date = data[i].date
				const keyId = i
				newData.push({dailyConsumed,date,keyId})								
			}			
		}	
		// console.log(typeof newData[0].date)
		// console.log(new Date(newData[0].date))
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