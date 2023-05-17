
import { ProductoBase } from "./productobase.js";

// Clase ProductoEnCarrirto
// Cada producto que se agrega al carrito es creado con esta clase
export class ProductoEnCarrito extends ProductoBase {
    cantidad;  // Cantidad de este producto en el carrito

    constructor(sku, nombre, precio, cantidad) {
        super(sku, nombre, precio);

        this.cantidad = cantidad;
    }
}
