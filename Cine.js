class Pelicula { // Abres clases o funciones

	constructor (duracion,name){ // crear un constructor

		this.name = name
		this.duracion = duracion
		//console.log ("Se creo una pelicula")

	} // crear un constructor

		getName(){

		return this.name 
	}

    setName(newName){

		 this.name = newName
	}

	getDuracion(){

		return this.duracion 
	}

    setDuracion(newDuracion){

		 this.duracion = newDuracion
	}

	reproducir(){

		return "Se empezo a reproducir: "+this.name+" dura: "+this.duracion
	}

} 

class Terror extends Pelicula{

	constructor (name,duracion,tipo){

		super (name,duracion)
		this.tipo = tipo
	}

	getTipo(){

		return this.tipo
	}

    setTipo(newTipo){

		 this.tipo = newTipo
	}

	categoriza(){

		return "La pelicula "+this.name+" es de tipo: "+this.tipo
	}
}

class Animada extends Pelicula{

	constructor (cdcdccxdsCsdname,duracion,tipo){

		super (name,duracion)
		this.tipo = tipo
	}

	getTipo(){

		return this.tipo
	}

    setTipo(newTipo){

		 this.tipo = newTipo
	}

	categoriza(){

		return "La pelicula "+this.name+" es de tipo: "+this.tipo
	}
}

var nemo = new Animada (1.5,"Buscanco a Nemo","Animada")
//console.log (nemo)
var eso = new Terror (3,"Eso","Terror")
//console.log (eso)

function reproducirpeli(Pelicula){
	console.log(Pelicula.reproducir())
}

reproducirpeli (eso)

