const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('./MongoClient')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.post('/create/state ',(req,res)=>{
	const {name,fecha,cantper} = req.body
	console.log(name)
	console.log(fecha)
	console.log(cantper)
	MongoClient.saveEvent(name,fecha,cantper).then(function(event){

		res.send({event})
	})
})

app.get('/getEvents', (req,res) =>{
	MongoClient.findEvent().then (function(event){
		res.send (event)
	})
})

app.post('/reg/asistente/',(req,res)=>{
	const{name,asistentes} = req.body
	MongoClient.Reg_Asistente(name,asistentes).then(
		function(regasistente){
		res.send({regasistente})
	})
 })

// app.post('/create/user/',(req,res)=>{
// 	const {name,username,password} = req.body
// 	console.log(name)
// 	console.log(username)
// 	console.log(password)
// 	MongoClient.saveUser(name,username,password).then(function(user){

// 		res.send({user})
// 	})
// })

// 

// app.get('',(req,res) =>{
// 	res.send('Hola mundo')
// })

// app.get('/api/:uuid',(req,res) =>{
// 	const {uuid} = req.params
// 	res.send({uuid})
// })

// app.post('/v1/api/post',(req,res) => {
// 	const data = typeof req.body == 'string' ?
// 	 JSON.parse(req.body) : req.body;
// 	res.status(201).json({La_suma_total_es:'suma'})
// })


app.listen(3000, () => console.log(`Listening on port 3000`));