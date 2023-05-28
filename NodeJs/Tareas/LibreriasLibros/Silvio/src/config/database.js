const { Sequelize } = require('sequelize');

// Configuración de Sequelize
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

module.exports = sequelize;

// const { Pool } = require('pg');

// // Configuración de la base de datos
// const config = {
//   user: 'tu_usuario',
//   password: 'tu_contraseña',
//   host: 'localhost',
//   port: 5432, // Puerto por defecto para PostgreSQL
//   database: 'nombre_de_tu_base_de_datos'
// };

// // Crea una nueva instancia del pool de conexiones
// const pool = new Pool(config);

// module.exports = pool;


// // Configuración de la base de datos 1
// const config1 = {
//   // Configuración para la base de datos 1
// };

// // Configuración de la base de datos 2
// const config2 = {
//   // Configuración para la base de datos 2
// };

// module.exports = {
//   config1,
//   config2
// };


// Configuración de PostgreSQL
// const postgresConfig = {
//   user: 'tu_usuario',
//   password: 'tu_contraseña',
//   host: 'localhost',
//   port: 5432, // Puerto por defecto para PostgreSQL
//   database: 'nombre_de_tu_base_de_datos_postgres'
// };

// // Configuración de MySQL
// const mysqlConfig = {
//   user: 'tu_usuario',
//   password: 'tu_contraseña',
//   host: 'localhost',
//   port: 3306, // Puerto por defecto para MySQL
//   database: 'nombre_de_tu_base_de_datos_mysql'
// };

// // Configuración de SQLite
// const sqliteConfig = {
//   filename: './ruta/a/tu/base/de/datos.sqlite'
// };

// module.exports = {
//   postgresConfig,
//   mysqlConfig,
//   sqliteConfig
// };


// Asegúrate de reemplazar 'tu_usuario', 'tu_contraseña', 'nombre_de_tu_base_de_datos_postgres', 
//'nombre_de_tu_base_de_datos_mysql' y './ruta/a/tu/base/de/datos.sqlite' con los valores correctos 
//para tu configuración.

// Crea instancias separadas para cada base de datos: Al igual que en el ejemplo anterior, 
//puedes crear instancias separadas para cada base de datos utilizando los paquetes correspondientes. 
//Aquí tienes un ejemplo utilizando los paquetes pg, mysql2 y better-sqlite3:
// const { Pool } = require('pg');
// const mysql = require('mysql2');
// const sqlite = require('better-sqlite3');
// const { postgresConfig, mysqlConfig, sqliteConfig } = require('./database');

// // Crea una instancia del pool de conexiones para PostgreSQL
// const postgresPool = new Pool(postgresConfig);

// // Crea una conexión para MySQL
// const mysqlConnection = mysql.createConnection(mysqlConfig);

// // Crea una instancia de la base de datos SQLite
// const sqliteDB = sqlite(sqliteConfig.filename);

// module.exports = {
//   postgresPool,
//   mysqlConnection,
//   sqliteDB
// };


// Utiliza las instancias de las bases de datos en tu aplicación: Ahora puedes utilizar las instancias postgresPool, mysqlConnection y sqliteDB en diferentes partes de tu aplicación para realizar consultas y operaciones en las bases de datos correspondientes.
// Por ejemplo, puedes ejecutar consultas en PostgreSQL:

// javascript
// Copy code
// const { postgresPool } = require('./database');

// postgresPool.query('SELECT * FROM users', (err, result) => {
//   // Manejar el resultado o el error de la consulta en PostgreSQL
// });
// Realizar operaciones en MySQL:

// javascript
// Copy code
// const { mysqlConnection } = require('./database');

// mysqlConnection.query('SELECT * FROM products', (err, result) => {
//   // Manejar el resultado o el error de la consulta en MySQL
// });
// Y ejecutar consultas en SQLite:

// javascript
// Copy code
// const { sqliteDB } = require('./database');

// const statement = sqliteDB.prepare('SELECT * FROM orders');
// const result = statement.all();
// // Manejar el resultado de la consulta en SQLite
// De esta manera, puedes utilizar diferentes instancias o conexiones para interactuar


// const { Sequelize } = require('sequelize');

// class Database {
//   constructor(databaseType, config) {
//     this.databaseType = databaseType;
//     this.config = config;
//     this.sequelize = new Sequelize(this.config);
//   }

//   async connect() {
//     try {
//       await this.sequelize.authenticate();
//       console.log('Conexión exitosa a la base de datos');
//     } catch (error) {
//       console.error('Error al conectar a la base de datos:', error);
//     }
//   }

//   async disconnect() {
//     try {
//       await this.sequelize.close();
//       console.log('Desconexión exitosa de la base de datos');
//     } catch (error) {
//       console.error('Error al desconectar de la base de datos:', error);
//     }
//   }

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
