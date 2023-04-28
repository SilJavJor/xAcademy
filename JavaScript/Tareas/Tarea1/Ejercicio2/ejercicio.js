const array1 = ['rojo', 'azul', 'amarillo'];
const array2 = ['blanco', 'negro', 'rojo'];
console.log(ElementosComunes(array1, array2));              // Deberia mostrar ['rojo']

const array3 = [4, 3, true, 'manzana'];
const array4 = ['pera', 3, false, true, 3, true];
console.log(ElementosComunes(array3, array4));              // Deberia mostrar [3, true]

function ElementosComunes(array1, array2) {
  return array1.filter(elemento => array2.includes(elemento));
}