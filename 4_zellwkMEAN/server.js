const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function(){
	console.log('listening on 3000')
})

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html')
})

// Note: request and response are usually written as req and res.

app.post('/quotes', function(req, res){
	//console.log('Hellooooooooooooo!') 
	console.log(req.body)
})
