// Crea la clase Carrito 
// Al contruotor se le pasan los valores
class Carrito {
  constructor(montoTotal, productos) {
    this.montoTotal = montoTotal;
    this.productos = productos;
  }
}

// Crear una instancia de la clase Carrito
let carrito1 = new Carrito(10, ["Leche"]);

// Muestro el monto total del producto cargado
console.log(`Monto total: ${carrito1.montoTotal}`);
console.log(`Productos: ${carrito1.productos}`);

// Crear otra instancia de la clase Carrito para no sobreescribir la instancia carrito 1
let carrito2 = new Carrito(50, ["Pan"]);

// Muestro el monto total del producto cargado
console.log(`Monto total: ${carrito2.montoTotal}`);
console.log(`Productos: ${carrito2.productos}`);
