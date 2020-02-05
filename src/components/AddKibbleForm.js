import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addKibble} from '../reducers/kibbleReducer'
import {withRouter} from 'react-router-dom'

const AddKibbleForm = (props)=>{
	
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
	const [amount, setAmount] = useState('')
	
	const changeDate = e => setDate(e.target.value)
	
	const handleQuantity = e => {	
		const regex = /[1234567890.]+/g // update this later to be dd\.dd
		let input = e.target.value.match(regex)
		setAmount(input === null ? '' : input)
	}
	
	const handleSubmit = (e)=>{
		e.preventDefault()
		const kibbleData = {date, amount: Number(amount)}
		props.addKibble(kibbleData)
		setDate(getToday())
		setAmount('')
		props.history.push('/')
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
				<input type="text" id="quantity" name="quantity" onChange={handleQuantity} value={amount} placeholder="enter amount"/>
			</div>
			<input type="submit" value="Submit"/>
		</form>
	)
}

const mapDispatchToProps = {addKibble}
export default connect(null,mapDispatchToProps)(withRouter(AddKibbleForm))