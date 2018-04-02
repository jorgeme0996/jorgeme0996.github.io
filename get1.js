var request = require("request")

request ("https://www.google.com.mx/", function(error, response,body){

console.log(body)

})