// definir clase

class Hamburguesa {
    constructor(id, nombre, precioInicial, ingredientes, calorias, puntos) {
        this.id = id
        this.nombre = nombre
        this.precioInicial = precioInicial
        this.ingredientes = ingredientes
        this.calorias = calorias
        this.precioTotal = precioInicial
        this.puntos = puntos
        
        }

             //     // IVA 

    //   sumarIva(porcentajeIva) {
    //         this.precioTotal = this.precioTotal * (1 + porcentajeIva/100)
    // }
    }


    // instancias (id, nombre, precioInicial, ingredientes, calorias) 

    const hamburguesaSimple = new Hamburguesa(1001,"Hamburguesa simple", 5, ["pan", "hamburguesa"], 300, 50)
    const hamburguesaQueso = new Hamburguesa(1002, "Hamburguesa con queso", 7, ["pan", "hamburguesa", "queso"], 400, 80)
    const hamburguesaBacon = new Hamburguesa (1003, "Hamburguesa con panceta y queso", 8, ["pan", "hamburguesa", "queso", "panceta"], 700, 120)
    const hamburguesaCompleta = new Hamburguesa(1004, "Hamburguesa completa", 10, ["pan", "hamburguesa", "queso", "tomate", "huevo"], 650, 150)

    // buscar elementos
    

    // array de objetos

    const Hamburguesas = [
        hamburguesaSimple,
        hamburguesaQueso,
        hamburguesaBacon,
        hamburguesaCompleta
    ]
    
// pasar menu al html

const menuHamburguesas = document.getElementById("menuHamburguesas")
const mostrarResultado =  document.getElementById("mostrarResultado")


// funcion p limpiar 

    function renderizarHamburguesas (lista){
        menuHamburguesas.innerHTML = ""

        lista.forEach(hamburguesa => {
        menuHamburguesas.innerHTML += `
        <div class= "card"> 
          <h3>${hamburguesa.nombre}</h3>
          <p>Precio: $${hamburguesa.precioInicial}</p>
          <p>Calorias: ${hamburguesa.calorias}</p>


          <button class="btn-ver-ingredientes" hambId="${hamburguesa.id}">
           Ver Ingredientes
          </button>
          </div>
        `
    })

    activarBotonesIngredientes() 
     }

    // activar botones 

    function activarBotonesIngredientes() {
        const botonesIng = document.querySelectorAll(".btn-ver-ingredientes")

        botonesIng.forEach(boton => {
            boton.addEventListener("click", () => {
                const id = boton.getAttribute("hambId")
                verIngredientes(id)
            })
        })
    }

    // funcion ver ingredientes

    function verIngredientes(id) {
        const ingHamburguesa = Hamburguesas.find ((hamburguesa) => {
            if(hamburguesa.id == id) {
                return true            
        } else {
            return false
        }
        })

        mostrarResultado.textContent = `Ingredientes incluidos en esta opcion: ${ingHamburguesa.ingredientes.join(", ")}`
    }

    renderizarHamburguesas(Hamburguesas)

// funcion buscar ingredientes 

const inputBusquedaIngrediente = document.getElementById("inputBusquedaIngrediente")

inputBusquedaIngrediente.addEventListener("keyup", () => {

    const texto = inputBusquedaIngrediente.value.toLowerCase()

    const resultadoBusqueda = Hamburguesas.filter(hamburguesa => {
        return hamburguesa.ingredientes.some( ingrediente => 
            ingrediente.toLowerCase().includes(texto)

        )
    })

    renderizarHamburguesas(resultadoBusqueda)
})

    











//     }

// // funcion descuentos

// function calcularPrecioFinal(precio, funcionDescuento) {
//     const descuento = funcionDescuento(precio)
//     return precio - descuento 
// }

// const NewClient = (precio) => precio * 0.10
// const SegundaCompra = (precio) => precio * 0.20

// // funcion saludo
// function saludar(nombre) { 
//     alert("Bienvenido/a a BK, " + nombre)
// }

// // funcion de reporte 

// function mostrarIngredientes(lista) {

//     for (const ingrediente of lista) {
//       console.log("* " + ingrediente)
//   }
// }




 


// let nombreCliente = prompt("Escribi tu nombre")

// saludar(nombreCliente)


// let menuInicial = parseInt(prompt("Bienvenido a BK, " + nombreCliente + "\n" + "1) Ver menu \n 2)Buscar hamburguesas por ingrediente \n 3)Buscar hamburguesas limite calorico" )) 

// switch (menuInicial) {

    
//     case 1: 
//     console.log("Abriendo el menu")
//     break
    
//      // Metodo de busqueda 1  busqueda por ingrediente find

//      case 2:
//        let busquedaIngrediente = prompt("Ingrese el ingrediente que quiere en su hamburguesa").toLowerCase()

//        const hamburguesaEncontrada = Hamburguesas.find((hamburguesa) =>
//        hamburguesa.ingredientes.some((ingrediente) =>
//        ingrediente.toLowerCase().includes(busquedaIngrediente)
//         ) 
//          )

//        if (hamburguesaEncontrada) {
//        console.log(`Probá nuestra ${hamburguesaEncontrada.nombre}`)
//        } else{
//         console.log("No tenemos ese ingrediente en ningun menu")
//        } 

//        break

//       case 3:
//     // Metodo de busqueda 2 filter
//      let ingestacalorica = parseInt(prompt("Introduzca el limite calorico"))

//      const resultadoIngCalorica = Hamburguesas.filter((hamburguesa) => 
//      hamburguesa.calorias  <= ingestacalorica)
//      console.log("Hamburguesas dentro del limite calorico: ")
//      console.log(resultadoIngCalorica)

