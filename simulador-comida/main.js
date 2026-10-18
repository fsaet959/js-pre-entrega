// definir clase

class Hamburguesa {
    constructor(id, nombre, precioInicial, ingredientes) {
        this.id = id
        this.nombre = nombre
        this.precioInicial = precioInicial
        this.ingredientes = ingredientes
        this.precioTotal = precioInicial
    }
   
// IVA y desc


sumarIva(porcentajeIva) {
    this.precioTotal = this.precioTotal * (1 + porcentajeIva/100)
}

aplicarDescuento(porcentajeDescuento) {
    this.precioTotal = this.precioTotal - (this.precioTotal *(porcentajeDescuento / 100))
}
}

// funcion 1
function saludar(nombre) { 
    alert("Bienvenido/a a BK, " + nombre)
}

// funcion de reporte 

function mostrarIngredientes(lista) {

    console.log("Ingredientes incluidos en el menu: ")
    for (const ingrediente of lista) {
      console.log("* " + ingrediente)
  }
}


// instancias (id, nombre, precioInicial, ingredientes) 

const hamburguesaSimple = new Hamburguesa(1001,"Hamburguesa simple", 5, ["pan", "hamburguesa"])
const hamburguesaQueso = new Hamburguesa(1002, "Hamburguesa con queso", 6, ["pan", "hamburguesa", "queso"])
const hamburguesaBacon = new Hamburguesa (1003, "Hamburguesa con panceta y queso", 8, ["pan", "hamburguesa", "queso", "panceta"])
const hamburguesaCompleta = new Hamburguesa(1004, "Hamburguesa completa", 10, ["pan", "hamburguesa", "queso", "tomate", "huevo"])


let seguir = true

while (seguir) {

saludar(prompt("Escribi tu nombre:"))

console.log("Resumen de tu pedido: ")
let opcionValida = false
let hamburguesa
let hamburguesaSeleccionada = null

// ciclo que se repite si la opcion no es valida

do {
 hamburguesa = parseInt(prompt("Preparemos tu pedido, Nuestro menu: \n" + "1)Hamburguesa Simple. Precio: $5\n" + "2)Hamgurguesa con queso. Precio: $7\n" + "3)Hamburguesa con queso y panceta. Precio: $8 \n" + "4)Hamburguesa completa. Precio: $9\n" + "Selecciona una opcion:"))

switch(hamburguesa) {
    case 1:
        console.log("Hamburguesa simple. Precio: $5")
        hamburguesaSeleccionada = hamburguesaSimple
        opcionValida = true
        break
    case 2:
        console.log("Hamburguesa con queso. Precio: $7")
        hamburguesaSeleccionada = hamburguesaQueso
        opcionValida = true
        break
    case 3:
        console.log ("Hamburguesa con queso y panceta. Precio: $8")
        hamburguesaSeleccionada = hamburguesaBacon
        opcionValida = true
        break
    case 4:
        console.log ("Hamburguesa completa. Precio: $9")
        hamburguesaSeleccionada = hamburguesaCompleta
        opcionValida = true
        break
    default:
       alert("La opcion ingresada no es válida")
       break
       }
     } while (!opcionValida)

console.log(`Elegiste: ${hamburguesaSeleccionada.nombre} Subtotal: $${hamburguesaSeleccionada.precioInicial}`)

// Opcion menu sin TACC

let esCeliaco = confirm("¿Deseas que el menu sea sin TACC?")

if (esCeliaco) {
    console.log("Opción Sin TACC: reemplazamos pan por pan de papa")
    hamburguesaSeleccionada.ingredientes.splice(0, 1, "pan de papa") // reemplazamos el primer ingrediente 
} else {
    console.log("Menu con pan tradicional")
} 

// recorrer con for of
mostrarIngredientes(hamburguesaSeleccionada.ingredientes)


let modificarIngredientes = parseInt(prompt( "Queres modificar los ingredientes?\n" + "1)Quitar un ingrediente\n" + "2)Agregar aderezo especial\n" + "3)No quiero modificar\n" + "Ingresa una opcion: (1, 2 o 3)"))

if (modificarIngredientes === 1) {
    let ingredienteAEliminar = prompt("Escribi el ingrediente que queres quitar:").toLowerCase
    
    const indice = hamburguesaSeleccionada.ingredientes.findIndex(
        ing => ing.toLowerCase() === ingredienteAEliminar
    ) 

    if (indice !== -1) {
        const eliminado = hamburguesaSeleccionada.ingredientes.splice(indice, 1)
        console.log(`Quitamos el ingrediente: ${eliminado}`)
    } else {
        console.log("Ese ingrediente no está en la hamburguesa")
    }

    } else if (modificarIngredientes === 2) {

        hamburguesa.Seleccionada.ingredientes.push("aderezo especial")
        console.log("Agregamos aderezo especial a tu hamburguesa")
    }

    else {
        console.log("Menu sin modificar")
    }

    // mostrar ingredientes

    console.log ("Ingredientes de tu hamburguesa: ")
    mostrarIngredientes(hamburguesaSeleccionada.ingredientes)


// segunda parte

let precioPapas = 0
let precioGaseosa = 0

let guarnicion = confirm("Desea agregar papas por $2?")

if (guarnicion === true) {
    console.log ("Agregaste papas. +$2")
    precioPapas = 2

} else {
    console.log ("Sin guarnicion")
}

// tercera parte

let gaseosa = confirm("Desea agregar gaseosa refill por $5?")

if (gaseosa === true) {
    console.log ("Agregaste gaseosa refill. +$5")
    precioGaseosa = 5
} else {
    console.log ("Sin gaseosa")
}


let subtotal = hamburguesaSeleccionada.precioInicial + precioPapas + precioGaseosa

console.log("Subtotal: $" + subtotal)
hamburguesaSeleccionada.precioTotal = subtotal

// IVA

hamburguesaSeleccionada.sumarIva(21)
console.log("Total con IVA: $ " + hamburguesaSeleccionada.precioTotal)

// DESCUENTO 

let codigo = prompt("Codigo de descuento, si tenes:")

if (codigo === "NewClient") {
    console.log("Codigo valido, aplicando 10% off")
    hamburguesaSeleccionada.aplicarDescuento(10)
    console.log("Total con descuento: $" + hamburguesaSeleccionada.precioTotal)
} else {
    console.log("Codigo invalido o no ingresado")
    console.log("Total final: $" + hamburguesaSeleccionada.precioTotal)
}




// ciclo

seguir = confirm("Desea hacer otro pedido?")
}

console.log("Muchas gracias por elegirnos! Vamos a preparar tu pedido...")

