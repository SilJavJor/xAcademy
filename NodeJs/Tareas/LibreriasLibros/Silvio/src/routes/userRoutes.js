const express = require('express');
const router = express.Router();
const passport = require('../middlewares/authMiddleware');
const UserController = require('../controllers/userController');


//router.post('/login', userController.login);
router.post('/login', passport.authenticate('local'), UserController.login);

module.exports = router;
