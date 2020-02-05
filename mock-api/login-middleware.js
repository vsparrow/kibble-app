module.exports = (req,res,next) => {
	if(req.method === 'POST' && req.path === '/login') {
		if(req.body.username === 'a' && req.body.password === 'a'){
			res.status(200).json({name: "Chew Bacca"})
		}
		else {
			res.status(400).json({error: 'wrong username or password'})
		}
	} else {next()}
} 