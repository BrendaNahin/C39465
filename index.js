/* un usuario elige su zona para calcular su envio */


class Provincia {
    constructor(nombre, zona, codigopostal) {
        this.nombre = nombre
        this.zona = zona
        this.codigopostal = codigopostal

    }

}
const mendoza = new Provincia("mendoza", 'maipu', 5515)
const cordoba = new Provincia("cordoba", 'centro', 5000)
const sanLuis = new Provincia("sanLuis", 'laPunta', 5710)
const buenosAires = new Provincia("buenosAires", 'laPlata', 1900)

/* console.log(mendoza,cordoba,sanluis,buenoaires); */

let provinciaDeseada = parseInt( prompt('Escoge el numero de tu pronvicia. 1.Mendoza - 2.Cordoba - 3.San Luis - 4.Buenos Aires'))

let escogioProvincia = false
let infoprovinciaDeseada 

 
while (escogioProvincia === false) {
    if (provinciaDeseada === 1) {
        escogioProvincia = true
        infoprovinciaDeseada = mendoza
    } else if (provinciaDeseada === 2) {
        escogioProvincia = true
        infoprovinciaDeseada = cordoba
    } else if (provinciaDeseada === 3) {
        escogioProvincia = true
        infoprovinciaDeseada = sanLuis
    } else if (provinciaDeseada === 4) {
        escogioProvincia = true
        infoprovinciaDeseada = buenosAires
    } else { 
        provinciaDeseada = parseInt( prompt('Escoge un numero CORRECTO. 1.Mendoza - 2.Cordoba - 3.San Luis - 4.Buenos Aires'))
    }
}



alert (`El costo de envio de la provincia seleccionada ${infoprovinciaDeseada.nombre} es de: 500` )


console.log ( 'infoprovincia', infoprovinciaDeseada )