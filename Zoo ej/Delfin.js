var delfin = require('./Marino')

class Delfin extends delfin.Marino{
	constructor(raza,name,peso,tipo){
		super(name,peso,tipo)
		this.raza = raza
		console.log ("Se creo un delfin")
	}

	getRaza(){
		return this.raza
	}

	setRaza(newRaza){
		this.raza = newRaza
	}

}

module.exports.Delfin = Delfin