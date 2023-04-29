// Crea la clase Carrito 
// Al contruotor se le pasan los valores
class Carrito {
  constructor(montoTotal, productos) {
    this.montoTotal = montoTotal;
    this.productos = productos;
  }
  
  AgregarProducto(nombre, precio, unidades) {
    this.productos.push(nombre);
    this.montoTotal += precio * unidades;
  }
}

// Se inicializa y agrega un producto al carrito
let carrito = new Carrito(10, ["Leche"]);

// Se agrega un producto distinto al carrito
carrito.AgregarProducto("Azucar", 5, 2);

// Se agrega un producto distinto al carrito
carrito.AgregarProducto("Harina", 7.32, 3);

// Se agrega un producto distinto al carrito
carrito.AgregarProducto("Pan", 2.5, 3);
console.log(carrito);
