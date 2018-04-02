var request = require('request')
URL_BASE = "https://goodreads-devf-aaron.herokuapp.com/api/v1"
URI="/authors/"
URL=URL_BASE + URI

request.get(URL, function (error, response, body){
	let json = JSON.parse(body);
	for (i=0;i<json.length;i++){
		if(json[i].id==133){
			console.log(json[i].name, json[i].last_name)
			console.log(json[i])
		}
			
	}
	
}	)