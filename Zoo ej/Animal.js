class Animal{
	constructor(name,peso=0){
		this.name = name
		this.peso = peso
		console.log("Se creo un animal")
	}

	getName(){
		return this.name
	}

	setName(newName){
		this.name = newName
	}

	comer(comida){
		return 'El ' + this.name + ' esta comiendo ' + comida 
	}
}

module.exports.Animal = Animal