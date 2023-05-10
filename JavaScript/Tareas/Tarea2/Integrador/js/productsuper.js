// Importacion de la Clase Producto
import { Producto } from './product.js';

// Clase ProductosDelSuper
// Se encarga de cargar y listar los productos del super
export class ProductosDelSuper {
    constructor() {
      this.productos = [];
    }
  
    loadproducts() {
       // cargar los productos del super desde una fuente de datos.
       const queso = new producto('ks944rur', 'queso', 10, 'lacteos', 4);
       const gaseosa = new producto('fn312ppe', 'gaseosa', 5, 'bebidas', 6);
       const cerveza = new producto('pv332mj', 'cerveza', 20, 'bebidas');
       const arroz = new producto('xx92lki', 'arroz', 7, 'alimentos', 20);
       const fideos = new producto('ui999ty', 'fideos', 5, 'alimentos');
       const lavandina = new producto('rt324gd', 'lavandina', 9, 'limpieza');
       const shampoo = new producto('ol883ye', 'shampoo', 3, 'higiene', 50);
       const jabon = new producto('we328nj', 'jabon', 4, 'higiene', 20);
       const polenta = new producto('jk332mj', 'polenta', 20, 'alimentos');
       const detergente = new producto('xx92lki', 'detergente', 7, 'lipieza', 30);
       //const tomate = new producto('ui999ty', 'tomate', 5, 'alimentos');
       //const mayonesa = new producto('rt324gd', 'mayonesa', 9, 'alimentos');
       //const desodorante = new producto('ol883ye', 'desodorante', 3, 'higiene', 50);
       //const esponja = new producto('we328nj', 'esponja', 4, 'limpieza', 3);
       //const isopo = new producto('we328nj', 'isopo', 4, 'perfumeria', 3);

       // Carga el array de productos.
       this.productos = [queso, gaseosa, cerveza, arroz, fideos, lavandina, shampoo, jabon, polenta, detergente];
    }

    // loadProducts() {
    //   return new Promise((resolve, reject) => {
    //     // Simular una operación asincrónica de carga de productos desde una fuente de datos (por ejemplo, una API)
    //     setTimeout(() => {
    //       const queso = new Producto('KS944RUR', 'Queso', 10, 'Lacteos', 4);
    //       const gaseosa = new Producto('FN312PPE', 'Gaseosa', 5, 'Bebidas', 6);
    //       const cerveza = new Producto('PV332MJ', 'Cerveza', 20, 'Bebidas');
    //       const arroz = new Producto('XX92LKI', 'Arroz', 7, 'Alimentos', 20);
    //       const fideos = new Producto('UI999TY', 'Fideos', 5, 'Alimentos');
    //       const lavandina = new Producto('RT324GD', 'Lavandina', 9, 'Limpieza');
    //       const shampoo = new Producto('OL883YE', 'Shampoo', 3, 'Higiene', 50);
    //       const jabon = new Producto('WE328NJ', 'Jabon', 4, 'Higiene', 20);
    //       const polenta = new Producto('JK332MJ', 'Polenta', 20, 'Alimentos');
    //       const detergente = new Producto('XX92LKI', 'Detergente', 7, 'Lipieza', 30);
    //       //const tomate = new Producto('UI999TY', 'Tomate', 5, 'Alimentos');
    //       //const mayonesa = new Producto('RT324GD', 'Mayonesa', 9, 'Alimentos');
    //       //const desodorante = new Producto('OL883YE', 'Desodorante', 3, 'Higiene', 50);
    //       //const esponja = new Producto('WE328NJ', 'Esponja', 4, 'Limpieza', 3);
    //       //const isopo = new Producto('WE328NJ', 'Isopo', 4, 'Perfumeria', 3);
    
    //       this.productos = [queso, gaseosa, cerveza, arroz, fideos, lavandina, shampoo, jabon, polenta, detergente];
    
    //       resolve(); // Termina la promesa una vez que los productos se hayan cargado correctamente
    //     }, 1500); // Simulación de un tiempo de espera de 1.5 segundos para cargar los productos
    //   });
    // }
  
    listProducts() {
      // Mostrar los datos de productosDelSuper por consola
      console.log("Productos del super:");
      
      this.productos.forEach(producto => {
        console.log(`SKU: ${producto.sku}`);
        console.log(`Nombre: ${producto.nombre}`);
        console.log(`Categoría: ${producto.categoria}`);
        console.log(`Precio: ${producto.precio}`);
        console.log(`Stock: ${producto.stock}`);
        console.log("------------------------");
      });
    }

    findProductBySku(sku) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              const foundProduct = this.productos.find(product => product.sku === sku);
              if (foundProduct) {
                  console.log(`Producto ${sku} encontrado...`, foundProduct);
  
                  resolve(foundProduct);
              } else {
                  reject(`Producto ${sku} no encontrado...`);
              }
          }, 1500);
      });
  }    
}
