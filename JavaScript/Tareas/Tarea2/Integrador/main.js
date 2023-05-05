// Main
// Archivo JavaScript principal

// Importacion de archivos
// Importacion de la Clase Carrito
import { Carrito } from './js/cart.js';

// Importacion de la Clase ProductoEnCarrito
import { ProductoEnCarrito } from './js/productincart.js';

// Importacion de la Clase Producto
import { Producto } from './js/product.js';


// Creo todos los productos que vende mi super
const queso = new Producto('KS944RUR', 'Queso', 10, 'lacteos', 4);
const gaseosa = new Producto('FN312PPE', 'Gaseosa', 5, 'bebidas');
const cerveza = new Producto('PV332MJ', 'Cerveza', 20, 'bebidas');
const arroz = new Producto('XX92LKI', 'Arroz', 7, 'alimentos', 20);
const fideos = new Producto('UI999TY', 'Fideos', 5, 'alimentos');
const lavandina = new Producto('RT324GD', 'Lavandina', 9, 'limpieza');
const shampoo = new Producto('OL883YE', 'Shampoo', 3, 'higiene', 50);
const jabon = new Producto('WE328NJ', 'Jabon', 4, 'higiene', 3);

// Genero un listado de productos. Simulando base de datos
const productosDelSuper = [queso, gaseosa, cerveza, arroz, fideos, lavandina, shampoo, jabon];

// Función que busca un producto por su sku en "la base de datos"
//  function findProductBySkuInProductOfSuper(sku) {
window.findProductBySkuInProductOfSuper = function (sku) {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foundProduct = productosDelSuper.find(product => product.sku === sku);
            if (foundProduct) {
                resolve(foundProduct);
            } else {
                reject(`Producto ${sku} no encontrado`);
            }
        }, 1500);
    });
}


const carrito = new Carrito();

carrito.agregarProducto('WE328NJ', 2);
carrito.agregarProducto('KS944RUR', 10);
carrito.agregarProducto('WE328NJ', 1);
carrito.agregarProducto('FN312PPE', 2);


//const cerveza = new Producto('PV332MJ', 'Cerveza', 20, 'bebidas');
//const arroz = new Producto('XX92LKI', 'Arroz', 7, 'alimentos', 20);
//const fideos = new Producto('UI999TY', 'Fideos', 5, 'alimentos');
//const lavandina = new Producto('RT324GD', 'Lavandina', 9, 'limpieza');
//const shampoo = new Producto('OL883YE', 'Shampoo', 3, 'higiene', 50);
//const jabon = new Producto('WE328NJ', 'Jabon', 4, 'higiene', 3);