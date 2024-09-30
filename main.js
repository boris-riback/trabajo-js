
//declaracion de variables

function Articulo (nombre, precio, stock)
{
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
};

const malta = new Articulo ("malta", 3000, 2000);
const levadura = new Articulo ("levadura", 2000, 1500);
const lupulo = new Articulo ("lupulo", 5000, 1000);

//variable de precios
let precioLupulo = 5000;
let precioMalta = 3000;
let precioLevadura = 2000;

//articulos
let nombreArticulo = "";
let cantidad = 0;
let totalCompra = 0;
let compra = 0;

//variables de stock
let stockLupulo = 1000;
let stockMalta = 2000;
let stockLevadura = 1500;

//variables de validacion
/* (en caso de que usara variables booleanas, por ejemplo,
en la variable hay stock si es false el articulo tiene stock
y si es true el articulo no tiene stock y sonaria contradictorio y seria confuso) */

let hayStock = "NS";
let articuloValido = "NV";
let seguirComprando = true;
// en caso de seguir comprando la sentencia true y false tiene mas sentido, por eso si usé una variable booleana


//funciones
const COMPRAF = (precioProducto, cantidadProducto) => (precioProducto * cantidadProducto);

//seleccion del articulo

nombreArticulo = prompt("Seleccione el articulo deseado (malta, levadura o lúpulo)");

while (seguirComprando){
//validacion del producto

    do {
        switch (nombreArticulo) {
            case "malta":
                alert("Disponemos de "+malta.stock+" Kg de malta a un precio de "+malta.precio+" $");
                articuloValido = "V";
            break;

            case "lupulo":
                alert("Disponemos de "+lupulo.stock+" Kg de Lupulo a un precio de "+lupulo.precio+" $");
                articuloValido = "V";
            break;

            case "levadura":
                alert("Disponemos de "+levadura.stock+" Kg de levadura a un precio de "+levadura.precio+" $");
                articuloValido = "V";
            break;

            default:
                alert ("Usted ha ingresado mal el nombre del articulo")
                articuloValido = "NV"
                nombreArticulo = prompt ("Por favor reingrese el articulo")
            break;
            }
    } while (articuloValido == "NV");

    cantidad = prompt("Ahora seleccione la cantidad");


        //validacion de la cantidad

    while (isNaN(cantidad) || cantidad <=0) {
        alert("Usted ingresó una cantidad invalida");
        cantidad = prompt("Reingrese la cantidad");
    }


//comprobacion de stock y validacion de compra

    while (hayStock == "NS") {

        if (nombreArticulo == "malta" && stockMalta >= cantidad) {
            compra = COMPRAF (malta.precio, cantidad);
            malta.stock -= cantidad;
            totalCompra += compra  ;
            alert("Producto agregado al carrito, su total es de: $" + totalCompra);
            hayStock = "HS";

        } else if (nombreArticulo == "lupulo" && stockLupulo >= cantidad) {
            compra = COMPRAF (lupulo.precio, cantidad);
            lupulo.stock -= cantidad;
            totalCompra += compra;
            alert("Producto agregado al carrito, su total es de: $" + totalCompra);
            hayStock = "HS";

        } else if (nombreArticulo == "levadura" && stockLevadura >= cantidad) {
            compra = COMPRAF (levadura.precio, cantidad);
            levadura.stock -= cantidad;
            totalCompra += compra;
            alert("Producto agregado al carrito, su total es de: $" + totalCompra);
            hayStock = "HS";
        }else {
            alert("No hay suficiente stock de este producto, intente con una cantidad menor");
            cantidad = prompt("Por favor seleccione una cantidad menor");
        }
    }


//reiniciar o finalizar el bucle para terminar con la compra

    seguirComprando = confirm("Desea agregar mas productos a su carrito?");

    if (seguirComprando) {
        nombreArticulo = prompt ("Seleccione otro articulo");
        hayStock = "NS";
        articuloValido = "V"
    }else {
        alert("Gracias por su compra!!, el total de la compra es de "+totalCompra+"$");
    }
}