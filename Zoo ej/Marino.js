var marino = require ('./Animal')

class Marino extends marino.Animal{

	constructor (name,peso,tipo){

		super (name,peso)
		this.tipo = tipo
		console.log ("Se creo marino")
	}

	getTipo(){

		return this.tipo
	}

    setTipo(newTipo){

		 this.tipo = newTipo
	}

      nadar(){
		return `El marino de la raza ${this.raza} esta nadando`
	}
}

module.exports.Marino = Marino