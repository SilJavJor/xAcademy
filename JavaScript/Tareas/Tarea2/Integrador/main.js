// Main  /  Principal
// Importacion de archivos
import { ProductosDelSuper } from './js/productsuper.js';
import { Carrito } from './js/cart.js';

// Creacion de productosDelSuper, su carga
const productosDelSuper = new ProductosDelSuper();
productosDelSuper.loadProducts();

// Función que busca un producto por su sku en "la base de datos"
// findProductBySkuInProductOfSuper = function (sku) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const foundProduct = productosDelSuper.productos.find(product => product.sku === sku);
//             if (foundProduct) {
//                 resolve(foundProduct);
//             } else {
//                 reject(`Producto ${sku} no encontrado.......`);
//             }
//         }, 1500);
//     });
// }

// Se crea un carrito y agregan productos al carrito
const carrito = new Carrito();

// Se agregan varios productos al carrito
await carrito.agregarProducto('WE328NJ', 1, productosDelSuper);
await carrito.agregarProducto('KS944RUR', 2, productosDelSuper);
await carrito.agregarProducto('WE328NJ', 1, productosDelSuper);
await carrito.agregarProducto('FN312PPE', 2, productosDelSuper);
await carrito.agregarProducto('PV332MJ', 1, productosDelSuper);
await carrito.agregarProducto('UI999TY', 2, productosDelSuper);

// Se elminan distintos productos con distintas cantidades
await carrito.eliminarProducto('WE328NJ', 1);

// Se agregan varios productos al carrito con distintas cantidades para su sumatoria
await carrito.agregarProducto('RT324GD', 1, productosDelSuper);
await carrito.agregarProducto('OL883YE', 2, productosDelSuper);
await carrito.agregarProducto('WE328NJ', 1, productosDelSuper);
await carrito.agregarProducto('RT324GD',  2, productosDelSuper);
await carrito.agregarProducto('FN458PPE', 1, productosDelSuper);
await carrito.agregarProducto('FN458PPE', 2, productosDelSuper);

// Se elminan distintos productos con distintas cantidades
await carrito.eliminarProducto('WE328NJ', 1);
await carrito.eliminarProducto('FN458PPE', 2);

// Lista los productos del super
productosDelSuper.listProducts();

// Lista los productos en el carrito
carrito.listProducts();

// Muestra el precio total
carrito.listPrecioTotal();



