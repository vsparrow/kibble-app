import React, {useEffect, useState} from 'react'
import axios from 'axios'

const ShowKibble = props => {
	const [kibbles, setKibbles] = useState([])
	
	useEffect(()=>{
		(async ()=>{
			const result = await axios.get("http://korea-ide-api-3001.run.goorm.io/kibbles")
			// console.log(result.data)
			setKibbles(result.data)
		})()
	},[])
	
	return(
		<div>
		 Show Kibble info here
		<h2>kibble data</h2>
		<ul>
			{kibbles.map(k=><li key={k.id}>{k.date} {k.amount}</li>)}
		</ul>	
		</div>
	)
}

export default ShowKibble