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
    const queso = new Producto("KS944RUR", "Queso", 10, "Lacteos", 4);
    const gaseosa = new Producto("FN312PPE", "Gaseosa", 5, "Bebidas", 6);
    const cerveza = new Producto("PV332MJ", "Cerveza", 20, "Bebidas");
    const arroz = new Producto("XX92LKI", "Arroz", 7, "Alimentos", 20);
    const fideos = new Producto("UI999TY", "Fideos", 5, "Alimentos");
    const lavandina = new Producto("RT324GD", "Lavandina", 9, "Limpieza");
    const shampoo = new Producto("OL883YE", "Shampoo", 3, "Higiene", 50);
    const jabon = new Producto("WE328NJ", "Jabon", 4, "Higiene", 20);
    const polenta = new Producto("JK332MJ", "Polenta", 20, "Alimentos");
    const detergente = new Producto("XX92LKI", "Detergente", 7, "Lipieza", 30);
    const tomate = new Producto("JS999TY", "Tomate", 5, "Alimentos");
    const mayonesa = new Producto("LM324SD", "Mayonesa", 9, "Alimentos");
    const desodorante = new Producto("OD883TH", "Desodorante", 3, "Higiene", 50);
    const esponja = new Producto("JG328JN", "Esponja", 4, "Limpieza", 3);
    const isopo = new Producto("WE328NJ", "Isopo", 4, "Perfumeria", 3);

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
