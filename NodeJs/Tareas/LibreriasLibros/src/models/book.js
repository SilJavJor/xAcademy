// Acciones
// ○ Crear libro (*) (AUTH)
// ○ Obtener un libro en particular
// ○ Obtener todos los libros
// ○ Modificar un libro (AUTH)
// ○ Eliminar un libro (**) (AUTH)

// ● Entidad
// id Int El identificador de este libro en particular
// isbn Int Este identificador es único en todo el mundo y representa el
// libro, la versión del autor y el año de edición
// titulo String Título del libro
// autor String Autor del libro
// year String Año de edición del libro
// library Int El identificador de la librería en donde este libro se encuentra

const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Library = require('./library');

// Definición del modelo de Book
const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Definición de la relación entre Library y Book
Library.hasMany(Book);
Book.belongsTo(Library);

module.exports = Book;
