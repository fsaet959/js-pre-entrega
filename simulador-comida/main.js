   // funcion 1
function saludar(nombre) { 
    alert("Bienvenido/a a BK, " + nombre)
}
// funcion 2 flecha para calcular total del pedido

const calcularTotal = (precioHamburguesa, precioGaseosa, precioPapas) => precioHamburguesa + precioPapas + precioGaseosa

// funcion 3 con retorno

function calcularDescuento(total, porcentaje){
    return total - (total * (porcentaje / 100))
}

let seguir = true

while (seguir) {

saludar(prompt("Escribi tu nombre:"))

console.log("Resumen de tu pedido: ")
let opcionValida = false
let hamburguesa
let precioHamburguesa = 0
let precioPapas = 0
let precioGaseosa = 0

// ciclo que se repite si la opcion no es valida

do {
 hamburguesa = parseInt(prompt("Preparemos tu pedido, Nuestro menu: \n" + "1)Hamburguesa Simple. Precio: $5\n" + "2)Hamgurguesa con queso. Precio: $7\n" + "3)Hamburguesa con queso y panceta. Precio: $8 \n" + "4)Hamburguesa completa. Precio: $9\n" + "Selecciona una opcion:"))

switch(hamburguesa) {
    case 1:
        console.log("Hamburguesa simple. Precio: $5")
        precioHamburguesa = 5
        opcionValida = true
        break
    case 2:
        console.log("Hamburguesa con queso. Precio: $7")
        precioHamburguesa = 7
        opcionValida = true
        break
    case 3:
        console.log ("Hamburguesa con queso y panceta. Precio: $8")
        precioHamburguesa = 8
        opcionValida = true
        break
    case 4:
        console.log ("Hamburguesa completa. Precio: $9")
        precioHamburguesa = 9
        opcionValida = true
        break
    default:
       alert("La opcion ingresada no es válida")
       break
       }
     } while (!opcionValida)

// segunda parte
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


let total = calcularTotal(precioHamburguesa, precioGaseosa, precioPapas)

console.log("Subtotal: $" + total)


let codigo = prompt("Codigo de descuento, si tenes:")

if (codigo === "NewClient") {
    let totalConDescuento = calcularDescuento(total,10)
    console.log("Codigo valido, aplicando 10% off")
    console.log("Total con descuento: $" + totalConDescuento)
} else {
    console.log("Codigo invalido o no ingresado")
    console.log("Total final: $" + total)
}
// ciclo

seguir = confirm("Desea hacer otro pedido?")
}

console.log("Muchas gracias por elegirnos! Vamos a preparar tu pedido...")

// arrays 

let ingredientesHamburguesaCompleta = ["pan", "hamburguesa", "queso", "tomate", "lechuga", "huevo"]

console.log("Ingredientes de la hamburguesa completa: " + ingredientesHamburguesaCompleta.join(" - "))


//  pop - quitar al final: 

ingredientesHamburguesaCompleta.pop()
console.log("Eliminamos el huevo: " + ingredientesHamburguesaCompleta.join(" - "))

// push - agregar al final: Aderezo especial

ingredientesHamburguesaCompleta.push("aderezo especial")
console.log("Sumamos el aderezo especial: " + ingredientesHamburguesaCompleta.join(" - "))

// splice - reemplazar el pan por opcion apta celiaco

ingredientesHamburguesaCompleta.splice(0,1,"pan de papa")

// mostrar cada ingrediente del menu para celiacos con for...of

for (const ingrediente of ingredientesHamburguesaCompleta) {
    console.log("Ingrediente apto para celiacos: " + ingrediente)

}

// chequear si el menu para celiacos contiene x ingrediente

const buscado = prompt("Ingresa un ingrediente para verificar si esta disponible en el menu sin TACC")
.toLowerCase()
.trim()

if (ingredientesHamburguesaCompleta.includes(buscado)) {
    console.log(`El menu contiene: ${buscado}`)
} else {
    console.log(`El menu no contiene ${buscado}`)
}

// para prox pre-entrega: ver manera de poner esto ultimo solo cuando el usuario elige la opcion 4 