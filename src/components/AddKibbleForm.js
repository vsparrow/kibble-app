import React from 'react'

const AddKibbleForm = (props)=>{
	const handleSubmit = (e)=>{
		e.preventDefault()
		console.log("Thanks ofr submitting")
	}
	
	return(
		<form onSubmit={handleSubmit}>
			<div>
				Date
				<input 
					type="date"
					id="date"
					name="date"
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