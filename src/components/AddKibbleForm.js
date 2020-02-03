import React, {useState} from 'react'

const AddKibbleForm = (props)=>{
	
	const handleSubmit = (e)=>{
		e.preventDefault()
		console.log("Thanks ofr submitting")
	}
	
	const getToday = ()=>{
		const date = new Date()
		const year = date.getFullYear()
		const month = date.getMonth()+1 //month returns as 0-11
		const day = date.getDate() //return type of month and day is number
		const today = `${year}-${month<10 ? '0'+month : month}-${day<10 ? '0'+day : day}`
		return today		
	}
	
	//no need for redux with this, internal state
	const [date, setDate] = useState(getToday())

	const changeDate = (e)=>{
		console.log(e.target.value)
		setDate(e.target.value)
	}
	
	return(
		<form onSubmit={handleSubmit}>
			<div>
				Date
				<input 
					type="date"
					id="date"
					name="date"
					value = {date}
					min="2020-02-01"
					max="2042-02-01"
					onChange={changeDate}
				/>			
			</div>
			<div>
				Quantity
				<input type="text" id="quantity" name="quantity"/>
			</div>
			<input type="submit" value="Submit"/>
		</form>
	)
}

export default AddKibbleForm