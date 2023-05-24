const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authenticationMiddleware = require('../middleware/authentication');

router.post('/', authenticationMiddleware, bookController.createBook);
router.get('/:id', bookController.getBook);
router.get('/', bookController.getAllBooks);
router.put('/:id', authenticationMiddleware, bookController.updateBook);
router.delete('/:id', authenticationMiddleware, bookController.deleteBook);

module.exports = router;
