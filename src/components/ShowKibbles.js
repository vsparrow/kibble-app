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
	
	const stringToDate = string => {
		console.log(typeof string)
		console.log(string)
		console.log(Date.parse(string))
		console.log( (new Date(string)).toString())
		const d = new Date(string)
		console.log(d.getFullYear())
		console.log(d.getMonth()+1)
		console.log(d.getDate())
		console.log(d.getTimezoneOffset()) // returns minutes offset -300 is -GMT 5
	}
	
	const dailyKibblesEaten = data => { 
		const newData = []
		// const sortedData = data.sort((a,b)=>b.id-a.id)
		for(let i=1;i<data.length;i++){
			if(data[i].amount < data[i-1].amount){ //meaning data[i] is not a refill
				const dailyConsumed = data[i-1].amount - data[i].amount
				const date = data[i].date
				stringToDate(date)
				const keyId = i
				newData.push({dailyConsumed,date,keyId})								
			}			
		}
		//reverse is needed to display data newest first
		return <ul>{newData.reverse().map(d=><li key={d.keyId}>{d.date} {d.dailyConsumed}</li>)}</ul>
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