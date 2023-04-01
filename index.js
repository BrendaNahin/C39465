const formulario = document.getElementById ('formulario')
const inputnombre = document.getElementById ('nombre')
const inputapellido = document.getElementById ('apellido')
const titulo = document.getElementById ('titulo')



formulario.onsubmit = (e)=> {
    e.preventDefault ()

    const infoUsuario =  {
    nombre:inputnombre.value,
    apellido:inputapellido.value
}

localStorage.setItem ('infoUsuario',JSON.stringify (infoUsuario))
formulario.remove ()
titulo.innerText = `Bienvenido ${infoUsuario.nombre} ${infoUsuario.apellido}`
}

const infoUsuario = localStorage.getItem ('infoUsuario')
const infoUsuarioJS = JSON.parse(infoUsuario)
if (infoUsuario) {
    formulario.remove ()
    titulo.innerText = `Bienvenido ${ infoUsuarioJS.nombre} ${ infoUsuarioJS.apellido}`
}


