import React from 'react'

const AddKibbleForm = (props)=>{
	const handleSubmit = (e)=>{
		e.preventDefault()
		console.log("Thanks ofr submitting")
	}
	
	const date = new Date()
	const year = date.getFullYear()
	const month = date.getMonth()+1 //month returns as 0-11
	const day = date.getDate() //return type of month and day is number
	const today = `${year}-${month<10 ? '0'+month : month}-${day<10 ? '0'+day : day}`
	console.log(today)
	return(
		<form onSubmit={handleSubmit}>
			<div>
				Date
				<input 
					type="date"
					id="date"
					name="date"
					value = "2020-02-03"
					min="2020-02-01"
					max="2042-02-01"
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