//      break
//       default:
//         alert("Opcion invalida. Abriendo el menu") 

// }


// let seguir = true

// while (seguir) {

// console.log("Resumen de tu pedido: ")
// let opcionValida = false
// let hamburguesaSeleccionada = null

// // ciclo que se repite si la opcion no es valida

// do {
//   let hamburguesa = parseInt(prompt("Preparemos tu pedido, Nuestro menu: \n" + "1)Hamburguesa Simple. Precio: $5\n" + "2)Hamgurguesa con queso. Precio: $7\n" + "3)Hamburguesa con queso y panceta. Precio: $8 \n" + "4)Hamburguesa completa. Precio: $10\n" + "Selecciona una opcion:"))

// switch(hamburguesa) {
//     case 1:
//         console.log("Hamburguesa simple. Precio: $5")
//         hamburguesaSeleccionada = hamburguesaSimple
//         opcionValida = true
//         break
//     case 2:
//         console.log("Hamburguesa con queso. Precio: $7")
//         hamburguesaSeleccionada = hamburguesaQueso
//         opcionValida = true
//         break
//     case 3:
//         console.log ("Hamburguesa con queso y panceta. Precio: $8")
//         hamburguesaSeleccionada = hamburguesaBacon
//         opcionValida = true
//         break
//     case 4:
//         console.log ("Hamburguesa completa. Precio: $10")
//         hamburguesaSeleccionada = hamburguesaCompleta
//         opcionValida = true
//         break
//     default:
//        alert("La opcion ingresada no es válida")
//        break
//        }
//      } while (!opcionValida)

// console.log(`Elegiste: ${hamburguesaSeleccionada.nombre} Subtotal: $${hamburguesaSeleccionada.precioInicial}`)

// // Opcion menu sin TACC

// let esCeliaco = confirm("¿Deseas que el menu sea sin TACC?")

// if (esCeliaco) {
//     console.log("Opción Sin TACC: reemplazamos pan por pan de papa")
//     hamburguesaSeleccionada.ingredientes.splice(0, 1, "pan de papa") // reemplazamos el primer ingrediente 
// } else {
//     console.log("Menu con pan tradicional")
// } 

// // recorrer con for of
// console.log("Ingredientes de tu hamburguesa:")
// mostrarIngredientes(hamburguesaSeleccionada.ingredientes)


// let modificarIngredientes = parseInt(prompt( "Queres modificar los ingredientes?\n" + "1)Quitar un ingrediente\n" + "2)Agregar aderezo especial\n" + "3)No quiero modificar\n" + "Ingresa una opcion: (1, 2 o 3)"))

// if (modificarIngredientes === 1) {
//     let ingredienteAEliminar = prompt("Escribi el ingrediente que queres quitar:").toLowerCase()
    
//     const indice = hamburguesaSeleccionada.ingredientes.findIndex(
//         ing => ing.toLowerCase() === ingredienteAEliminar
//     ) 

//     if (indice !== -1) {
//         const eliminado = hamburguesaSeleccionada.ingredientes.splice(indice, 1)
//         console.log(`Quitamos el ingrediente: ${eliminado}`)
//     } else {
//         console.log("Ese ingrediente no está en la hamburguesa")
//     }

//     } else if (modificarIngredientes === 2) {

//         hamburguesaSeleccionada.ingredientes.push("aderezo especial")
//         console.log("Agregamos aderezo especial a tu hamburguesa")
//     }

//     else {
//         console.log("Menu sin modificar")
//     }

//     // mostrar ingredientes

//     console.log ("Ingredientes de tu hamburguesa: ")
//     mostrarIngredientes(hamburguesaSeleccionada.ingredientes)


// // segunda parte

// let precioPapas = 0
// let precioGaseosa = 0

// let guarnicion = confirm("Desea agregar papas por $2?")

// if (guarnicion === true) {
//     console.log ("Agregaste papas. +$2")
//     precioPapas = 2

// } else {
//     console.log ("Sin guarnicion")
// }

// // tercera parte

// let gaseosa = confirm("Desea agregar gaseosa refill por $5?")

// if (gaseosa === true) {
//     console.log ("Agregaste gaseosa refill. +$5")
//     precioGaseosa = 5
// } else {
//     console.log ("Sin gaseosa")
// }


// let subtotal = hamburguesaSeleccionada.precioInicial + precioPapas + precioGaseosa

// console.log("Subtotal: $" + subtotal)
// hamburguesaSeleccionada.precioTotal = subtotal

// // IVA

// hamburguesaSeleccionada.sumarIva(21)
// console.log("Total con IVA: $ " + hamburguesaSeleccionada.precioTotal)

// // DESCUENTO 

// let precioBase = hamburguesaSeleccionada.precioTotal

// const cupon = prompt("Ingresa tu cupon de descuento:")
// let funcionDescuentoSeleccionada = null

// if (cupon === "NewClient") {
//     funcionDescuentoSeleccionada = NewClient
// } else if (cupon === "SegundaCompra") {
//     funcionDescuentoSeleccionada = SegundaCompra
// }

// if (funcionDescuentoSeleccionada) {
//     const totalConDescuento = calcularPrecioFinal(precioBase, funcionDescuentoSeleccionada)
//     hamburguesaSeleccionada.precioTotal = totalConDescuento
//     console.log(`Cupon aplicado. Total a pagar: $${totalConDescuento}`)
// } else {
//     console.log(`El cupon no es valido. Total a pagar: $${precioBase}`)
//     }

//     console.log(`Total de puntos acumulados: ${hamburguesaSeleccionada.puntos}`)


// // ciclo

// seguir = confirm("Desea hacer otro pedido?")
// }

// console.log("Muchas gracias por elegirnos! Vamos a preparar tu pedido...")



