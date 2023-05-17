// Clase Producto
// Cada producto que vende el super es creado con esta clase
export class ProductoBase {
    sku;            // Identificador único del producto
    nombre;         // Su nombre
    precio;         // Su precio

    constructor(sku, nombre, precio) {
        this.sku = sku;
        this.nombre = nombre;
        this.precio = precio;
    }
}