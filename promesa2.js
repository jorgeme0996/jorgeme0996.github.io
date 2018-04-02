var request = require ('request');
var i=1


for (var i = 1; i <=1; i++) {
	
	var url = 'https://swapi.co/api/people/'+i+'/'
	// console.log(url)

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

function promesa3(urlnueva1){

	return new Promise(function(resolve,reject){

	request.get(urlnueva1,function(error,status,response){
		if (status.statusCode==200) {
			resolve(JSON.parse(response))
		} else {
			reject("Error")
		}
	});
});

}

function promesa4(urlnueva2){

	return new Promise(function(resolve,reject){

	request.get(urlnueva2,function(error,status,response){
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
		console.log("Nombre: "+body.name)
		console.log("Altura: "+body.height)
		var urlnueva=body.species[0]
		var urlnueva2=body.films[i]
		var urlnueva1=body.homeworld
		promesa2(urlnueva)
	.then(function(body){
		console.log("Especie: "+body.name)
	}).catch(function(error){
		console.log(error)
	})

		promesa3(urlnueva1)
	.then(function(body){
		console.log("Planeta natal: "+body.name)
	}).catch(function(error){
		console.log(error)
	})

		promesa4(urlnueva2)
	.then(function(body){
		console.log("Pelicula: "+body.title)
	}).catch(function(error){
		console.log(error)
	})

	}).catch(function(error){
		console.log(error)

	})




};