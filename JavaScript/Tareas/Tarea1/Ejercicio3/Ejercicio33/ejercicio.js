// Crea la clase Carrito 
// Al contruotor se le pasan los valores moto total y producto
class Carrito {
  constructor(totalAmount = 0, products = []) {
    this.totalAmount = totalAmount;
    this.products = products;
  }
  
  agregarProducto(name, price, units) {
    // Buscar si el producto ya existe en el carrito
    const existsProduct = this.products.find((product) => product.name === name);
    
    if (existsProduct) {
      // Si el producto ya existe, imprimir un mensaje y no hacer nada más
      console.log(`Ya existe ${name} con ${existsProduct.units} unidades`);
    } else {
      // Si el producto no existe, crear un nuevo objeto y se agrega al carrito
      let product = {name, price, units};
      this.products.push(product);

      // Actualizar el monto total del carrito sumando el precio del producto por la cantidad de unidades
      this.totalAmount += price * units;
    }
 
    //if (buscarProducto(name) === null) {
      // Si el producto no existe, crear un nuevo objeto y se agrega al carrito
    //  let product = {name, price, units};
    //  this.products.push(product);

      // Actualizar el monto total del carrito sumando el precio del producto por la cantidad de unidades
    //  this.totalAmount += price * units;
    //}
  }
 
  buscarProducto(name) {
    // Buscar si el producto ya existe en el carrito
    const existsProduct = this.products.find((product) => product.name === name);
    
    if (existsProduct) {
      // Si el producto ya existe, imprimir un mensaje y no hacer nada más
      console.log(`Ya existe ${name} con ${existsProduct.units} unidades`);
      // return
    }

    return existsProduct;
  }
}

// Se crea el carrito  -->  Objeto  -->  Vacio
let carrito = new Carrito();

// Se agregan distintos productos al carrito
carrito.agregarProducto("Leche", 10, 1);

carrito.agregarProducto("Azucar", 5, 2);

carrito.agregarProducto("Harina", 7.32, 3);

carrito.agregarProducto("Pan", 2.5, 3);

carrito.agregarProducto("Azucar", 5, 2);

console.log(carrito);
console.log(`Monto total: ${carrito.totalAmount}`);

// Hay que recorrer con un for
//console.log(`Productos: ${carrito.products.name}`);