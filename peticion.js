var request = require ('request');

request.get ('https://swapi.co/api/people/1/', 
	function(error,response,body){
	console.log ('error',error)
	console.log ('response',response.statusCode)
	console.log ('body',body)
})