
//declaracion de arrays y objetos

const carrito = [];
class Articulo {
  constructor(nombre, precio, stock, stockCompra, subtotal){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.stockCompra = stockCompra;
    this.subtotal = subtotal;
  }
  informacion () {
    return "Disponemos de "+this.stock +" Kg de "+this.nombre+" a un precio de "+ this.precio +"$";
  }
};


//articulos
const malta = new Articulo ("malta", 3000, 2000, 0, 0);
const levadura = new Articulo ("levadura", 2000, 1500, 0, 0);
const lupulo = new Articulo ("lupulo", 5000, 1000, 0, 0);

//variables para la compra
let nombreArticulo = "";
let cantidad = 0;
let totalCompra = 0;
let compra = 0;
let mensajeDeCompra = "";

//variables de validacion
/* (en caso de que usara variables boolean    as, por ejemplo,
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
        alert(malta.informacion());
          articuloValido = "V";
        break;

      case "lupulo":
        alert(lupulo.informacion());
          articuloValido = "V";
        break;
      case "levadura":
        alert(levadura.informacion());
          articuloValido = "V";
        break;
      default:
        alert ("Usted ha ingresado mal el nombre del articulo");
          articuloValido = "NV";
          nombreArticulo = prompt ("Por favor reingrese el articulo");
        break;}
  } while (articuloValido == "NV");

  cantidad = prompt("Ahora seleccione la cantidad");

//validacion de la cantidad

  while (isNaN(cantidad) || cantidad <=0) {
    alert("Usted ingresó una cantidad invalida");
    cantidad = prompt("Reingrese la cantidad");
  };


//comprobacion de stock y validacion de compra

  while (hayStock == "NS") {

    if (nombreArticulo == "malta" && malta.stock >= cantidad) {
      compra = COMPRAF (malta.precio, cantidad);
      malta.stockCompra += cantidad;
      malta.subtotal += compra;
      malta.stock -= cantidad;
      totalCompra += compra;
      alert("Producto agregado al carrito, su total es de: $" + totalCompra);
      hayStock = "HS";

    } else if (nombreArticulo == "lupulo" && lupulo.stock >= cantidad) {
      compra = COMPRAF (lupulo.precio, cantidad);
      lupulo.stockCompra += cantidad;
      lupulo.subtotal += compra;
      lupulo.stock -= cantidad;
      totalCompra += compra;
      alert("Producto agregado al carrito, su total es de: $" + totalCompra);
      hayStock = "HS";

    } else if (nombreArticulo == "levadura" && levadura.stock >= cantidad) {
      compra = COMPRAF (levadura.precio, cantidad);
      levadura.stockCompra += cantidad;
      levadura.subtotal += compra;
      levadura.stock -= cantidad;
      totalCompra += compra;
      alert("Producto agregado al carrito, su total es de: $" + totalCompra);
      hayStock = "HS";

    }else {
      alert("No hay suficiente stock de este producto, intente con una cantidad menor");
      cantidad = prompt("Por favor seleccione una cantidad menor");
    }

//agregado de productos al carrito (Array)
    if (malta.stockCompra > 0) {
      carrito.push (malta);
    }else if (lupulo.stockCompra > 0) {
      carrito.push (lupulo);
    }else if (levadura.stockCompra > 0)
      carrito.push (levadura);
  };

//reiniciar o finalizar el bucle para terminar con la compra

    seguirComprando = confirm("Desea agregar mas productos a su carrito?");

    if (seguirComprando) {
      nombreArticulo = prompt ("Seleccione otro articulo");
      hayStock = "NS";
      articuloValido = "V"
    }else {
      for (let i = 0; i < carrito.length; i++) {
        mensajeDeCompra += `${carrito[i].nombre} x ${carrito[i].stockCompra} kg= ${carrito[i].subtotal}$\n`;
      }
      alert(mensajeDeCompra);
      alert("Gracias por su compra!!, el total de la compra es de "+totalCompra+"$");
      }
    };

