// Cada producto que vende el super es creado con esta clase
// Esto se podria llevar a un archivo independiente producto.js
class Producto {
    sku;            // Identificador único del producto
    nombre;         // Su nombre
    categoria;      // Categoría a la que pertenece este producto
    precio;         // Su precio
    stock;          // Cantidad disponible en stock

    constructor(sku, nombre, precio, categoria, stock) {
        this.sku = sku;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;

        // Si no me definen stock, pongo 10 por default
        if ((stock === undefined) || (stock === null) || (stock === '') || (stock === 0)) {
            this.stock = 10;
        } else {
            this.stock = stock;
        }
    }
}

//import { Producto } from './producto.js';

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

// Cada cliente que venga a mi super va a crear un carrito
// Esto se podria llevar a un archivo independiente producto.js
class Carrito {
    productos;      // Lista de productos agregados
    categorias;     // Lista de las diferentes categorías de los productos en el carrito
    precioTotal;    // Lo que voy a pagar al finalizar mi compra

    // Al crear un carrito, empieza vació
    constructor() {
        this.productos = [];
        this.categorias = [];
        this.precioTotal = 0;
    }

    /*
    * función que agrega @{cantidad} de productos con @{sku} al carrito
    */
    async agregarProducto(sku, cantidad) {
        if ((sku !== undefined) || (sku !== null) || (sku !== '') || (sku !== 0)) {
            if ((cantidad !== undefined) || (cantidad !== null) || (cantidad !== '') || (cantidad !== 0)) {
//                if (sku in productos) {
//                    this.productos[sku].cantidad += cantidad;
                    //this.precioTotal = this.precioTotal + this.productos[sku].precio * this.productos[sku].cantidad);
//                  } else {
                    // Busco el producto en la "base de datos"
                    console.log(`Buscando producto ${sku}`);
                    const producto = await findProductBySku(sku);

                    if (producto) {
                        console.log("Producto encontrado", producto);
                    }
                    
                    // Agrego el producto
                    console.log(`Agregando producto ${sku} cantidad ${cantidad}`);

                    // Creo un producto nuevo
                    const nuevoProducto = new ProductoEnCarrito(sku, producto.nombre, cantidad);
                    this.productos.push(nuevoProducto);
                    this.precioTotal = this.precioTotal + (producto.precio * cantidad);
                    this.categorias.push(producto.categoria);
//                }
            } else {
                console.log("La cantidad debe ser mayor a cero");
            }
        } else {
            console.log("El SKU no puede estar vacio");
        }
    }
}

// Cada producto que se agrega al carrito es creado con esta clase
class ProductoEnCarrito {
    sku;       // Identificador único del producto
    nombre;    // Su nombre
    cantidad;  // Cantidad de este producto en el carrito

    constructor(sku, nombre, cantidad) {
        this.sku = sku;
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}

// Función que busca un producto por su sku en "la base de datos"
function findProductBySku(sku) {
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