// Crea la clase Carrito 
// Al contruotor se le pasan los valores moto total y producto
class Carrito {
  constructor(montoTotal, productos) {
    this.montoTotal = montoTotal;
    this.productos = productos;
  }
  
  AgregarProducto(nombre, precio, unidades) {
//    this.productos.push(nombre);
//    this.montoTotal += precio * unidades;
    let producto = { nombre, precio, unidades };
    let busqueda = this.BuscarProducto(nombre);

    if (busqueda.existe) {
//      console.log(`Ya existe ${nombre} con ${this.productos[busqueda.index].unidades} unidades`);
      console.log(`Ya existe ${nombre} con ${this.productos[busqueda.index].unidades} unidades`);
    } else {
      this.productos.push(producto);
      this.montoTotal += precio * unidades;
    }
  }
  
  BuscarProducto(nombre) {
    let existe = Boolean;

    for (let indice = 0; indice < this.productos.length; indice++) {
      if (this.productos[indice].nombre === nombre) {
        return { existe: true, index: indice };
      }
    }

    return { existe: false };
  }
}

// Se inicializa y agrega un producto al carrito
let carrito = new Carrito(10, ["Leche"], 1);

// Se agrega un producto distinto al carrito
carrito.AgregarProducto("Azucar", 5, 2);

carrito.AgregarProducto("Harina", 7.32, 3);

carrito.AgregarProducto("Pan", 2.5, 3);

carrito.AgregarProducto("Azucar", 5, 2);

// Se agrega un producto distinto al carrito
console.log(carrito);
console.log(`Monto total: ${carrito.montoTotal}`);
//console.log(`Productos: ${carrito.productos}`);