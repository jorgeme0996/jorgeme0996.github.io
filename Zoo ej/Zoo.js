var perro = require('./Perro')

var pug = new perro.Perro("Pug","Fido",40, "terrestre")
console.log(pug)

console.log (pug.correr())



var delfin = require('./Delfin')

var blanco = new delfin.Delfin("Blanco","Winter",100, "marino")
console.log(blanco)

console.log (blanco.nadar())

var list = [pug,delfin] 

function jaulaTerrestres(liistAnimales){
	var listTerrestres =[]
	for (var i=0; i<liistAnimales.length;i++){

		var animal = liistAnimales[i]
		if (animal.tipo=="terrestre"){
			listTerrestres.push(animal)
		}
	}

	return listTerrestres
}

var x= jaulaTerrestres (list)
console.log (x )