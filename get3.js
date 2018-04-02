/*
const request = require("request");
const url = "https://maps.googleapis.com/maps/api/geocode/json?address=Nayarit,12,Aculco,CiudaddeMexico";
request.get(url, (error, response, body) => {
    let json = JSON.parse(body);
    console.log(
        `Ciudad: ${json.results[0].formatted_address} \n`,
        `Latitud: ${json.results[0].geometry.location.lat} \n`,
        `Longitud: ${json.results[0].geometry.location.lng}`
    );
});
*/

/*
const request = require("request");
const url = "https://swapi.co/api/people/1/";
request.get(url, (error, response, body) => {
    let json = JSON.parse(body);
    console.log(
        `Nombre: ${json.name} \n`,
        `Cumpleaños: ${json.birth_year} \n`,
    );
});
*/

const request = require("request");
const url = "http://pokeapi.co/api/v2/pokemon/135/";
request.get(url, (error, response, body) => {
    let json = JSON.parse(body);
    console.log(
        `Nombre: ${json.forms[0].name} \n`,
        `Peso: ${json.stats.weight} \n`,
        `1ra Abilidad: ${json.abilities[0].ability.name} \n`,
        `2da Abilidad: ${json.abilities[1].ability.name} \n`,
    );
});