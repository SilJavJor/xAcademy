// Clase Producto
import { ProductoBase } from "./productobase.js";

// Cada producto que vende el super es creado con esta clase
export class Producto extends ProductoBase {
    categoria;      // Categoría a la que pertenece este producto
    stock;          // Cantidad disponible en stock

    constructor(sku, nombre, categoria, precio, stock) {
        super(sku, nombre, precio);

        this.categoria = categoria;
        // this.precio = precio;

        // Se deben validar todos los atributos 
        // Se valida que sea un valor valido
        if ((stock === undefined) || (stock === null) || (stock === '') || (stock === 0)) {
            this.stock = 10;
        } else {
            this.stock = stock;
        }
    }
}