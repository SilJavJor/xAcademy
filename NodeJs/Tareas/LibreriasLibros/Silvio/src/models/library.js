// Entidad
// id Int El identificador de la librería
// name String Nombre de la librería. Eg: El Librote
// location String Dirección física de la librería. Eg: Av. Libertador 1460
// telefono String Número de teléfono. Eg: 3514563344
// Se agregan campos 

const { DataTypes } = require('sequelize');
//const sequelize = require('../config/database');
const sequelize = require('../database');

// Definición del modelo de Libreria
const Library = sequelize.define('Library', {
  libraryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {isEmail: true, },
  },

  creationDate: {
    type: datatypes.DATE,
    allownull: true
  },
  
  userId: {
    type: DataTypes.INT,
    allowNull: false,
  },

  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  lastModification: {
    type: datatypes.DATE,
    allownull: true
  }
});

module.exports = Library;

// Acciones
// Crear librería (AUTH)
// Obtener una librería
// Debe traer también todos los libros
// Obtener todas las librerías
// Modificar una librería (AUTH)
// Eliminar una librería (**) (AUTH)
// Agregar un libro nuevo (*) (AUTH)
