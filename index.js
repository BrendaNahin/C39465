const divProductos = document.getElementById ('productos')
const botonFinalizarcompra =document.getElementById ('finalizarcompra')


const fetchProducts = async()=>{
    const productsApi = await fetch ('https://fakestoreapi.com/products')
    const productsJSON = await productsApi.json()
    return productsJSON
}

const fetchOneProduct = async(id)=> { 
    const productApi = await fetch (`https://fakestoreapi.com/products${id} `)
    const productJSON = await productApi.json()
    return productJSON
}

const renderProducts = async()=>{
    const products = await fetchProducts()
    products.forEach((prod) => {
        const {id, title, price, category, image} = prod
        divProductos.innerHTML += `
        <div class="card cardProducto">
  <img src=${image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${price} ${category}</p>
    <button id=${id} onclick="addProduct (${id})" >AGREGAR</button> 
  </div>
</div>
     `
 }  )
}

renderProducts()

const carrito = []

const addProduct = async (id)=> {
    const product = await fetchOneProduct (id)
     const searchProductCarrito = carrito.find((prod) =>prod.id === product.id)
     if (!searchProductCarrito) {
        carrito.push({
            id: product.id,
            name: product.title,
            quantity:1,
            price: product.price,
        })

     } else {
        searchProductCarrito.quantity++
     }
     console.log (carrito)
}

const messageAddProduct =  ()=> { 
    Swal.fire ({
        text: 'product added',
        timer: 1000,
    })
}