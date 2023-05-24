const { DataTypes } = require('sequelize');
const sequelize = require('../database');

// Definición del modelo de Library
const Library = sequelize.define('Library', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Library;

// Acciones
// ○ Crear librería (AUTH)
// ○ Obtener una librería
// Debe traer también todos los libros
// ○ Obtener todas las librerías
// ○ Modificar una librería (AUTH)
// ○ Eliminar una librería (**) (AUTH)
// ○ Agregar un libro nuevo (*) (AUTH)

// Entidad
// id Int El identificador de la librería
// name String Nombre de la librería. Eg: El Librote
// location String Dirección física de la librería. Eg: Av. Libertador 1460
// telefono String Número de teléfono. Eg: 3514563344