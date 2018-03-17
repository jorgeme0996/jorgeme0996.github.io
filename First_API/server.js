const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('./MongoClient')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

app.post('/create/student',(req,res)=>{
	const {name,age,program} = req.body
	console.log(name)
	console.log(age)
	console.log(program)
	MongoClient.saveStudent(name,age,program).then(function(student){

		res.send({student})
	})
})

app.get('/v1/api/getStudent/:name/', (req,res) =>{
	const {name}= req.params
	MongoClient.findStudent(name).then (function(student){
		res.send (student)
	})
})

app.post('/create/user/',(req,res)=>{
	const {name,username,password} = req.body
	console.log(name)
	console.log(username)
	console.log(password)
	MongoClient.saveUser(name,username,password).then(function(user){

		res.send({user})
	})
})

app.post('/login/user/', (req,res) =>{
	const {username,password}= req.body
	MongoClient.findUser(username,password).then 
	(function(login){
		if (login.length==0){ 
			res.send("Contraseña o usuario invalido")
	 }  else {
		res.send (login)
		console.log ("se encontro al usuario")
	 }
	})
})

app.listen(3000, () => console.log(`Listening on port 3000`));