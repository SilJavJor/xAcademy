// Clase Producto
// Cada producto que vende el super es creado con esta clase
export class Producto {
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

        // Se deben validar todos los atributos 
        // Se valida que sea un valor valido
        if ((stock === undefined) || (stock === null) || (stock === '') || (stock === 0)) {
            this.stock = 10;
        } else {
            this.stock = stock;
        }
        
        // Se valida que sea un valor valido
    }
}
