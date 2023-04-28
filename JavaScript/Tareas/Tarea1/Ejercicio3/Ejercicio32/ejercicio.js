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

// Aca debo ver d egenerar la clase vacia
let carrito = new Carrito(0, [""]);

// Se agrega un producto al carrito
carrito.AgregarProducto("Leche", 10, 1);
console.log(carrito);

// Se agrega un producto distinto al carrito
carrito.AgregarProducto("Azucar", 5, 2);
console.log(carrito);