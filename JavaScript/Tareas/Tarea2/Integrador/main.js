// Main  /  Principal
// Importacion de archivos
import { ProductosDelSuper } from './js/productsuper.js';
import { Carrito } from './js/cart.js';

// Creacion de productosDelSuper, su carga
const productosDelSuper = new ProductosDelSuper();
//productosDelSuper = ProductosDelSuper.loadProducts();
productosDelSuper.loadProducts();
// Lista los productos del super
productosDelSuper.listProducts();

{
// Función que busca un producto por su sku en "la base de datos"
// window.findProductBySkuInProductOfSuper = function (sku) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const foundProduct = productosDelSuper.productos.find(product => product.sku === sku);
//             if (foundProduct) {
//                 console.log("Producto encontrado...", foundProduct);

//                 resolve(foundProduct);
//             } else {
//                 reject(`Producto ${sku} no encontrado...`);
//             }
//         }, 1500);
//     });
// }


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
}

//setTimeout(1500)

// Se crea un carrito y agregan productos al carrito
const carrito = new Carrito();
await carrito.agregarProducto('WE328NJ', 4, productosDelSuper);
await carrito.agregarProducto('KS944RUR', 10, productosDelSuper);
await carrito.agregarProducto('WE328NJ', 1, productosDelSuper);
// await carrito.eliminarProducto('WE328NJ', 1, productosDelSuper);
// carrito.agregarProducto('FN312PPE', 2, productosDelSuper);
// //const cerveza = new Producto('PV332MJ', 'Cerveza', 20, 'bebidas');
// //const arroz = new Producto('XX92LKI', 'Arroz', 7, 'alimentos', 20);
// //const fideos = new Producto('UI999TY', 'Fideos', 5, 'alimentos');
// //const lavandina = new Producto('RT324GD', 'Lavandina', 9, 'limpieza');
// //const shampoo = new Producto('OL883YE', 'Shampoo', 3, 'higiene', 50);
// //const jabon = new Producto('WE328NJ', 'Jabon', 4, 'higiene', 3);
// carrito.agregarProducto('FN458PPE', 2, productosDelSuper);



