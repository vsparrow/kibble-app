const fs = require('fs')
const path = require('path')
// This function generates kibble data until we have real data
// Units are grams
// Full 382 grams
// Empty 35 grams
// 1/2 day 46 grams
// 1 day change 92 grams

// will generate a json file for use with db.json
// id / date / amount: number / mockdata: bool

const generate = ()=>{
	//create db.json object
	const data = { "kibbles": []}
	//starting data
	let id = 0
	let date = new Date(2020,1,7)//feb 7 2 2020 //months are 0-11
	let amount = 382
	let counter = 0; let newDate; let newDay;
	while(counter <90){
		newDate = new Date( date.getFullYear(), date.getMonth(), date.getDate() - counter )	
		amount = amount -92 //average day change of kibble
		newDay = { "id": ++id,date: newDate, amount , }
		data["kibbles"].push(newDay)
		counter++
		//this emulates refilling the kibble bowl
		if(amount < 92){
			amount = 392
			newDay = { "id": ++id,date: newDate, amount	}
			data["kibbles"].push(newDay)
		}
	}
	const jsonData = JSON.stringify(data)
	console.log(jsonData)
	fs.writeFile(__dirname + '/../db.json',jsonData, err=>{if(err){console.log(err)}})
}
generate()