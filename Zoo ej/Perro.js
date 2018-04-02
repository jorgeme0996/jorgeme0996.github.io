var perro = require('./Terrestres')

class Perro extends perro.Terrestres{
	constructor(raza,name,peso,tipo){
		super(name,peso,tipo)
		this.raza = raza
		console.log ("Se creo un perro")
	}

	getRaza(){
		return this.raza
	}

	setRaza(newRaza){
		this.raza = newRaza
	}

	
}

module.exports.Perro = Perro