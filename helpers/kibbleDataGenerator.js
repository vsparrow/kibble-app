// This function generates kibble data until we have real data
// Units are grams
// Full 382 grams
// Empty 35 grams
// 1/2 day 46 grams
// 1 day change 92 grams

// will generate a json file for use with db.json
// id / date / amount: number / mockdata: bool


    // {
    //   "id": 1,
    //   "date": "2020-02-01",
    //   "amount": "2"
    // },

const generate = ()=>{
	//create db.json object
	const data = { "kibbles": []}
	//starting data
	let id = 0
	let date = new Date(2020,1,7)//feb 7 2 2020 //months are 0-11
	let amount = 382
	for(i=1;i<=90;i++){
		let newDay = { 
			"id": ++id,
			data: new Date( date.getFullYear(), date.getMonth(), date.getDate() - i )			
		}
		data["kibbles"].push(newDay)
	}
	console.log(data)
}
generate()