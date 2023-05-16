// Importacion de la Clase ProductoEnCarrito
import { ProductoEnCarrito } from "./productcart.js";
import { ProductosDelSuper } from "./productsuper.js";

// Clase Carrito
// Cada cliente que venga a mi super va a crear un carrito
export class Carrito {
  productos; // Lista de productos agregados
  categorias; // Lista de las diferentes categorías de los productos en el carrito
  precioTotal; // Lo que voy a pagar al finalizar mi compra

  // Al crear un carrito, empieza vació
  constructor() {
    this.productos = [];
    this.categorias = [];
    this.precioTotal = 0;
  }

  // función que agrega @{cantidad} de productos con @{sku} al carrito
  async agregarProducto(sku, cantidad, productosDelSuper) {
    // Si lo valores con validos
    if (sku && cantidad) {
      // Busco el producto en el carrito
      console.log(`Buscando el producto ${sku} en el carrito...`);
      const productoExistenteEnCarrito = this.productos.find((producto) => producto.sku === sku);

      // Verifico si el producto se encuentera en el carrito
      if (productoExistenteEnCarrito) {
        // Si el producto es encontrado sumo las cantidades
        console.log(`El producto ${productoExistenteEnCarrito.sku} se encuentra en el carrito...`);

        // 
        this.updateQuantity(productoExistenteEnCarrito, cantidad);
      } else {
        try {
          // Busco el producto en el super
          console.log(`Buscando el producto en la base del super... ${sku}`);
          const productoExistenteEnSuper = await productosDelSuper.findProductBySku(sku);

          // Verifico si el producto se encuentra en el producto del supermercado
          if (productoExistenteEnSuper) {
            // Agrego el producto
            this.addProduct(productoExistenteEnSuper, cantidad);
          } else {
            console.log(`No se encontró el producto ${sku} en el supermercado.`
            );
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      console.log("El sku y la cantidad deben ser especificados");
    }
  }

  eliminarProducto(sku, cantidad) {
    return new Promise((resolve, reject) => {
      if (sku && cantidad) {
        // Busco el producto en el carrito
        console.log(`Buscando el producto ${sku} en el carrito...`);
        const productoExistenteCarrito = this.productos.find((producto) => producto.sku === sku);

        if (productoExistenteCarrito) {
          if (cantidad < productoExistenteCarrito.cantidad) {
            productoExistenteCarrito.cantidad -= cantidad;

            this.preciototal -= productoExistenteCarrito.precio * cantidad;
          } else {
            const index = this.productosEnCarritoCarrito.indexOf(productoExistenteCarrito);

            this.productosEnCarritoCarrito.splice(index, 1);
          }

          resolve("Producto eliminado del carrito existosamente.");
        } else {
          reject(`El producto con SKU ${sku} inexistente en el carrito.`);
        }
      } else {
        console.log("El sku y la cantidad deben ser especificados");
      }
    }).then(result => {
      console.log(result);
    }).catch(function (err) {
      console.log(err);
    });
  }

  updateQuantity(productoExistenteEnCarrito, cantidad) {
    // Modificando la cantidad, el precio y el precio total
    console.log(`Modificando el cantidad...`);

    //this.preciototal -= productoExistenteEnCarrito.precio * cantidad;
    //this.precioTotal -= calculaPrecio(productoExistenteEnCarrito.precio, cantidad);
    // Calculo el precio
    this.precioTotal -= this.calculaPrecioTotalDelProducto(productoExistenteEnCarrito.producto.precio, cantidad);

    productoExistenteEnCarrito.cantidad += cantidad;
    //this.precioTotal += productoExistenteEnCarrito.precio * productoExistenteEnCarrito.cantidad;
    this.precioTotal += this.calculaPrecioTotalDelProducto(productoExistenteEnCarrito.precio, cantidad);

    // Agregado Exitosamente
    console.log(`Modificando cantidad del producto ${productoExistenteEnCarrito.sku} exitosamente...`);
  }

  addProduct(productoExistenteEnSuper, cantidad) {
    //
    console.log(`Agregando producto  ${productoExistenteEnSuper.sku} cantidad  ${cantidad}`);

    // Creo un producto nuevo
    const nuevoProducto = new ProductoEnCarrito( productoExistenteEnSuper.sku,
       productoExistenteEnSuper.nombre, cantidad );

    // Agrego el producto
    this.productos.push(nuevoProducto);

    // Calculo el precio
    this.precioTotal += this.calculaPrecioTotalDelProducto(productoExistenteEnSuper.precio, cantidad);

    // Falta verificar el tema de las categorias se deberia verificar si la categoria existe no se agrega
    this.categorias.push(productoExistenteEnSuper.categoria);

    // Agregado Exitosamente
    console.log(`Producto  ${nuevoProducto.sku} agregado exitosamente...`);
  }


  calculaPrecioTotalDelProducto(precioDelProducto, cantidad) {
    //
    let precio = 0;

    // Modificando la cantidad, el precio y el precio total
    console.log(`Calcualndo precio total...`);

    // Calculo el precio por el producto
    precio = precioDelProducto * cantidad;

    return precio;
  }

  listProducts() {
    console.log("Productos en el carrito:");
    this.productos.forEach((producto) => {
      console.log(`SKU: ${producto.sku}`);
      console.log(`SKU: ${producto.nombre}`);
      console.log(`Cantidad: ${producto.cantidad}`);
      console.log("------------------------");
    });
  }

  listCategories() {
    console.log("Categorias en el carrito:");
    this.productos.forEach((producto) => {
      console.log(`SKU: ${producto.categoria}`);
      console.log(`Cantidad: ${producto.cantidad}`);
      console.log("------------------------");
    });
  }

  listPrecioTotal() {
    console.log(`Total del carrito: ${this.precioTotal}`);
  }
}
