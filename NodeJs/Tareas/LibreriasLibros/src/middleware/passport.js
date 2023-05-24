const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { Library } = require('../models');

// Configuración de Passport
passport.use(new LocalStrategy(
  async function(username, password, done) {
    try {
      const library = await Library.findOne({ where: { name: username } });

      if (!library) {
        return done(null, false, { message: 'Librería no encontrada.' });
      }

      const passwordMatch = await bcrypt.compare(password, library.password);

      if (!passwordMatch) {
        return done(null, false, { message: 'Contraseña incorrecta.' });
      }

      return done(null, library);
    } catch (error) {
      return done(error);
    }
  }
));

passport.serializeUser(function(library, done) {
  done(null, library.id);
});

passport.deserializeUser(async function(id, done) {
  try {
    const library = await Library.findByPk(id);
    done(null, library);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;
