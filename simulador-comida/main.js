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

// // arrays 

// let ingredientesHamburguesaCompleta = ["pan", "hamburguesa", "queso", "tomate", "lechuga", "huevo"]

// console.log("Ingredientes de la hamburguesa completa: " + ingredientesHamburguesaCompleta.join(" - "))


// //  pop - quitar al final: 

// const eliminado = ingredientesHamburguesaCompleta.pop()
// console.log(`Eliminamos: ${eliminado}`)

// // push - agregar al final: Aderezo especial

// ingredientesHamburguesaCompleta.push("aderezo especial")
// console.log("Sumamos el aderezo especial: " + ingredientesHamburguesaCompleta.join(" - "))

// // splice - reemplazar el pan por opcion apta celiaco

// ingredientesHamburguesaCompleta.splice(0,1,"pan de papa")

// // mostrar cada ingrediente del menu para celiacos con for...of

// mostrarIngredientes(ingredientesHamburguesaCompleta)


// // chequear si el menu para celiacos contiene x ingrediente

// const buscado = prompt("Ingresa un ingrediente para verificar si esta disponible en el menu sin TACC")
// .toLowerCase()
// .trim()

// if (ingredientesHamburguesaCompleta.includes(buscado)) {
//     console.log(`El menu contiene: ${buscado}`)
// } else {
//     console.log(`El menu no contiene ${buscado}`)
// }

// para prox pre-entrega: ver manera de poner esto ultimo solo cuando el usuario elige la opcion 4 