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
	
	// <--------------------------------------------------problem is that incoming data is sorted by newest first
	//so manipulate that data as it comes in. sort by date.
	//****************
	const dailyKibblesEaten = data => { 
		console.log(data)
		const newData = []
		// const dataSortByDate = data.sort((a,b)=>a.date-b.date)
		// console.log("dataSortByDate",dataSortByDate)
		for(let i=1;i<data.length;i++){
			if(data[i].amount < data[i-1].amount){ //meaning data[i] is not a refill
				// const dailyData = <li key={i}>{data.date} {data[i-1].amount-data[i].amount}</li>
				const dailyData = data[i-1].amount-data[i].amount
				newData.push(dailyData)
			}
			// newData.push			
		}	
		// return "???????????????"
		console.log(newData)
		return (<ul>{newData.map(d => <li>{d}</li>)}</ul>)
	}
	
	const displaySelection = () => {
		switch(selection){
			case "raw":
				return getRaw(props.kibbles)
			case "daily-text":
				// return "RENDER HERE"
				return dailyKibblesEaten(props.kibbles)
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