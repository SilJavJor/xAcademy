const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

// Middleware para parsear el cuerpo de las peticiones
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Inicialización de Passport
app.use(passport.initialize());

// Importar y usar las rutas
const libraryRoutes = require('./routes/library');
const bookRoutes = require('./routes/book');
const userRoutes = require('./routes/user');

app.use('/library', libraryRoutes);
app.use('/book', bookRoutes);
app.use('/user', userRoutes);

// Puerto de escucha
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});


// const express = require('express');
// const app = express();

// // Configuraciones adicionales de Express (cors, body-parser, etc.)

// // Inicializar Sequelize
// const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize('database', 'username', 'password', {
//   dialect: 'mysql', // Puedes cambiar esto según tu base de datos
//   // Otras opciones de configuración de Sequelize
// });

// // Configuración de los modelos de Sequelize (Librería y Libro)

// // Configuración de las rutas de Express

// // Iniciar el servidor
// const port = 3000; // Puedes cambiar esto según tus necesidades
// app.listen(port, () => {
//   console.log(`Servidor escuchando en el puerto ${port}`);
// });

// const express = require('express');
// const app = express();

// // Configuración y middleware
// app.use(express.json());

// // Rutas
// const libraryRoutes = require('./routes/libraryRoutes');
// const bookRoutes = require('./routes/bookRoutes');
// const userRoutes = require('./routes/userRoutes');
// app.use('/library', libraryRoutes);
// app.use('/book', bookRoutes);
// app.use('/user', userRoutes);

// // Iniciar servidor
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Servidor iniciado en el puerto ${port}`);
// });

// const express = require('express');
// const session = require('express-session');
// const passport = require('./auth/passport');
// const libraryRoutes = require('./routes/library');
// const { initModels } = require('./models');

// // Configurar Express
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(session({
//   secret: 'secret',
//   resave: false,
//   saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// // Rutas
// app.use('/libraries', libraryRoutes);

// // Ruta de inicio
// app.get('/', function(req, res) {
//   res.send('API REST de Librerías');
// });

// // Inicialización de los modelos y sincronización con la base de datos
// initModels()
//   .then(() => {
//     // Iniciar servidor
//     app.listen(3000, function() {
//       console.log('Servidor iniciado en el puerto 3000');
//     });
//   })
//   .catch(error => {
//     console.error('Error al sincronizar la base de datos:', error);
//   });


// const pool = require('./database');

// // Ejemplo de consulta a la base de datos
// pool.query('SELECT * FROM users', (err, result) => {
//   if (err) {
//     console.error('Error al ejecutar la consulta:', err);
//   } else {
//     console.log('Resultado de la consulta:', result.rows);
//   }
// });


// const { Pool } = require('pg');
// const { config1, config2 } = require('./database');

// // Crea una instancia del pool de conexiones para la base de datos 1
// const pool1 = new Pool(config1);

// // Crea una instancia del pool de conexiones para la base de datos 2
// const pool2 = new Pool(config2);

// module.exports = {
//   pool1,
//   pool2
// };


// const { pool1 } = require('./database');

// pool1.query('SELECT * FROM users', (err, result) => {
//   // Manejar el resultado o el error de la consulta en la base de datos 1
// });


// const { pool2 } = require('./database');

// pool2.query('SELECT * FROM products', (err, result) => {
//   // Manejar el resultado o el error de la consulta en la base de datos 2
// });


//   // Agrega métodos adicionales según tus necesidades, como métodos para realizar consultas o transacciones

//   async queryUsers() {
//     try {
//       const users = await this.sequelize.models.User.findAll();
//       return users;
//     } catch (error) {
//       console.error('Error al consultar usuarios:', error);
//       return [];
//     }
//   }
// }

// module.exports = Database;
// En tu archivo principal, como index.js o app.js, crea una instancia de la clase Database para cada base de datos que deseas utilizar y realiza las operaciones correspondientes:
// javascript
// Copy code
// const Database = require('./database');

// // Configuración de PostgreSQL
// const postgresConfig = {
//   dialect: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   database: 'nombre_de_tu_base_de_datos_postgres',
//   username: 'tu_usuario',
//   password: 'tu_contraseña'
// };

// // Configuración de MySQL
// const mysqlConfig = {
//   dialect: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   database: 'nombre_de_tu_base_de_datos_mysql',
//   username: 'tu_usuario',
//   password: 'tu_contraseña'
// };

// // Configuración de SQLite
// const sqliteConfig = {
//   dialect: 'sqlite',
//   storage: './ruta/a/tu/base/de/datos.sqlite'
// };

// // Crea una instancia de la clase Database para PostgreSQL
// const postgresDatabase = new Database('PostgreSQL', postgresConfig);
// await postgresDatabase.connect();
// // Realiza operaciones o consultas en PostgreSQL
// const usersPostgres = await postgresDatabase.queryUsers();
// console.log('Usuarios en PostgreSQL:', usersPostgres);
// await postgresDatabase.disconnect();

// // Crea una instancia de la clase Database para MySQL
// const mysqlDatabase = new Database('MySQL', mysqlConfig);
// await mysqlDatabase.connect();
// // Realiza operaciones o consultas en MySQL
// const usersMySQL = await mysqlDatabase.queryUsers();
// console.log('Usuarios en MySQL:', usersMySQL);
// await mysqlDatabase.disconnect();

// // Crea una instancia de la clase Database para SQLite
// const sqliteDatabase = new Database('SQLite', sqliteConfig);
// await sqliteDatabase.connect();
// // Realiza operaciones o consultas en SQLite
// const usersSQLite = await sqliteDatabase.queryUsers();
// console.log('Usuarios en SQLite:', usersSQLite);
// await sqliteDatabase.disconnect();
// Asegúrate de reemplazar 'tu_usuario', 'tu_contraseña', 'nombre_de_tu_base_de_datos_postgres', 'nombre_de_tu_base_de_datos_mysql' y './ruta/a/tu/base/de/datos.sqlite' con los valores correctos para tu configuración.

// En este ejemplo, la clase Database encapsula las configuraciones y conexiones de Sequelize para cada base de datos. Puedes agregar métodos adicionales a la clase para realizar consultas u otras operaciones según tus necesidades.

// Espero que este ejemplo te ayude a utilizar una clase para unificar las configuraciones, conexiones y consultas a través de un ORM en tu aplicación Node.js.