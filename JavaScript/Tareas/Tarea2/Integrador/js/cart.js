// Importacion de la Clase ProductoEnCarrito
import { ProductoEnCarrito } from './productcart.js';

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

    /*
    * función que agrega @{cantidad} de productos con @{sku} al carrito
    */
    async agregarProducto(sku, cantidad) {
        // if ((sku !== undefined) && (sku !== null) && (sku !== '') && (sku !== 0)) {
        //     if ((cantidad !== undefined) && (cantidad !== null) && (cantidad !== '') && (cantidad !== 0)) {
        // if ((sku !== undefined) || (sku !== null) || (sku !== '') || (sku !== 0)) {
        //    if ((cantidad !== undefined) || (cantidad !== null) || (cantidad !== '') || (cantidad !== 0)) {
            //    if (sku in productos) {
            //        this.productos[sku].cantidad += cantidad;
            //         this.precioTotal = this.precioTotal + this.productos[sku].precio * this.productos[sku].cantidad);
            //      } else {
                    // Busco el producto en la "base de datos"
                    // console.log(`Buscando producto ${sku}`);
                    // const producto = await window.findProductBySkuInProductOfSuper(sku);
                    
                    // if (producto) {
                    //     console.log("Producto encontrado", producto);
                    // }
                    
                    // // Agrego el producto
                    // console.log(`Agregando producto ${sku} cantidad ${cantidad}`);

                    // // Creo un producto nuevo
                    // const nuevoProducto = new ProductoEnCarrito(sku, producto.nombre, cantidad);
                    // this.productos.push(nuevoProducto);
                    // this.precioTotal = this.precioTotal + (producto.precio * cantidad);
                    // this.categorias.push(producto.categoria);
            //    }
        //     } else {
        //         console.log("La cantidad debe ser mayor a cero");
        //     }
        // } else {
        //     console.log("El SKU no puede estar vacio");
        // }

        if (sku && cantidad) {
            // Busco el producto en la "base de datos"
            console.log(`Buscando producto ${sku}`);
            try {
              const producto = await window.findProductBySkuInProductOfSuper(sku);
              console.log("Producto encontrado", producto);
      
              // Agrego el producto
              console.log(`Agregando producto ${sku} cantidad ${cantidad}`);
      
              // Creo un producto nuevo
              const nuevoProducto = new ProductoEnCarrito(sku, producto.nombre, cantidad);
              this.productos.push(nuevoProducto);
              this.precioTotal += producto.precio * cantidad;
              this.categorias.push(producto.categoria);
            } catch (error) {
              console.log(error);
            }
          } else {
            console.log("El SKU y la cantidad deben ser especificados");
          }
        }

        listarProductos() {
            console.log('Productos en el carrito:');
            this.productos.forEach((producto) => {
              console.log(`SKU: ${producto.sku}`);
              console.log(`Cantidad: ${producto.cantidad}`);
              console.log('------------------------');
            });
          }
    }
//}