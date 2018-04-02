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

module.exports.Animal = Animal