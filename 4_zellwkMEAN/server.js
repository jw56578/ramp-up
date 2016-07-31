const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function(){
	console.log('listening on 3000')
})

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html')
})

// Note: request and response are usually written as req and res.

app.post('/quotes', function(req, res){
	db.collection('quotes'.save(req.body, function(err, result){
		if(err) return console.log(err)

		console.log('saved to database')
		res.redirect('/')
	}))
})


MongoClient.connect('mongodb://<dbuser>:<dbpassword>@ds015942.mlab.com:15942/mean-beginner', function (err, database) {
	if (err) return console.log(err)
	db = database
	app.listen(3000, function() {
		console.log('listening on 3000')
	})
})