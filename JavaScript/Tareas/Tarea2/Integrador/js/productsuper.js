// Importacion de la Clase Producto
import { Producto } from "./product.js";

// Clase ProductosDelSuper
// Se encarga de cargar y listar los productos del super
export class ProductosDelSuper {
  constructor() {
    this.productos = [];
  }

  loadProducts() {
    // Simula la carga de los productos del super desde una fuente de datos.
    const queso = new Producto("KS944RUR", "Queso", "Lacteos", 10, 4);
    const gaseosa = new Producto("FN312PPE", "Gaseosa", "Bebidas", 5, 6);
    const cerveza = new Producto("PV332MJ", "Cerveza", "Bebidas", 20,);
    const arroz = new Producto("XX92LKI", "Arroz", "Alimentos", 7, 20);
    const fideos = new Producto("UI999TY", "Fideos", "Alimentos", 5);
    const lavandina = new Producto("RT324GD", "Lavandina", "Limpieza", 9);
    const shampoo = new Producto("OL883YE", "Shampoo", "Higiene", 3, 50);
    const jabon = new Producto("WE328NJ", "Jabon", "Higiene", 4, 20);
    const polenta = new Producto("JK332MJ", "Polenta", "Alimentos", 20);
    const detergente = new Producto("XX92LKI", "Detergente", "Lipieza", 7, 30);
    const tomate = new Producto("JS999TY", "Tomate", "Alimentos", 5);
    const mayonesa = new Producto("LM324SD", "Mayonesa", "Alimentos", 9);
    const desodorante = new Producto("OD883TH", "Desodorante", "Higiene", 3, 50);
    const esponja = new Producto("JG328JN", "Esponja", "Limpieza", 4, 3);
    const isopo = new Producto("WE328NJ", "Isopo", "Perfumeria", 4, 3);

    // Carga el array de productos.
    this.productos = [queso, gaseosa, cerveza, arroz, fideos, lavandina, shampoo, jabon,
      polenta, detergente, tomate, mayonesa, desodorante, esponja, isopo];
  }

  listProducts() {
    // Mostrar los datos de productosDelSuper por consola
    console.log("Productos del super:");

    this.productos.forEach((producto) => {
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
        const foundProduct = this.productos.find(
          (product) => product.sku === sku
        );
        if (foundProduct) {
          console.log(`Producto ${sku} encontrado...`, foundProduct);

          resolve(foundProduct);
        } else {
          console.log(`Producto ${sku} no encontrado...`);

          reject(foundProduct);
        }
      }, 1500);
    });
  }
}
