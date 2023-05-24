const sequelize = require('../database');
const Library = require('./library');
const Book = require('./book');

// Inicialización de los modelos y sincronización con la base de datos
const initModels = async () => {
  await sequelize.sync();
};

module.exports = {
  Library,
  Book,
  initModels
};


// Inicialización de los modelos y sincronización con la base de datos
// initModels()
//   .then(() => {
//     // Sincronizar los modelos con la base de datos
//     return sequelize.sync();
//   })
//   .then(() => {
//     // Iniciar servidor
//     app.listen(3000, function() {
//       console.log('Servidor iniciado en el puerto 3000');
//     });
//   })
//   .catch(error => {
//     console.error('Error al sincronizar la base de datos:', error);
//   });
