var request = require('request')
URL_BASE = "https://goodreads-devf-aaron.herokuapp.com/api/v1"
URI = "/authors/"
ID= "135"
URL = URL_BASE + URI,

json_send = {
    "name": "Jorge",
    "last_name": "Martinez",
    "nacionalidad": "MX",
    "biography": "Mi master",
    "gender": "M",
    "age":21
}

request.post({url:URL, form: json_send}, function (error, response, body){
    console.log(body.id)
})