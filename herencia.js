class Animal { // Abres clases o funciones

	constructor (name,peso=0){ // crear un constructor

		this.name = name
		this.peso = peso
		console.log ("Se creo un animal")

	} // crear un constructor

	getName(){

		return this.name 
	}

    setName(newName){

		 this.name = newName
	}

	comer(comida){

		return this.name+" esta comiendo "+ comida
	}

} // Abres clases o funciones


class Perro extends Animal{

	constructor (raza,name,peso){

		super (name,peso)
		this.raza = raza 
	}

	getRaza(){

		return this.raza
	}

    setRaza(newRaza){

		 this.raza = newRaza
	}

	correr(){

		return "El "+this.raza+" esta corriendo"
	}
}

class Pajaro extends Animal{

	constructor (especie,name,peso){

		super (name,peso)
		this.especie = especie 
	}

	getEspecie(){

		return this.especie
	}

    setEspecie(newEspecie){

		 this.especie = newEspecie
	}

	vuela(){

		return "El "+this.name+" esta volando" 
	}
}

function hacerRuido (Animal) {

 console.log

}



/*
var petirojo = new Pajaro ("Petirojo","Alas",16)
console.log (petirojo)
console.log (petirojo.vuela())
console.log (petirojo.comer("Alpiste"))

var husky = new Perro ("Husky","Peyton",56)
console.log (husky)
console.log (husky.correr())
console.log (husky.comer("Pollo"))
*/