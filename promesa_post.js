var request = require('request')
URL_BASE = "https://goodreads-devf-aaron.herokuapp.com/api/v1"
URI = "/authors/"
URL = URL_BASE + URI,

json_send = {
    "name": "Jorge",
    "last_name": "Martinez",
    "nacionalidad": "MX",
    "biography": "Mi master",
    "gender": "M",
    "age":21
}

function promesapost(){  // funcion para la promesa

	return new Promise(function(resolve,reject){

	request.post({url:URL, form: json_send}, function (error, status, body){
		if (status.statusCode==201) {
			resolve(JSON.parse(body))
		} else {
			reject("Error")
		}
	});
}); 

}// funcion para la promesa


function promesaget(urlnueva){

	return new Promise(function(resolve,reject){

	request.get(urlnueva,function(error,status,response){
		if (status.statusCode==200) {
			resolve(JSON.parse(response))
		} else {
			reject("Error")
		}
	});
});

}

function promesapatch(urlnueva){  // funcion para la promesa
	var json_patch = {"name":"Carlitos", "last_name":"Perez", "age":30
	}
	return new Promise(function(resolve,reject){

	request.patch({url:urlnueva, form: json_patch}, function (error, status, body){
		if (status.statusCode==200) {
			resolve(JSON.parse(body))
		} else {
			reject("Error")
		}
	});
}); 

}// funcion para la promesa



	promesapost() //sacar la promesapost
	.then(function(body){
		var urlnueva= URL + body.id + '/'
		console.log(body)
		console.log(urlnueva)


	 promesaget(urlnueva) //sacar la promesaget
	 .then(function(body){
		console.log(body)
	}).catch(function(error){
		console.log(error)
	}) //sacar la promesaget

	promesapatch(urlnueva) //sacar la promesapatch
	 .then(function(body){
		console.log(body)
	}).catch(function(error){
		console.log(error)
	}) //sacar la promesapatch


	}).catch(function(error){
		console.log(error)
	}) //sacar la promesapost