// Producto.js
// Cada producto que vende el super es creado con esta clase
class Producto {
//export default class Producto {
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
        this.stock = SetStock(stock);
    }

    // Se define un valor por defecto 
    // Debo buscar otra forma mas efectiva
    setStock(stock){
      // Si no me definen stock, pongo 10 por default
      if (stock) {
          this.stock = stock;
      } else {
          this.stock = 10;
      }

    }
}

export default Producto;



