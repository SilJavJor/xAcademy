const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/libraryController');
const authenticationMiddleware = require('../middleware/authentication');

router.post('/', authenticationMiddleware, libraryController.createLibrary);
router.get('/:id', libraryController.getLibrary);
router.get('/', libraryController.getAllLibraries);
router.put('/:id', authenticationMiddleware, libraryController.updateLibrary);
router.delete('/:id', authenticationMiddleware, libraryController.deleteLibrary);
router.post('/:id/book', authenticationMiddleware, libraryController.addBookToLibrary);

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const { Library, Book } = require('../models');

// // Obtener todas las librerías con sus libros asociados
// router.get('/', function(req, res) {
//   Library.findAll({
//     include: Book
//   })
//     .then(libraries => {
//       res.json(libraries);
//     })
//     .catch(error => {
//       res.status(500).json({ error: error.message });
//     });
// });

// // Crear una nueva librería
// router.post('/', function(req, res) {
//   Library.create({
//     name: req.body.name
//   })
//     .then(library => {
//       res.json(library);
//     })
//     .catch(error => {
//       res.status(500).json({ error: error.message });
//     });
// });

// module.exports = router;
