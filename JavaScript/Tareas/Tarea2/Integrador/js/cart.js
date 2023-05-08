// Importacion de la Clase ProductoEnCarrito
import { ProductoEnCarrito } from './productcart.js';
import { ProductosDelSuper } from './productsuper.js';

// Clase Carrito
// Cada cliente que venga a mi super va a crear un carrito
export class Carrito {
    productos;      // Lista de productos agregados
    categorias;     // Lista de las diferentes categorías de los productos en el carrito
    precioTotal;    // Lo que voy a pagar al finalizar mi compra

    // Al crear un carrito, empieza vació
    constructor() {
        this.productos = [];
        this.categorias = [];
        this.precioTotal = 0;
    }
    
    // función que agrega @{cantidad} de productos con @{sku} al carrito
    async agregarProducto(sku, cantidad) {
        // Si lo valores con validos
        if (sku && cantidad) {
            // Busco el producto en el carrito
            console.log(`Buscando el producto ${sku} en el carrito...`);
            const productoExistenteCarrito = this.productos.find(producto => producto.sku === sku);

            // Si el producto se encuentera en el carrito sumo la cantidad|
            if (productoExistenteCarrito) {
                // Modificando la cantidad, el precio y el precio total
                console.log(`Modificando valores...`);

                this.precioTotal -= productoExistente.precio * cantidad;

                productoExistenteCarrito.cantidad += cantidad;
                this.precioTotal += productoExistenteCarrito.precio * productoExistenteCarrito.cantidad;
            } else {
                try {
                    // Busco el producto en el super
                    console.log(`Buscando el producto en la base del super... ${sku}`);
                    //const producto = await window.findProductBySkuInProductOfSuper(sku);

                    const producto = await new ProductosDelSuper().findProductBySku(sku);
                    
                    // Agrego el producto
                    console.log(`Agregando producto  ${sku} cantidad  ${cantidad}`);
      
                    // Creo un producto nuevo
                    const nuevoProducto = new ProductoEnCarrito(sku, producto.nombre, cantidad);
                    this.productos.push(nuevoProducto);
                    this.precioTotal += producto.precio * cantidad;
                    this.categorias.push(producto.categoria);
                } catch (error) {
                    console.log(error);
                }
            }
        } else {
            console.log("el sku y la cantidad deben ser especificados");
        }
    }

    async eliminarProducto(sku, cantidad) {
        return new Promise((resolve, reject) => {
          // Busco el producto en el carrito
          console.log(`Buscando el producto ${sku} en el carrito...`);
          const productoExistenteCarrito = this.productos.find(producto => producto.sku === sku);
      
          if (productoExistenteCarrito) {
            if (cantidad < productoExistenteCarrito.cantidad) {
              productoExistenteCarrito.cantidad -= cantidad;
            } else {
              const index = this.productosEnCarritoCarrito.indexOf(productoExistenteCarrito);
              this.productosEnCarritoCarrito.splice(index, 1);
            }
            resolve("Producto eliminado del carrito.");
          } else {
            reject(`El producto con SKU ${sku} no existe en el carrito.`);
          }
        });
    }

    listProducts() {
        console.log('Productos en el carrito:');
        this.productos.forEach((productos) => {
          //console.log(`SKU: ${producto.sku}`);
          //console.log(`Cantidad: ${producto.cantidad}`);
          console.log('------------------------');
        });
    }
    
    listCategories() {
        console.log('Categorias en el carrito:');
        this.productos.forEach((producto) => {
          //console.log(`SKU: ${producto.sku}`);
          //console.log(`Cantidad: ${producto.cantidad}`);
          console.log('------------------------');
        });
    }

    listPrecioTotal() {
        console.log(`Total del carrito: ${this.precioTotal}`);
    }
}