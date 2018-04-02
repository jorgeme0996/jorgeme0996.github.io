var request = require ('request');

var url = 'https://swapi.co/api/people/1/'

/*
const promise = new Promise(function(resolve,reject){

	request.get(url,function(error,status,response){
		if (status.statusCode==200) {
			resolve(JSON.parse(response))
		} else {
			reject("Error")
		}
	});
 });
*/

function promesa(){

	return new Promise(function(resolve,reject){

	request.get(url,function(error,status,response){
		if (status.statusCode==200) {
			resolve(JSON.parse(response))
		} else {
			reject("Error")
		}
	});
});

}


function promesa2(urlnueva){

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



promesa()
	.then(function(body){
		console.log(body.name)
		console.log(body.height)
		var urlnueva=body.species[0]
		console.log (urlnueva)
		promesa2(urlnueva)
	.then(function(body){
		console.log(body.name)
	}).catch(function(error){
		console.log(error)
	})


	}).catch(function(error){
		console.log(error)

	})






/*
console.log("1")
var name = "Hola"
request.get(url,function (error,status,response){
	response=JSON.parse (response);
	name = response.name
	//console.log (status.statusCode)
	console.log ("dentro"+name)
	console.log(name)
})

 console.log(name)
 console.log("2")
 */