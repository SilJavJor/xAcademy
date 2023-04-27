// ========= Repaso Clase 3 ========= 
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway'];

// Construccion
const mixed = ['Str', 89, [3, 5], false, null];
const arr = new Array(1, 2, 3, 4, 5);

// Acceso (por indice)
const first = countries[0];
const second = countries[1];
const lastIndex = countries.length - 1;
const last = countries[lastIndex];

// ITerar un array
// a. for loop
// index          0  1   2   3
const numbers = [44, 2, 31, 17]; // Length: 4

for (let i = 0; i < numbers.length; i++) {
    let country = numbers[i];
    console.log(country);
}

// // b. for of loop
for (const number of numbers) {
    console.log(number);
}

// Adding items to end of an array
countries.push('Iceland');

// Adding items to the beginning of an array
countries.unshift('Iceland');

// Removing items from end of an array
const removed = countries.pop();

// Removing items from the beginning of an array
const shifted = countries.shift();

// Finding an index of an item in the array
const pos = countries.indexOf('Denmark');




// ========= Funciones Flecha ========= 

// Funcion
function sumar(a, b) {
    return a + b;
}

// Misma funcion en forma de expresion
const sumar = function (a, b) {
    return a + b;
}

// Misma en formato de flecha
const sumar2 = (a, b) => {
    return a + b;
}

// Si tenes 1 sola linea de codigo
// Podes borrar las llaves y el return
// Arrow function
const sumar3 = (a, b) => a + b;


// Si la funcion recibe 1 solo parametro
// Podes borrar los parentesis
const saludo = () => console.log("Hola");
const saludo2 = (nombre) => console.log("Hola " + nombre);
const saludo3 = nombre => console.log("Hola " + nombre);

const saludo4 = (nombre, apellido) => console.log("Hola " + nombre + " " + apellido);

const saludo5 = (nombre, apellido) => console.log(`Hola ${nombre} ${apellido}`);


saludo4("Gaston", "Fernandez");
saludo5("Gaston", "Fernandez");




// ========= Callback Functions ========= 

// Tipos de datos
// Primitivos: string, number, boolean, undefined, null
// Otros: object, array, function

function cafetera() {
    console.log("Preparando cafe");
    return 'Cafe';
}

console.log(cafetera);


function consologuear(dato) {
    console.log(dato);
    dato();
}

consologuear(cafetera);



function dejarloEnLaCalle(titular) {
    console.log(`Dejamos el auto de ${titular.nombre} en la calle`);
}

const tallerMecanico = (auto) => {
    console.log("Reparando el auto...");

    auto.indicaciones();
}

const auto = {
    color: 'blanco',
    titular: {
        nombre: "Gaston",
        telefono: 2223331
    },
    indicaciones: dejarloEnLaCalle
};

const auto2 = {
    color: 'negro',
    titular: {
        nombre: "Federico",
        telefono: 2223331
    },
    indicaciones: llamarAlCliente
};


const llamarAlCliente = (titular) => console.log(`Llamando a ${titular.nombre} al numero ${titular.telefono}...`);

tallerMecanico(auto, () => llamarAlCliente(auto.titular));

tallerMecanico(auto2, () => console.log("Dejalo en la calle"));


let botonDesabilitado = false;

function buttonClick() {
    botonDesabilitado = true;
    setTimeout(() => {
        botonDesabilitado = false;
    }, 2000);
}


setTimeout(saludar, 2000);

const saludar = () => console.log("Hola!");

function gameLoop() {
    //.. Calculas ubicacion actual
    //.. Colisiones
    //.. Dibujar las cosas del juego
}

setInterval(gameLoop, 30);








// ========= Find, Filter, Map, Reduce ========= 


//               0  1   2   3   4
const numeros = [2, 5, 10, -3, 50];

// Funcion "buscar" que devuelve true si un numero dado coincide con el valor recibido
function buscar(n) {
    return n !== 3;
}

buscar(4);

// Metodo "find" de los arrays
// Devuelve el primer elemento que coincida con el predicado dado
const found = numeros.find(buscar);

console.log(found);



// Mi version del find
function find(predicado) {
    for (let i = 0; i < numeros.length; i++) {
        if (predicado(numeros[i])) {
            return numeros[i];
        }
    }
    return undefined;
}

const find1 = find(n => n !== 4);
const find2 = find(n => n === 5);
const find3 = find(n => n === 58);

console.log(`
    Resultado 1 = ${find1}
    Resultado 2 = ${find2}
    Resultado 3 = ${find3}
`);


const masNumeros = [4, 1 - 4, 6, -10];

// Metodo "filter" de los arrays
// Devuelve un nuevo array con aquellos elementos que coincidan con el predicado dado
const numerosPositivos = masNumeros.filter(n => n > 0);
console.log(`Numeros positivos = ${numerosPositivos}`);


// Metodo "map" de los arrays
// Devuelve un nuevo array con todos los elementos originales modificados segun la funcion que le dimos
const letras = ['a', 'b', 'c', 'd'];
const convertidas = letras.map(letra => letra.toUpperCase());
console.log(`Letras convertidas: ${convertidas}`);


// Reduce. Reduce un array a 1 solo valor
// Recibe un valor inicial y una funcion callback con 2 paremtros, el primero es donde va acumulando cada iteracion, el 2do es el valor actual
const resultado = numeros.reduce((acumulador, actual) => {
    acumulador = acumulador * actual;
    return acumulador;
}, 1)

console.log(resultado);


const resultado2 = letras.reduce((acumulador, actual) => {
    acumulador = acumulador + "-" + actual;
    return acumulador;
}, '');

console.log(resultado2);


const letras2 = ['a', null, 'b', null, 'c'];
const resultado3 = letras.reduce((acumulador, actual) => {
    if (actual !== null) {
        acumulador.push(actual);
    }
    return acumulador;
}, []);

console.log(resultado3);
