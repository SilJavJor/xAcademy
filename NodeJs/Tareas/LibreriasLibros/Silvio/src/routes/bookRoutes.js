const express = require('express');
const router = express.Router();
//const passport = require('../middlewares/authMiddleware');
// const authenticationMiddleware = require('../middleware/authentication');
const passport = require('../middlewares/authentication-middleware');
const BookController = require('../controllers/bookController');

router.get('/', BookController.getAllBooks);
router.get('/:id', BookController.getBook);
//router.post('/', passport.authenticate('local'), BookController.createBook);
//router.put('/:id', passport.authenticate('local'), BookController.updateBook);
//router.delete('/:id', passport.authenticate('local'), BookController.deleteBook);

module.exports = router;




// router.post('/', authenticationMiddleware, bookController.createBook);
// router.get('/:id', bookController.getBook);
// router.get('/', bookController.getAllBooks);
// router.put('/:id', authenticationMiddleware, bookController.updateBook);
// router.delete('/:id', authenticationMiddleware, bookController.deleteBook);

