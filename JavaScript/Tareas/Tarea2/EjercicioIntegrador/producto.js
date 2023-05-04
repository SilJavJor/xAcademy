// Cada producto que vende el super es creado con esta clase
// Esto se podria llevar a un archivo independiente producto.js
//export class Producto {
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

        if ((stock === undefined) || (stock === null) || (stock === '') || (stock === 0)) {
            this.stock = 10;
        } else {
            this.stock = stock;
        }
    }
}

//module.exports = Producto;