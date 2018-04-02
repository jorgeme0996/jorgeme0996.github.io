var terrestre = require ('./Animal')

class Terrestres extends terrestre.Animal{

	constructor (name,peso,tipo){

		super (name,peso)
		this.tipo = tipo
		console.log ("Se creo terrestre")
	}

	getTipo(){

		return this.tipo
	}

    setTipo(newTipo){

		 this.tipo = newTipo
	}

	 correr(){
		return `El terrestre de la raza ${this.raza} esta corriendo`
	}
}

module.exports.Terrestres = Terrestres
