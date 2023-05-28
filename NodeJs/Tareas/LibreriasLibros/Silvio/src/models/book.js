// Acciones
// Crear libro (*) (AUTH)
// Obtener un libro en particular
// Obtener todos los libros
// Modificar un libro (AUTH)
// Eliminar un libro (**) (AUTH)

// Entidad
// id Int El identificador de este libro en particular
// isbn Int Este identificador es único en todo el mundo y representa el libro, la versión del autor y el año de edición
// titulo String Título del libro --
// autor String Autor del libro --
// year String Año de edición del libro
// library Int El identificador de la librería en donde este libro se encuentra
// Se agregan campos 

const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Library = require('./library');

// Definición del modelo de Book
const Book = sequelize.define('Book', {
  bookId: {
    type: DataTypes.INT,
    allowNull: false,
  },

  libraryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  bookIsbn: {
    type: DataTypes.INT,
    allowNull: false,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false
  },

  author: {
    type: DataTypes.STRING,
    allowNull: false
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

// Definición de la relación entre Lbreria y Libro
Library.hasMany(Book);
Book.belongsTo(Library);

module.exports = Book;
