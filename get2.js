var request = require("request")

request({

uri: "https://www.google.com.mx/"
method: "GET"
timeout: 10000
followRedirects: true,
maxRedirects: 10

}, function(error, response, body){

	console.log (response)

})