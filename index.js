// productos de la tienda 

class producto {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio

    }
}

const funkoPop = new producto(1, 'funkoPop', 700)
const remera = new producto(2, 'remera', 1000)
const pantalon = new producto(3, 'pantalon', 2000)
const delantal = new producto(4, 'delantal', 1500)
const medias = new producto(5, 'medias', 500)
const decoHogar = new producto(6, 'decoHogar', 3500)

const productos = { funkoPop, remera, pantalon, delantal, medias, decoHogar }
console.log(productos)

let productoEscogido = prompt('¿que producto deseas comprar? : funkoPop, remera, pantalon, delantal, medias, decoHogar')

let seguirComprando = true
const carrito = {}

while (seguirComprando === true) {
    const producto = productos.find(
        (producto) => producto.nombre === productoEscogido.toLowerCase().trim()
    )


    if (producto) {
        carrito.push(producto)
    } else {
        productoEscogido = prompt(
            'Por favor, elegir correctamente: funkoPop, remera, pantalon, delantal, medias, decoHogar'
        )
        continue
    }

    const decision = prompt(' ¿Seguimos comprando? si - no ')

    if (decision === 'si') {
        productoEscogido = prompt('¿que producto deseas comprar? : funkoPop, remera, pantalon, delantal, medias, decoHogar')
    } else {
        Seguimoscomprando = false
    }

}

console.log(carrrito);
let totalCompra = 0

carrito.forEach(producto => {
    totalCompra = totalCompra + producto.precio
})
alert('el total de la compra es : ' + totalCompra)
